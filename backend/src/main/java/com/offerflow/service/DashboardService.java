package com.offerflow.service;

import com.offerflow.dto.response.DashboardResponse;
import com.offerflow.entity.User;

public interface DashboardService {

    DashboardResponse getDashboard(User user);
}