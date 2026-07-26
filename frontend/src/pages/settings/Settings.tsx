import { useEffect, useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
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

    <PageHeader
    title="Settings"
    description="Manage your profile and account."
    />

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