import type { Profile } from "@/types/profile";
import Card from "@/components/ui/Card";
interface ProfileCardProps {
  profile: Profile;
}

export default function ProfileCard({
  profile,
}: ProfileCardProps) {
  return (
    <Card>

      <h2 className="mb-4 text-xl font-semibold">
        Profile
      </h2>

      <div className="space-y-3">

        <div>

          <p className="text-sm text-[var(--muted)]">
            First Name
          </p>

          <p className="font-medium">
            {profile.firstName}
          </p>

        </div>

        <div>

          <p className="text-sm text-[var(--muted)]">
            Last Name
          </p>

          <p className="font-medium">
            {profile.lastName}
          </p>

        </div>

        <div>

          <p className="text-sm text-[var(--muted)]">
            Email
          </p>

          <p className="font-medium">
            {profile.email}
          </p>

        </div>

      </div>

    </Card>
  );
}