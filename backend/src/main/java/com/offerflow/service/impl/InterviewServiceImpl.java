package com.offerflow.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.offerflow.dto.request.CreateInterviewRequest;
import com.offerflow.dto.request.UpdateInterviewRequest;
import com.offerflow.dto.response.InterviewResponse;
import com.offerflow.entity.Interview;
import com.offerflow.entity.JobApplication;
import com.offerflow.entity.User;
import com.offerflow.exception.InterviewNotFoundException;
import com.offerflow.exception.JobApplicationNotFoundException;
import com.offerflow.mapper.InterviewMapper;
import com.offerflow.repository.InterviewRepository;
import com.offerflow.repository.JobApplicationRepository;
import com.offerflow.service.InterviewService;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class InterviewServiceImpl
        implements InterviewService {

    private final InterviewRepository interviewRepository;

    private final JobApplicationRepository jobApplicationRepository;

    private final InterviewMapper interviewMapper;

    public InterviewServiceImpl(
            InterviewRepository interviewRepository,
            JobApplicationRepository jobApplicationRepository,
            InterviewMapper interviewMapper) {

        this.interviewRepository = interviewRepository;
        this.jobApplicationRepository = jobApplicationRepository;
        this.interviewMapper = interviewMapper;
    }

    @Override
    public InterviewResponse createInterview(
            CreateInterviewRequest request,
            User user) {

        JobApplication jobApplication =
                findJobApplication(
                        request.getJobApplicationId(),
                        user);

        Interview interview = new Interview();

        interview.setRound(request.getRound());
        interview.setInterviewDate(
                request.getInterviewDate());
        interview.setInterviewTime(
                request.getInterviewTime());
        interview.setMode(request.getMode());
        interview.setStatus(request.getStatus());
        interview.setInterviewer(
                request.getInterviewer());
        interview.setLocation(
                request.getLocation());
        interview.setNotes(
                request.getNotes());
        interview.setFeedback(
                request.getFeedback());

        interview.setJobApplication(jobApplication);

        Interview savedInterview =
                interviewRepository.save(interview);

        return interviewMapper.toResponse(
                savedInterview);
    }

    @Override
    public List<InterviewResponse> getInterviews(
            User user) {

        List<Interview> interviews =
                interviewRepository
                        .findByJobApplicationUser(user);

        return interviewMapper.toResponseList(
                interviews);
    }

    @Override
    public InterviewResponse getInterviewById(
            Long id,
            User user) {

        Interview interview =
                findInterview(id, user);

        return interviewMapper.toResponse(
                interview);
    }

    @Override
    public InterviewResponse updateInterview(
            Long id,
            UpdateInterviewRequest request,
            User user) {

        Interview interview =
                findInterview(id, user);

        interview.setRound(request.getRound());

        interview.setInterviewDate(
                request.getInterviewDate());

        interview.setInterviewTime(
                request.getInterviewTime());

        interview.setMode(request.getMode());

        interview.setStatus(request.getStatus());

        interview.setInterviewer(
                request.getInterviewer());

        interview.setLocation(
                request.getLocation());

        interview.setNotes(
                request.getNotes());

        interview.setFeedback(
                request.getFeedback());

        Interview updatedInterview =
                interviewRepository.save(interview);

        return interviewMapper.toResponse(
                updatedInterview);
    }

    @Override
    public void deleteInterview(
            Long id,
            User user) {

        Interview interview =
                findInterview(id, user);

        interviewRepository.delete(interview);
    }

    private Interview findInterview(
            Long id,
            User user) {

        return interviewRepository
                .findByIdAndJobApplicationUser(
                        id,
                        user)
                .orElseThrow(() ->
                        new InterviewNotFoundException(
                                "Interview not found."));
    }

    private JobApplication findJobApplication(
            Long id,
            User user) {

        return jobApplicationRepository
                .findByIdAndUser(id, user)
                .orElseThrow(() ->
                        new JobApplicationNotFoundException(
                                "Job application not found."));
    }
}