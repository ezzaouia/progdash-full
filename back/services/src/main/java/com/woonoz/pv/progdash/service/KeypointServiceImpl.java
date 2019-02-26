package com.woonoz.pv.progdash.service;

import static java.util.stream.Collectors.averagingInt;
import static java.util.stream.Collectors.summingDouble;
import static java.util.stream.Collectors.toMap;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import javax.annotation.Nullable;
import javax.inject.Inject;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.woonoz.pv.progdash.dao.dbo.ChapterNameDbo;
import com.woonoz.pv.progdash.dao.dbo.KeypointPracticeDbo;
import com.woonoz.pv.progdash.dao.mapper.KeypointMapper;
import com.woonoz.pv.progdash.dto.DifferentialDto;
import com.woonoz.pv.progdash.dto.RuleDataInfoDto;
import com.woonoz.pv.progdash.dto.TopNRulesDto;
import com.woonoz.pv.progdash.dto.UserDataInfoDto;
import com.woonoz.service.DateProvider;

@Service
@Transactional(propagation = Propagation.MANDATORY)
public class KeypointServiceImpl implements KeypointService {

	@Inject private KeypointMapper keypointMapper;

	@Inject
	@Qualifier("coreDateProvider")
	private DateProvider coreDateProvider;

	@Override
	public DataFromKeypoints processKeypoints(int areaId, @Nullable Integer groupId, int nbItemsForTop) {
		List<KeypointPracticeDbo> kpPracticeDbos = keypointMapper.getKeypointsPractice(areaId, groupId);

		DataFromKeypoints dataFromKeypoints = new DataFromKeypoints();
		addTopRulesToData(dataFromKeypoints, kpPracticeDbos, nbItemsForTop);
		addTopHelpUsers(dataFromKeypoints, kpPracticeDbos, nbItemsForTop);
		addTopScoreUsers(dataFromKeypoints, kpPracticeDbos, nbItemsForTop);

		return dataFromKeypoints;

	}

	private void addTopRulesToData(DataFromKeypoints dataFromKeypoints, List<KeypointPracticeDbo> kpPracticeDbos, int nbItemsForTop) {

		Map<Integer, Double> difficultChapters = getDifficultyChapters2(kpPracticeDbos);
		Map<Integer, Double> learnedChapters = getLearnedChapters(kpPracticeDbos);
		Map<Integer, Double> initiallyKnownChapters = getInitiallyKnownChapters(kpPracticeDbos);

		List<Integer> topDifficultyChapters = sortByValueAndSelectTop(difficultChapters, nbItemsForTop);
		List<Integer> topLearnedChapters = sortByValueAndSelectTop(learnedChapters, nbItemsForTop);
		List<Integer> topInitiallyKnownChapters = sortByValueAndSelectTop(initiallyKnownChapters, nbItemsForTop);

		Set<Integer> chaptersList = new HashSet<>();
		chaptersList.addAll(topDifficultyChapters);
		chaptersList.addAll(topLearnedChapters);
		chaptersList.addAll(topInitiallyKnownChapters);
		Map<Integer, ChapterNameDbo> chapterNames = keypointMapper.getChapterNames(chaptersList);

		List<RuleDataInfoDto> topDifficultyDto = buildTopRulesDto(topDifficultyChapters, chapterNames, difficultChapters);
		List<RuleDataInfoDto> topLearnedDto = buildTopRulesDto(topLearnedChapters, chapterNames, learnedChapters);
		List<RuleDataInfoDto> topInitiallyKnownDto = buildTopRulesDto(topInitiallyKnownChapters, chapterNames, initiallyKnownChapters);

		dataFromKeypoints.setLastWeekTopRules(new TopNRulesDto(topDifficultyDto, topLearnedDto, topInitiallyKnownDto));
		dataFromKeypoints.setLastMonthTopRules(new TopNRulesDto(topDifficultyDto, topLearnedDto, topInitiallyKnownDto));
	}

