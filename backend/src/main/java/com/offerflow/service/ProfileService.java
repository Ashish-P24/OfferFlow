package com.offerflow.service;

import com.offerflow.dto.request.ChangePasswordRequest;
import com.offerflow.dto.response.UserProfileResponse;
import com.offerflow.entity.User;

public interface ProfileService {

    UserProfileResponse getProfile(
            User user);

    void changePassword(
            ChangePasswordRequest request,
            User user);
}