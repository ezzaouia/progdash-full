package com.woonoz.pv.progdash.dao.dbo;

public class ChapterNameDbo {

	private Integer chapterId;
	private String name;

	@SuppressWarnings("unused") //required for Mybatis
	public ChapterNameDbo() {
	}

	public ChapterNameDbo(Integer chapterId, String name) {
		this.chapterId = chapterId;
		this.name = name;
	}

	public Integer getChapterId() {
		return chapterId;
	}

	public String getName() {
		return name;
	}
}
