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

import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import com.woonoz.pv.progdash.dao.dbo.ChapterNameDbo;
import com.woonoz.pv.progdash.dao.dbo.KeypointPracticeDbo;
import com.woonoz.pv.progdash.dao.mapper.KeypointMapper;
import com.woonoz.pv.progdash.dto.RuleDataInfoDto;
import com.woonoz.pv.progdash.dto.TopNRulesDto;
import com.woonoz.service.services.AbstractMockServiceTest;

public class KeypointServiceImplTest extends AbstractMockServiceTest {


	private static final SimpleDateFormat SDF = new SimpleDateFormat("dd/MM/yyyy");

	@InjectMocks private KeypointServiceImpl keypointService;
	@Mock private KeypointMapper keypointMapper;

	@Test
	public void processKeypoints() throws ParseException {
		// GIVEN
		int areaId = 5000;
		Date day18 = SDF.parse("18/01/1019");
		Date day10 = SDF.parse("10/01/1019");
		given(keypointMapper.getKeypointsPractice(areaId)).willReturn(Arrays.asList(
				//keypoint 1 : learning + learned + initially known
				new KeypointPracticeDbo(101, 1, 1, "chapter1",    0, 0,  5, day18),
				new KeypointPracticeDbo(102, 1, 1, "chapter1",    1, 0,  5, day18),
				new KeypointPracticeDbo(103, 1, 1, "chapter1",    1, 1,  5, day18),
				//keypoint 2 : learning
				new KeypointPracticeDbo(101, 2, 2, "chapter2",    0, 0, 10, day18),
				new KeypointPracticeDbo(102, 2, 2, "chapter2",    0, 0, 10, day18),
				new KeypointPracticeDbo(103, 2, 2, "chapter2",    0, 0, 10, day18),
				//keypoint 3 : learning
				new KeypointPracticeDbo(101, 3, 3, "chapter3", 0.8f, 0, 15, day10),
				new KeypointPracticeDbo(102, 3, 3, "chapter3", 0.8f, 0, 15, day10),
				new KeypointPracticeDbo(103, 3, 3, "chapter3", 0.8f, 0, 15, day10),
				//keypoint 4 : learned
				new KeypointPracticeDbo(101, 4, 4, "chapter4",    1, 0, 20, day18),
				new KeypointPracticeDbo(102, 4, 4, "chapter4",    1, 0, 20, day18),
				new KeypointPracticeDbo(103, 4, 4, "chapter4",    1, 0, 20, day18),
				//keypoint 5 : learned
				new KeypointPracticeDbo(101, 5, 5, "chapter5",    1, 0, 25, day18),
				new KeypointPracticeDbo(102, 5, 5, "chapter5",    1, 0, 25, day18),
				new KeypointPracticeDbo(103, 5, 5, "chapter5",    1, 0, 25, day18),
				//keypoint 6 : initially known
				new KeypointPracticeDbo(101, 6, 6, "chapter6",    1, 1, 30, day18),
				new KeypointPracticeDbo(102, 6, 6, "chapter6",    1, 1, 30, day18),
				new KeypointPracticeDbo(103, 6, 6, "chapter6",    1, 1, 30, day18)
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
		DataFromKeypoints dataFromKeypoints = keypointService.processKeypoints(areaId, 3);

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
						new RuleDataInfoDto(3, "chapter3",  15),
						new RuleDataInfoDto(2, "chapter2",  10),
						new RuleDataInfoDto(1, "chapter1",  5)
				),
				// acquired
				Arrays.asList(
						new RuleDataInfoDto(5, "chapter5",  25),
						new RuleDataInfoDto(4, "chapter4",  20)
				),
				// known
				Arrays.asList(
						new RuleDataInfoDto(6, "chapter6",  30)
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
						new RuleDataInfoDto(3, "chapter3",  15),
						new RuleDataInfoDto(2, "chapter2",  10)

				),
				// acquired
				Arrays.asList(
						new RuleDataInfoDto(5, "chapter5",  25),
						new RuleDataInfoDto(4, "chapter4",  20)
				),
				// known
				Arrays.asList(
						new RuleDataInfoDto(6, "chapter6",  30),
						new RuleDataInfoDto(1, "chapter1",  5)
				)));

		DataFromKeypoints expectedResult = new DataFromKeypoints();
		expectedResult.setLastWeekTopRules(new TopNRulesDto(difficultyChapters, learnedChapters, initiallyKnownChapters));
		expectedResult.setLastMonthTopRules(new TopNRulesDto(difficultyChapters, learnedChapters, initiallyKnownChapters));
		expectedResult.setUsersMap(userMap);

		assertThat(dataFromKeypoints).isEqualToComparingFieldByFieldRecursively(expectedResult);
	}
}