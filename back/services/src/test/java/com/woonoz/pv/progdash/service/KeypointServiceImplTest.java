package com.woonoz.pv.progdash.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;

import org.joda.time.DateTime;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import com.woonoz.pv.progdash.dao.dbo.ChapterNameDbo;
import com.woonoz.pv.progdash.dao.dbo.KeypointPracticeDbo;
import com.woonoz.pv.progdash.dao.mapper.KeypointMapper;
import com.woonoz.pv.progdash.dto.DifferentialDto;
import com.woonoz.pv.progdash.dto.RuleDataInfoDto;
import com.woonoz.pv.progdash.dto.TopNRulesDto;
import com.woonoz.pv.progdash.dto.UserDataInfoDto;
import com.woonoz.service.DateProvider;
import com.woonoz.service.services.AbstractMockServiceTest;

public class KeypointServiceImplTest extends AbstractMockServiceTest {


	private static final SimpleDateFormat SDF = new SimpleDateFormat("dd/MM/yyyy");

	@InjectMocks private KeypointServiceImpl keypointService;
	@Mock private KeypointMapper keypointMapper;
	@Mock private DateProvider coreDateProvider;

	@Test
	public void processKeypoints() throws ParseException {
		// GIVEN
		int areaId = 5000;
        Integer groupId = null;
		DateTime day19 = new DateTime(2019, 1, 19, 0, 0);
		Date day18 = SDF.parse("18/01/2019");
		Date day10 = SDF.parse("10/01/2019");
		int user1 = 101;
		int user2 = 102;
		int user3 = 103;

		given(coreDateProvider.now()).willReturn(day19);

		given(keypointMapper.getKeypointsPractice(areaId, groupId)).willReturn(Arrays.asList(
				//keypoint 1 : learning + learned + initially known
				new KeypointPracticeDbo(user1, 1, 1, "chapter1",    0, 0,  5, day18),
				new KeypointPracticeDbo(user2, 1, 1, "chapter1",    1, 0,  5, day18),
				new KeypointPracticeDbo(user3, 1, 1, "chapter1",    1, 1,  5, day18),
				//keypoint 2 : learning
				new KeypointPracticeDbo(user1, 2, 2, "chapter2",    0, 0,  8, day18),
				new KeypointPracticeDbo(user2, 2, 2, "chapter2",    0, 0, 10, day18),
				new KeypointPracticeDbo(user3, 2, 2, "chapter2",    0, 0, 12, day18),
				//keypoint 3 : learning
				new KeypointPracticeDbo(user1, 3, 3, "chapter3", 0.8f, 0, 13, day10),
				new KeypointPracticeDbo(user2, 3, 3, "chapter3", 0.8f, 0, 15, day10),
				new KeypointPracticeDbo(user3, 3, 3, "chapter3", 0.8f, 0, 17, day10),
				//keypoint 4 : learned
				new KeypointPracticeDbo(user1, 4, 4, "chapter4",    1, 0, 18, day18),
				new KeypointPracticeDbo(user2, 4, 4, "chapter4",    1, 0, 20, day18),
				new KeypointPracticeDbo(user3, 4, 4, "chapter4",    1, 0, 22, day18),
				//keypoint 5 : learned
				new KeypointPracticeDbo(user1, 5, 5, "chapter5",    1, 0, 23, day18),
				new KeypointPracticeDbo(user2, 5, 5, "chapter5",    1, 0, 25, day18),
				new KeypointPracticeDbo(user3, 5, 5, "chapter5",    1, 0, 27, day18),
				//keypoint 6 : initially known
				new KeypointPracticeDbo(user1, 6, 6, "chapter6",    1, 1, 28, day18),
				new KeypointPracticeDbo(user2, 6, 6, "chapter6",    1, 1, 30, day18),
				new KeypointPracticeDbo(user3, 6, 6, "chapter6",    1, 1, 32, day18)
				)
		);

		Map<Integer, ChapterNameDbo> chapterNames = new HashMap<>();
		chapterNames.put(1, new ChapterNameDbo(1,"chapter1"));
		chapterNames.put(2, new ChapterNameDbo(2,"chapter2"));
		chapterNames.put(3, new ChapterNameDbo(3,"chapter3"));
		chapterNames.put(4, new ChapterNameDbo(4,"chapter4"));
		chapterNames.put(5, new ChapterNameDbo(5,"chapter5"));
		chapterNames.put(6, new ChapterNameDbo(6,"chapter6"));
		given(keypointMapper.getChapterNames(new HashSet<>(Arrays.asList(1, 2, 3, 4, 5, 6)))).willReturn(chapterNames);

		// WHEN
		DataFromKeypoints dataFromKeypoints = keypointService.processKeypoints(areaId, groupId, 3);

		// THEN
		RuleDataInfoDto rule1Dto = new RuleDataInfoDto(1, "chapter1",  5);
		RuleDataInfoDto rule2Dto = new RuleDataInfoDto(2, "chapter2", 10);
		RuleDataInfoDto rule3Dto = new RuleDataInfoDto(3, "chapter3", 15);
		RuleDataInfoDto rule4Dto = new RuleDataInfoDto(4, "chapter4", 20);
		RuleDataInfoDto rule5Dto = new RuleDataInfoDto(5, "chapter5", 25);
		RuleDataInfoDto rule6Dto = new RuleDataInfoDto(6, "chapter6", 30);

		List<RuleDataInfoDto> difficultyChapters = Arrays.asList(rule3Dto, rule2Dto, rule1Dto);
		List<RuleDataInfoDto> learnedChapters = Arrays.asList(rule5Dto, rule4Dto, rule1Dto);
		List<RuleDataInfoDto> initiallyKnownChapters = Arrays.asList(rule6Dto, rule1Dto);

		Map<Integer, TopNRulesDto> userMap = new HashMap<Integer, TopNRulesDto>();
		userMap.put(101, new TopNRulesDto(
				//focused
				Arrays.asList(
						new RuleDataInfoDto(3, "chapter3",  13),
						new RuleDataInfoDto(2, "chapter2",  8),
						new RuleDataInfoDto(1, "chapter1",  5)
				),
				// acquired
				Arrays.asList(
						new RuleDataInfoDto(5, "chapter5",  23),
						new RuleDataInfoDto(4, "chapter4",  18)
				),
				// known
				Arrays.asList(
						new RuleDataInfoDto(6, "chapter6",  28)
				)));
		userMap.put(102, new TopNRulesDto(
				//focused
				Arrays.asList(
						new RuleDataInfoDto(3, "chapter3",  15),
						new RuleDataInfoDto(2, "chapter2",  10)

				),
				// acquired
				Arrays.asList(
						new RuleDataInfoDto(5, "chapter5",  25),
						new RuleDataInfoDto(4, "chapter4",  20),
						new RuleDataInfoDto(1, "chapter1",  5)
				),
				// known
				Arrays.asList(
						new RuleDataInfoDto(6, "chapter6",  30)
				)));
		userMap.put(103, new TopNRulesDto(
				//focused
				Arrays.asList(
						new RuleDataInfoDto(3, "chapter3",  17),
						new RuleDataInfoDto(2, "chapter2",  12)

				),
				// acquired
				Arrays.asList(
						new RuleDataInfoDto(5, "chapter5",  27),
						new RuleDataInfoDto(4, "chapter4",  22)
				),
				// known
				Arrays.asList(
						new RuleDataInfoDto(6, "chapter6",  32),
						new RuleDataInfoDto(1, "chapter1",  5)
				)));

		List<UserDataInfoDto> lastWeekTopUsers = Arrays.asList(
				new UserDataInfoDto(user3, new DifferentialDto(20, 3)),
				new UserDataInfoDto(user2, new DifferentialDto(18, 3)),
				new UserDataInfoDto(user1, new DifferentialDto(16, 3))
		);
		List<UserDataInfoDto> lastMonthTopUsers = Arrays.asList(
				new UserDataInfoDto(user3, new DifferentialDto(19, 19)),
				new UserDataInfoDto(user2, new DifferentialDto(18, 18)),
				new UserDataInfoDto(user1, new DifferentialDto(16, 16))
		);

		DataFromKeypoints expectedResult = new DataFromKeypoints();
		expectedResult.setLastWeekTopRules(new TopNRulesDto(difficultyChapters, learnedChapters, initiallyKnownChapters));
		expectedResult.setLastMonthTopRules(new TopNRulesDto(difficultyChapters, learnedChapters, initiallyKnownChapters));
		expectedResult.setLastWeekTopUsers(lastWeekTopUsers);
		expectedResult.setLastMonthTopUsers(lastMonthTopUsers);
		expectedResult.setUsersMap(userMap);

		assertThat(dataFromKeypoints).isEqualToComparingFieldByFieldRecursively(expectedResult);
	}
}