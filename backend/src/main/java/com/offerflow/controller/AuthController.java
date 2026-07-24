package com.offerflow.controller;

import com.offerflow.dto.request.LoginRequest;
import com.offerflow.dto.request.RegisterRequest;
import com.offerflow.dto.response.AuthResponse;
import com.offerflow.service.UserService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public AuthResponse register(@Valid @RequestBody RegisterRequest request) {
        return userService.registerUser(request);
    }

    @PostMapping("/login")
    public AuthResponse login(@Valid @RequestBody LoginRequest request) {
        return userService.loginUser(request);
    }
}