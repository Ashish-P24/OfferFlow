import api from "@/api/axios";

import type {
  Profile,
  ChangePasswordRequest,
} from "@/types/profile";

export async function getProfile() {
  const response =
    await api.get<Profile>(
      "/profile",
    );

  return response.data;
}

export async function changePassword(
  request: ChangePasswordRequest,
) {
  await api.put(
    "/profile/password",
    request,
  );
}