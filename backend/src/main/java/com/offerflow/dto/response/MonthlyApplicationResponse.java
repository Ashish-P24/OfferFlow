package com.offerflow.dto.response;

public class MonthlyApplicationResponse {

    private String month;

    private long count;

    public MonthlyApplicationResponse(
            String month,
            long count) {

        this.month = month;
        this.count = count;
    }

    public String getMonth() {
        return month;
    }

    public long getCount() {
        return count;
    }
}