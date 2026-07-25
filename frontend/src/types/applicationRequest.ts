export interface ApplicationRequest {
  company: string;

  jobTitle: string;

  location: string;

  jobUrl: string;

  salary: string;

  status: "APPLIED" | "INTERVIEW" | "OFFER" | "REJECTED";

  applicationDate: string;

  notes: string;
}