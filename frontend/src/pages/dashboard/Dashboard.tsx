import { useEffect, useState } from "react";

import { getDashboard } from "@/services/dashboardService";
import type { DashboardResponse } from "@/types/dashboard";

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardResponse | null>(null);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data = await getDashboard();
        setStats(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadDashboard();
  }, []);

  if (!stats) {
    return (
      <div className="text-lg">
        Loading...
      </div>
    );
  }

  const cards = [
    {
      title: "Applications",
      value: stats.totalApplications,
    },
    {
      title: "Applied",
      value: stats.applied,
    },
    {
      title: "Interview",
      value: stats.interview,
    },
    {
      title: "Offers",
      value: stats.offer,
    },
    {
      title: "Rejected",
      value: stats.rejected,
    },
  ];

  return (
    <div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-[var(--muted)]">
          Overview of your applications.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5">

        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-xl border border-[var(--border)] bg-white p-6 shadow-sm"
          >
            <p className="text-sm text-[var(--muted)]">
              {card.title}
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              {card.value}
            </h2>
          </div>
        ))}

      </div>

    </div>
  );
}