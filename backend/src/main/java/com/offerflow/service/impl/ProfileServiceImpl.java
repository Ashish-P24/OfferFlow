package com.offerflow.service.impl;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.offerflow.dto.request.ChangePasswordRequest;
import com.offerflow.dto.response.UserProfileResponse;
import com.offerflow.entity.User;
import com.offerflow.exception.InvalidPasswordException;
import com.offerflow.repository.UserRepository;
import com.offerflow.service.ProfileService;

@Service
@Transactional
public class ProfileServiceImpl
        implements ProfileService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    public ProfileServiceImpl(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder) {

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserProfileResponse getProfile(
            User user) {

        return new UserProfileResponse(
                user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail());
    }

    @Override
    public void changePassword(
            ChangePasswordRequest request,
            User user) {

        if (!passwordEncoder.matches(
                request.getCurrentPassword(),
                user.getPassword())) {

            throw new InvalidPasswordException(
                    "Current password is incorrect.");
        }

        user.setPassword(
                passwordEncoder.encode(
                        request.getNewPassword()));

        userRepository.save(user);
    }
}