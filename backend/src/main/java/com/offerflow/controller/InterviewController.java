package com.offerflow.controller;

import java.util.List;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import com.offerflow.dto.request.CreateInterviewRequest;
import com.offerflow.dto.request.UpdateInterviewRequest;
import com.offerflow.dto.response.InterviewResponse;
import com.offerflow.entity.User;
import com.offerflow.service.InterviewService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/interviews")
public class InterviewController {

    private final InterviewService interviewService;

    public InterviewController(
            InterviewService interviewService) {

        this.interviewService = interviewService;
    }

    @PostMapping
    public InterviewResponse createInterview(
            @Valid @RequestBody CreateInterviewRequest request,
            @AuthenticationPrincipal User user) {

        return interviewService.createInterview(
                request,
                user);
    }

    @GetMapping
    public List<InterviewResponse> getInterviews(
            @AuthenticationPrincipal User user) {

        return interviewService.getInterviews(user);
    }

    @GetMapping("/{id}")
    public InterviewResponse getInterviewById(
            @PathVariable Long id,
            @AuthenticationPrincipal User user) {

        return interviewService.getInterviewById(
                id,
                user);
    }

    @PutMapping("/{id}")
    public InterviewResponse updateInterview(
            @PathVariable Long id,
            @Valid @RequestBody UpdateInterviewRequest request,
            @AuthenticationPrincipal User user) {

        return interviewService.updateInterview(
                id,
                request,
                user);
    }

    @DeleteMapping("/{id}")
    public void deleteInterview(
            @PathVariable Long id,
            @AuthenticationPrincipal User user) {

        interviewService.deleteInterview(
                id,
                user);
    }
}