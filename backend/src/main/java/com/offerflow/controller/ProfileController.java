package com.offerflow.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import jakarta.validation.Valid;

import com.offerflow.dto.request.ChangePasswordRequest;
import com.offerflow.dto.response.UserProfileResponse;
import com.offerflow.entity.User;
import com.offerflow.service.ProfileService;

@RestController
@RequestMapping("/api/v1/profile")
public class ProfileController {

    private final ProfileService profileService;

    public ProfileController(
            ProfileService profileService) {

        this.profileService = profileService;
    }

    @GetMapping
    public UserProfileResponse getProfile(
            @AuthenticationPrincipal User user) {

        return profileService.getProfile(user);
    }

    @PutMapping("/password")
    public void changePassword(
            @Valid
            @RequestBody
            ChangePasswordRequest request,
            @AuthenticationPrincipal User user) {

        profileService.changePassword(
                request,
                user);
    }
}