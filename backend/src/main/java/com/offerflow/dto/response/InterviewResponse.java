package com.offerflow.dto.response;

import java.time.LocalDate;
import java.time.LocalTime;

import com.offerflow.entity.InterviewMode;
import com.offerflow.entity.InterviewStatus;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class InterviewResponse {

    private Long id;

    private Long jobApplicationId;

    private String company;

    private String jobTitle;

    private String round;

    private LocalDate interviewDate;

    private LocalTime interviewTime;

    private InterviewMode mode;

    private InterviewStatus status;

    private String interviewer;

    private String location;

    private String notes;

    private String feedback;
}