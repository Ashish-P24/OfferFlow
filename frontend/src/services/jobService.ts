import api from "@/api/axios";
import type { JobApplication } from "@/types/job";

export async function getApplications(): Promise<JobApplication[]> {
  const response = await api.get("/jobs");

  return response.data;
}