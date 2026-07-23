package com.offerflow.service;

import com.offerflow.dto.request.RegisterRequest;
import com.offerflow.dto.response.AuthResponse;

public interface UserService {

    AuthResponse registerUser(RegisterRequest request);
}