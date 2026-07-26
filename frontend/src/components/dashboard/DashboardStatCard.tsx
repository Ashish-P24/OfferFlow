interface DashboardStatCardProps {
  title: string;

  value: number;

  icon: React.ReactNode;
}

export default function DashboardStatCard({
  title,
  value,
  icon,
}: DashboardStatCardProps) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-white p-6 shadow-sm transition hover:shadow-md">

      <div className="flex items-center justify-between">

        <p className="text-sm font-medium text-[var(--muted)]">
          {title}
        </p>

        <div className="text-blue-600">
          {icon}
        </div>

      </div>

      <h2 className="mt-6 text-4xl font-bold">
        {value}
      </h2>

    </div>
  );
}