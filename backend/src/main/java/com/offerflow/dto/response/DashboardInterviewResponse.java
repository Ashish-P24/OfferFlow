package com.offerflow.dto.response;

import java.time.LocalDate;
import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class DashboardInterviewResponse {

    private String company;

    private String jobTitle;

    private String round;

    private LocalDate interviewDate;

    private LocalTime interviewTime;
}