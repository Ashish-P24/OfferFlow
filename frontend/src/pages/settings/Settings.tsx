import { useEffect, useState } from "react";

import Spinner from "@/components/ui/Spinner";
import ChangePasswordForm from "@/components/settings/ChangePasswordForm";
import { getProfile } from "@/services/profileService";
import ThemeSelector from "@/components/settings/ThemeSelector";
import type { Profile } from "@/types/profile";
import ProfileCard from "@/components/settings/ProfileCard";
export default function Settings() {
  const [profile, setProfile] =
    useState<Profile | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadProfile() {
      try {
        const data =
          await getProfile();

        setProfile(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  if (loading) {
    return (
      <Spinner text="Loading settings..." />
    );
  }

  return (
    <div>

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <p className="mt-2 text-[var(--muted)]">
          Manage your profile and account.
        </p>

      </div>

      {profile && (
        <ProfileCard profile={profile} />
    )}
    <div className="mt-6">
        <ChangePasswordForm />
    </div>
    <div className="mt-6">
        <ThemeSelector />
    </div>
    </div>
  );
}