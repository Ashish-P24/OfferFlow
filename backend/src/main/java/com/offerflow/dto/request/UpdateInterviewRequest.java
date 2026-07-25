package com.offerflow.dto.request;

import java.time.LocalDate;
import java.time.LocalTime;

import com.offerflow.entity.InterviewMode;
import com.offerflow.entity.InterviewStatus;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateInterviewRequest {

    @NotBlank
    private String round;

    @NotNull
    private LocalDate interviewDate;

    @NotNull
    private LocalTime interviewTime;

    @NotNull
    private InterviewMode mode;

    @NotNull
    private InterviewStatus status;

    private String interviewer;

    private String location;

    private String notes;

    private String feedback;
}