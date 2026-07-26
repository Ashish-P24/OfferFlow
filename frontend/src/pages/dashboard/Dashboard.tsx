import { useEffect, useState } from "react";
import DashboardStatCard from "@/components/dashboard/DashboardStatCard";

import { getAnalytics } from "@/services/analyticsService";

import type { AnalyticsResponse } from "@/types/analytics";

import StatusChart from "@/components/dashboard/StatusChart";
import MonthlyChart from "@/components/dashboard/MonthlyChart";
import {
  BriefcaseBusiness,
  CalendarDays,
  CircleX,
  Send,
  Trophy,
} from "lucide-react";

import { getDashboard } from "@/services/dashboardService";
import { getInterviews } from "@/services/interviewService";
import { downloadResume, getResume } from "@/services/resumeService";

import Spinner from "@/components/ui/Spinner";

import type { DashboardResponse } from "@/types/dashboard";
import type { Interview } from "@/types/interview";
import type { Resume } from "@/types/resume";

export default function Dashboard() {
  const [stats, setStats] =
      useState<DashboardResponse | null>(null);
  
  const [analytics, setAnalytics] =
    useState<AnalyticsResponse | null>(null);

  const [interviews, setInterviews] =
      useState<Interview[]>([]);

  const [resume, setResume] =
      useState<Resume | null>(null);

  const [loading, setLoading] =
      useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        setLoading(true);

      const [
        dashboard,
        analytics,
        interviews,
      ] = await Promise.all([
        getDashboard(),
        getAnalytics(),
        getInterviews(),
      ]);

        setStats(dashboard);
        setAnalytics(analytics);
        setInterviews(interviews);

        try {
          const resume =
            await getResume();

          setResume(resume);
        } catch {
          setResume(null);
        }

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  if (loading || !stats) {
  return (
      <Spinner
        text="Loading dashboard..."
      />
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

      <h1 className="text-4xl font-bold">
        Welcome back!
      </h1>

      <p className="mt-3 text-lg text-[var(--muted)]">
        Here's an overview of your job search progress.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5">

      <DashboardStatCard
        title="Applications"
        value={stats.totalApplications}
        icon={<BriefcaseBusiness size={22} />}
      />

      <DashboardStatCard
        title="Applied"
        value={stats.applied}
        icon={<Send size={22} />}
      />

      <DashboardStatCard
        title="Interview"
        value={stats.interview}
        icon={<CalendarDays size={22} />}
      />

      <DashboardStatCard
        title="Offers"
        value={stats.offer}
        icon={<Trophy size={22} />}
      />

      <DashboardStatCard
        title="Rejected"
        value={stats.rejected}
        icon={<CircleX size={22} />}
      />

      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">

        {/* Upcoming Interviews */}

        <div>

          <h2 className="mb-4 text-2xl font-semibold">
            Upcoming Interviews
          </h2>

          {interviews.length === 0 ? (

            <div className="rounded-xl border border-[var(--border)] bg-white p-6 text-[var(--muted)]">
              No interviews scheduled.
            </div>

          ) : (

            <div className="space-y-4">

              {interviews.slice(0, 3).map((interview) => (

                <div
                  key={interview.id}
                  className="rounded-xl border border-[var(--border)] bg-white p-5 shadow-sm"
                >

                  <h3 className="text-xl font-semibold">
                    {interview.company}
                  </h3>

                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {interview.round}
                  </p>

                  <p className="mt-2">
                    {new Date(
                      interview.interviewDate,
                    ).toLocaleDateString()}

                    {interview.interviewTime
                      ? ` • ${interview.interviewTime}`
                      : " • Time TBD"}
                  </p>

                </div>

              ))}

            </div>

          )}

        </div>

        {/* Resume */}

        <div>

          <h2 className="mb-4 text-2xl font-semibold">
            Resume
          </h2>

          {resume ? (

            <div className="rounded-xl border border-[var(--border)] bg-white p-5 shadow-sm">

            <div className="flex items-center gap-3">

              <div className="rounded-lg bg-red-100 p-3">
                PDF
              </div>

              <div>

                <h3 className="font-semibold">
                  {resume.fileName}
                </h3>

                <p className="text-sm text-[var(--muted)]">
                  Resume
                </p>

              </div>

            </div>

              <p className="mt-2 text-sm text-[var(--muted)]">
                Uploaded{" "}
                {new Date(
                  resume.uploadedAt,
                ).toLocaleDateString()}
              </p>

              <button
                onClick={downloadResume}
                className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Download Resume
              </button>

            </div>

          ) : (

            <div className="rounded-xl border border-[var(--border)] bg-white p-5 text-[var(--muted)]">
              No resume uploaded.
            </div>

          )}

        </div>

      </div>
      {analytics && (

      <div className="mt-10 grid grid-cols-1 gap-8 xl:grid-cols-2">

        <StatusChart
          applied={analytics.applied}
          interview={analytics.interview}
          offer={analytics.offer}
          rejected={analytics.rejected}
        />

        <MonthlyChart
          data={analytics.monthlyApplications}
        />

      </div>

    )}
    </div>
  );
}