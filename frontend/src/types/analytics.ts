export interface MonthlyApplication {
  month: string;

  count: number;
}

export interface AnalyticsResponse {
  applied: number;

  interview: number;

  offer: number;

  rejected: number;

  interviewRate: number;

  successRate: number;

  monthlyApplications: MonthlyApplication[];
}