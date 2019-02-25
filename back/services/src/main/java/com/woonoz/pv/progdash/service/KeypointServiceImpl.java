package com.woonoz.pv.progdash.service;

import static java.util.stream.Collectors.averagingInt;
import static java.util.stream.Collectors.toMap;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import javax.inject.Inject;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.woonoz.pv.progdash.dao.dbo.ChapterNameDbo;
import com.woonoz.pv.progdash.dao.dbo.KeypointPracticeDbo;
import com.woonoz.pv.progdash.dao.mapper.KeypointMapper;
import com.woonoz.pv.progdash.dto.RuleDataInfoDto;
import com.woonoz.pv.progdash.dto.TopNRulesDto;

@Service
@Transactional(propagation = Propagation.MANDATORY)
public class KeypointServiceImpl implements KeypointService {

	@Inject private KeypointMapper keypointMapper;

	@Override
	public DataFromKeypoints processKeypoints(int areaId, int nbItemsForTop) {
		List<KeypointPracticeDbo> kpPracticeDbos = keypointMapper.getKeypointsPractice(areaId);

		DataFromKeypoints dataFromKeypoints = new DataFromKeypoints();

		addTopRulesToData(dataFromKeypoints, kpPracticeDbos, nbItemsForTop);

		return dataFromKeypoints;

	}

	private void addTopRulesToData(DataFromKeypoints dataFromKeypoints, List<KeypointPracticeDbo> kpPracticeDbos, int nbItemsForTop) {

		Map<Integer, Double> difficultChapters = getDifficultyChapters2(kpPracticeDbos);
		Map<Integer, Double> learnedChapters = getLearnedChapters(kpPracticeDbos);
		Map<Integer, Double> initiallyKnownChapters = getInitiallyKnownChapters(kpPracticeDbos);

		List<Integer> topDifficultyChapters = sortByNbInteractionsAndSelectTop(difficultChapters, nbItemsForTop);
		List<Integer> topLearnedChapters = sortByNbInteractionsAndSelectTop(learnedChapters, nbItemsForTop);
		List<Integer> topInitiallyKnownChapters = sortByNbInteractionsAndSelectTop(initiallyKnownChapters, nbItemsForTop);

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

	private List<Integer> sortByNbInteractionsAndSelectTop(Map<Integer, Double> filteredChapters, int nbItemsForTop) {
		Map<Integer, Double> orderedChapters = filteredChapters.entrySet().stream()
				// sort by nbInteractions
				.sorted(Collections.reverseOrder(Map.Entry.comparingByValue()))
				.collect(
						toMap(Map.Entry::getKey, Map.Entry::getValue, (e1, e2) -> e2,
								LinkedHashMap::new));

		// get the bottom elements
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
}
