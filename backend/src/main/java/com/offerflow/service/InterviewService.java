package com.offerflow.service;

import java.util.List;

import com.offerflow.dto.request.CreateInterviewRequest;
import com.offerflow.dto.request.UpdateInterviewRequest;
import com.offerflow.dto.response.InterviewResponse;
import com.offerflow.entity.User;

public interface InterviewService {

    InterviewResponse createInterview(
            CreateInterviewRequest request,
            User user);

    List<InterviewResponse> getInterviews(
            User user);

    InterviewResponse getInterviewById(
            Long id,
            User user);

    InterviewResponse updateInterview(
            Long id,
            UpdateInterviewRequest request,
            User user);

    void deleteInterview(
            Long id,
            User user);
}