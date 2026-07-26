package com.offerflow.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class DashboardStatsResponse {

    private long totalApplications;

    private long applied;

    private long interview;

    private long offer;

    private long rejected;
}