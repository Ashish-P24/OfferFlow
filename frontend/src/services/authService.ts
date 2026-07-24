import api from "@/api/axios";

import type {
  LoginRequest,
  LoginResponse,
} from "@/types/auth";

export async function login(
  request: LoginRequest
): Promise<LoginResponse> {

  const response = await api.post(
    "/auth/login",
    request
  );

  return response.data;
}