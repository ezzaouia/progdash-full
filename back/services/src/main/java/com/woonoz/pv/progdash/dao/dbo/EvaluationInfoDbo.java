package com.woonoz.pv.progdash.dao.dbo;

public class EvaluationInfoDbo {
    private String fullName;
    private String evaluationName;
    private int userId;
    private Float mark;
    private int progression;
    private float timeSpentInMin;

    public String getFullName() {
        return fullName;
    }

    public String getEvaluationName() {
        return evaluationName;
    }

    public int getUserId() {
        return userId;
    }

    public Float getMark() {
        return mark;
    }

    public int getProgression() {
        return progression;
    }

    public float getTimeSpentInMin() {
        return timeSpentInMin;
    }
}
