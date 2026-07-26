package com.offerflow.dto.response;

import java.util.List;

public class AnalyticsResponse {

    private long applied;

    private long interview;

    private long offer;

    private long rejected;

    private double interviewRate;

    private double successRate;

    private List<MonthlyApplicationResponse> monthlyApplications;

    public AnalyticsResponse(
            long applied,
            long interview,
            long offer,
            long rejected,
            double interviewRate,
            double successRate,
            List<MonthlyApplicationResponse> monthlyApplications) {

        this.applied = applied;
        this.interview = interview;
        this.offer = offer;
        this.rejected = rejected;
        this.interviewRate = interviewRate;
        this.successRate = successRate;
        this.monthlyApplications = monthlyApplications;
    }

    public long getApplied() {
        return applied;
    }

    public long getInterview() {
        return interview;
    }

    public long getOffer() {
        return offer;
    }

    public long getRejected() {
        return rejected;
    }

    public double getInterviewRate() {
        return interviewRate;
    }

    public double getSuccessRate() {
        return successRate;
    }

    public List<MonthlyApplicationResponse> getMonthlyApplications() {
        return monthlyApplications;
    }
}