	private Map<Integer, Double> getDifficultyChapters2(List<KeypointPracticeDbo> kpPracticeDbos) {
		return kpPracticeDbos.stream()
				// where maxWeight < 1
				.filter(kpPracticeDbo -> kpPracticeDbo.getMaxWeight() < 1)
				// group by chapterId and average the nbInteractions
				.collect(
						Collectors.groupingBy(
								KeypointPracticeDbo::getChapterId,
								averagingInt(KeypointPracticeDbo::getNbInteractions)
						)
				);
	}

	private Map<Integer, Double> getLearnedChapters(List<KeypointPracticeDbo> kpPracticeDbos) {
		return kpPracticeDbos.stream()
				// where maxWeight = 1
				.filter(kpPracticeDbo -> kpPracticeDbo.getMaxWeight() == 1 && kpPracticeDbo.getInitialWeight() == 0)
				// group by chapterId and average the nbInteractions
				.collect(
						Collectors.groupingBy(
								KeypointPracticeDbo::getChapterId,
								averagingInt(KeypointPracticeDbo::getNbInteractions)
						)
				);
	}

	private Map<Integer, Double> getInitiallyKnownChapters(List<KeypointPracticeDbo> kpPracticeDbos) {
		return kpPracticeDbos.stream()
				// where maxWeight < 1
				.filter(kpPracticeDbo -> kpPracticeDbo.getInitialWeight() == 1)
				// group by chapterId and average the nbInteractions
				.collect(
						Collectors.groupingBy(
								KeypointPracticeDbo::getChapterId,
								averagingInt(KeypointPracticeDbo::getNbInteractions)
						)
				);
	}

	private List<Integer> sortByValueAndSelectTop(Map<Integer, Double> map, int nbItemsForTop) {
		// sort by value desc
		Map<Integer, Double> orderedChapters = map.entrySet().stream()
				.sorted(Collections.reverseOrder(Map.Entry.comparingByValue()))
				.collect(
						toMap(Map.Entry::getKey, Map.Entry::getValue, (e1, e2) -> e2,
								LinkedHashMap::new));

		// get the top elements
		List<Integer> topChapters = new ArrayList<>();
		int iter = 0;
		Iterator<Integer> iterator = orderedChapters.keySet().iterator();
		while (iter < nbItemsForTop && iter < orderedChapters.size()) {
			topChapters.add(iterator.next());
			iter++;
		}
		return topChapters;
	}

	private List<RuleDataInfoDto> buildTopRulesDto(List<Integer> topChapters, Map<Integer, ChapterNameDbo> chapterNames, Map<Integer, Double> chaptersDifficulty) {
		List<RuleDataInfoDto> topRulesList = new ArrayList<>();
		for (Integer chapterId : topChapters) {
			topRulesList.add(new RuleDataInfoDto(
					chapterId,
					chapterNames.get(chapterId).getName(),
					Math.round(Math.round(chaptersDifficulty.get(chapterId)))));
		}
		return topRulesList;
	}

	private void addTopHelpUsers(DataFromKeypoints dataFromKeypoints, List<KeypointPracticeDbo> kpPracticeDbos, int nbItemsForTop) {
		dataFromKeypoints.setLastWeekTopUsersHelp(getHelpUsersInPeriodDto(kpPracticeDbos, nbItemsForTop, 7));
		dataFromKeypoints.setLastMonthTopUsersHelp(getHelpUsersInPeriodDto(kpPracticeDbos, nbItemsForTop, 30));
	}

	private void addTopScoreUsers(DataFromKeypoints dataFromKeypoints, List<KeypointPracticeDbo> kpPracticeDbos, int nbItemsForTop) {
		dataFromKeypoints.setLastWeekTopUsersScore(getScoreUsersInPeriodDto(kpPracticeDbos, nbItemsForTop, 7));
		dataFromKeypoints.setLastMonthTopUsersScore(getScoreUsersInPeriodDto(kpPracticeDbos, nbItemsForTop, 30));
	}

