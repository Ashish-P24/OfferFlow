export type JobStatus =
  | "APPLIED"
  | "INTERVIEW"
  | "OFFER"
  | "REJECTED";

export interface JobApplication {
  id: number;

  company: string;

  jobTitle: string;

  location: string;

  jobUrl: string;

  salary: string;

  status: JobStatus;

  applicationDate: string;

  notes: string;

  createdAt: string;

  updatedAt: string;
}