package com.woonoz.pv.progdash.dto;

import com.google.common.base.MoreObjects;

public class EvaluationInfoDto {

    private String fullName;
    private String evaluationName;
    private int id; //userId name must be "id" because of front constraints
    private Float mark;
    private int score;
    private float time;

    public EvaluationInfoDto(String fullName, int id, String evaluationName, Float mark, int score, float time) {
        this.fullName = fullName;
        this.id = id;
        this.evaluationName = evaluationName;
        this.mark = mark;
        this.score = score;
        this.time = time;
    }

    public String getFullName() {
        return fullName;
    }

    public String getEvaluationName() {
        return evaluationName;
    }

    public int getId() {
        return id;
    }

    public Float getMark() {
        return mark;
    }

    public int getScore() {
        return score;
    }

    public float getTime() {
        return time;
    }

    @Override
    public String toString() {
        return MoreObjects.toStringHelper(this)
                .add("fullName", fullName)
                .add("userId", id)
                .add("evaluationName", evaluationName)
                .add("mark", mark)
                .add("score", score)
                .add("time", time)
                .toString();
    }
}
