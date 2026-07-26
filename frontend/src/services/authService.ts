import api from "@/api/axios";

import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
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

export async function register(
  request: RegisterRequest
): Promise<LoginResponse> {

  const response = await api.post(
    "/auth/register",
    request
  );

  return response.data;
}