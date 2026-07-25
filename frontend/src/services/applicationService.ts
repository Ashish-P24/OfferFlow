import api from "@/api/axios";

import type { JobApplication } from "@/types/application";
import type { ApplicationRequest } from "@/types/applicationRequest";

export interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
  first: boolean;
  last: boolean;
}

export interface ApplicationQuery {
  page?: number;
  size?: number;
  keyword?: string;
  status?: string;
}

export async function getApplications({
  page = 0,
  size = 10,
  keyword = "",
  status = "",
}: ApplicationQuery = {}) {
  const response = await api.get<PageResponse<JobApplication>>("/jobs", {
    params: {
      page,
      size,
      keyword: keyword || undefined,
      status: status || undefined,
    },
  });

  return response.data;
}

export async function createApplication(
  request: ApplicationRequest,
) {
  const response = await api.post<JobApplication>(
    "/jobs",
    request,
  );

  return response.data;
}

export async function updateApplication(
  id: number,
  request: ApplicationRequest,
) {
  const response = await api.put<JobApplication>(
    `/jobs/${id}`,
    request,
  );

  return response.data;
}

export async function deleteApplication(
  id: number,
) {
  await api.delete(`/jobs/${id}`);
}