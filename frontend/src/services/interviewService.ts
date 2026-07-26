import api from "@/api/axios";

import type { Interview } from "@/types/interview";
import type { InterviewRequest } from "@/types/interviewRequest";

export async function getInterviews() {
  const response = await api.get<Interview[]>("/interviews");

  return response.data;
}

export async function getInterviewById(
  id: number,
) {
  const response = await api.get<Interview>(
    `/interviews/${id}`,
  );

  return response.data;
}

export async function createInterview(
  request: InterviewRequest,
) {
  const response = await api.post<Interview>(
    "/interviews",
    request,
  );

  return response.data;
}

export async function updateInterview(
  id: number,
  request: InterviewRequest,
) {
  const response = await api.put<Interview>(
    `/interviews/${id}`,
    request,
  );

  return response.data;
}

export async function deleteInterview(
  id: number,
) {
  await api.delete(`/interviews/${id}`);
}