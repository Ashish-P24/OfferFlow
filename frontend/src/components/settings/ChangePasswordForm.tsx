import { useState } from "react";
import Card from "@/components/ui/Card";
import { changePassword } from "@/services/profileService";

export default function ChangePasswordForm() {
  const [currentPassword, setCurrentPassword] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  async function handleSubmit(
    e: React.FormEvent,
  ) {
    e.preventDefault();

    setMessage("");

    if (
      newPassword !==
      confirmPassword
    ) {
      setMessage(
        "Passwords do not match.",
      );
      return;
    }

    try {
      setLoading(true);

      await changePassword({
        currentPassword,
        newPassword,
      });

      setMessage(
        "Password updated successfully.",
      );

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

    } catch (error: any) {

      setMessage(
        error.response?.data?.message ??
          "Failed to update password.",
      );

    } finally {
      setLoading(false);
    }
  }

  return (
    <Card>

      <h2 className="mb-4 text-xl font-semibold">
        Change Password
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="password"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e) =>
            setCurrentPassword(
              e.target.value,
            )
          }
          className="w-full rounded-lg border border-slate-300 p-3"
          required
        />

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) =>
            setNewPassword(
              e.target.value,
            )
          }
          className="w-full rounded-lg border border-slate-300 p-3"
          required
        />

        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(
              e.target.value,
            )
          }
          className="w-full rounded-lg border border-slate-300 p-3"
          required
        />

        {message && (
          <p className="text-sm text-blue-600">
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {loading
            ? "Updating..."
            : "Update Password"}
        </button>

      </form>

    </Card>
  );
}