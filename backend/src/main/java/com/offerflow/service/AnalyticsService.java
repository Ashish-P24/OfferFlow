package com.offerflow.service;

import com.offerflow.dto.response.AnalyticsResponse;
import com.offerflow.entity.User;

public interface AnalyticsService {

    AnalyticsResponse getAnalytics(
            User user);
}

//hi