import api from "@/api/axios";
import type { JobApplication } from "@/types/application";

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