	private List<UserDataInfoDto> getHelpUsersInPeriodDto(List<KeypointPracticeDbo> kpPracticeDbos, int nbItemsForTop, int nbDays) {

		Period period = new Period(coreDateProvider.now(), nbDays);

		Map<Integer, Double> usersInLastPeriod = getHelplessUsers(kpPracticeDbos, period.getMainStartDate(), period.getMainEndDate());
		Map<Integer, Double> usersInPreviousPeriod = getHelplessUsers(kpPracticeDbos, period.getPreviousStartDate(), period.getPreviousEndDate());
		List<Integer> topUsersInPeriod = sortByValueAndSelectTop(usersInLastPeriod, nbItemsForTop);

		return copyUsersInDto(usersInLastPeriod, usersInPreviousPeriod, topUsersInPeriod);
	}

	private List<UserDataInfoDto> getScoreUsersInPeriodDto(List<KeypointPracticeDbo> kpPracticeDbos, int nbItemsForTop, int nbDays) {

		Period period = new Period(coreDateProvider.now(), nbDays);

		Map<Integer, Double> usersInLastPeriod = getScoreUsers(kpPracticeDbos, period.getMainStartDate(), period.getMainEndDate());
		Map<Integer, Double> usersInPreviousPeriod = getScoreUsers(kpPracticeDbos, period.getPreviousStartDate(), period.getPreviousEndDate());
		List<Integer> topUsersInPeriod = sortByValueAndSelectTop(usersInLastPeriod, nbItemsForTop);

		return copyUsersInDto(usersInLastPeriod, usersInPreviousPeriod, topUsersInPeriod);
	}

	private List<UserDataInfoDto> copyUsersInDto(Map<Integer, Double> usersInLastPeriod, Map<Integer, Double> usersInPreviousPeriod, List<Integer> topUsersInPeriod) {
		List<UserDataInfoDto> usersInPeriodDto = new ArrayList<>();
		for (Integer userId : topUsersInPeriod) {
			int lastMonthNbInteractions = usersInLastPeriod.get(userId) == null ? 0 : Math.round(Math.round(usersInLastPeriod.get(userId)));
			int previousMonthNbInteractions = usersInPreviousPeriod.get(userId) == null ? 0 : Math.round(Math.round(usersInPreviousPeriod.get(userId)));
			usersInPeriodDto.add(new UserDataInfoDto(userId, new DifferentialDto(lastMonthNbInteractions, lastMonthNbInteractions - previousMonthNbInteractions)));
		}
		return usersInPeriodDto;
	}

	private Map<Integer, Double> getHelplessUsers(List<KeypointPracticeDbo> kpPracticeDbos, Date startDate, Date endDate) {
		return kpPracticeDbos.stream()
				// where date is in range
				.filter(kpPracticeDbo ->
						startDate.compareTo(kpPracticeDbo.getLastPracticeDate()) < 0
						&&
						kpPracticeDbo.getLastPracticeDate().compareTo(endDate) <= 0
						)
				// group by chapterId and average the nbInteractions
				.collect(
						Collectors.groupingBy(
								KeypointPracticeDbo::getUserId,
								averagingInt(KeypointPracticeDbo::getNbInteractions)
						)
				);
	}

	private Map<Integer, Double> getScoreUsers(List<KeypointPracticeDbo> kpPracticeDbos, Date startDate, Date endDate) {
		return kpPracticeDbos.stream()
				// where date is in range
				.filter(kpPracticeDbo ->
						startDate.compareTo(kpPracticeDbo.getLastPracticeDate()) < 0
								&&
								kpPracticeDbo.getLastPracticeDate().compareTo(endDate) <= 0
				)
				// group by chapterId and average the nbInteractions
				.collect(
						Collectors.groupingBy(
								KeypointPracticeDbo::getUserId,
								summingDouble(KeypointPracticeDbo::getMaxWeight)
						)
				);
	}

}
