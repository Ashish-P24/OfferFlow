export interface InterviewRequest {
  jobApplicationId: number;

  round: string;

  interviewDate: string;

  interviewTime: string;

  mode: "ONLINE" | "OFFLINE" | "PHONE";

  status: "SCHEDULED" | "COMPLETED" | "CANCELLED";

  interviewer: string;

  location: string;

  notes: string;

  feedback: string;
}