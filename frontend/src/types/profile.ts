export interface Profile {
  id: number;

  firstName: string;

  lastName: string;

  email: string;
}

export interface ChangePasswordRequest {
  currentPassword: string;

  newPassword: string;
}