package com.offerflow.mapper;

import java.util.List;

import org.springframework.stereotype.Component;

import com.offerflow.dto.response.InterviewResponse;
import com.offerflow.entity.Interview;

@Component
public class InterviewMapper {

    public InterviewResponse toResponse(
            Interview interview) {

        InterviewResponse response =
                new InterviewResponse();

        response.setId(interview.getId());

        response.setJobApplicationId(
                interview.getJobApplication().getId());

        response.setCompany(
                interview.getJobApplication().getCompany());

        response.setJobTitle(
                interview.getJobApplication().getJobTitle());

        response.setRound(interview.getRound());

        response.setInterviewDate(
                interview.getInterviewDate());

        response.setInterviewTime(
                interview.getInterviewTime());

        response.setMode(
                interview.getMode());

        response.setStatus(
                interview.getStatus());

        response.setInterviewer(
                interview.getInterviewer());

        response.setLocation(
                interview.getLocation());

        response.setNotes(
                interview.getNotes());

        response.setFeedback(
                interview.getFeedback());

        return response;
    }

    public List<InterviewResponse> toResponseList(
            List<Interview> interviews) {

        return interviews
                .stream()
                .map(this::toResponse)
                .toList();
    }
}