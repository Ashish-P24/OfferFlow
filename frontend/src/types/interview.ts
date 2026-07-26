export interface Interview {
  id: number;

  jobApplicationId: number;

  company: string;

  jobTitle: string;

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