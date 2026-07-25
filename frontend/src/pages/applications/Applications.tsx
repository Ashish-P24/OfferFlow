import { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

import ApplicationToolbar from "./ApplicationToolbar";
import StatusBadge from "@/components/ui/StatusBadge";

import { getApplications } from "@/services/applicationService";

import type { JobApplication } from "@/types/application";

export default function Applications() {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const [page, setPage] = useState(0);

  const [totalPages, setTotalPages] = useState(0);

  async function loadApplications() {
    try {
      setLoading(true);

      const data = await getApplications({
        page,
        size: 10,
        keyword: search,
        status,
      });

      setApplications(data.content);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadApplications();
  }, [page, search, status]);

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Applications
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your job applications.
          </p>
        </div>

        <button className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700">
          + Add Application
        </button>
      </div>

      <ApplicationToolbar
        search={search}
        status={status}
        onSearchChange={(value) => {
          setPage(0);
          setSearch(value);
        }}
        onStatusChange={(value) => {
          setPage(0);
          setStatus(value);
        }}
      />

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr className="text-left text-sm text-slate-600">
              <th className="px-6 py-4">Company</th>
              <th className="px-6 py-4">Position</th>
              <th className="px-6 py-4">Location</th>
              <th className="px-6 py-4">Salary</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Applied</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={7}
                  className="py-12 text-center"
                >
                  Loading...
                </td>
              </tr>
            ) : applications.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="py-12 text-center text-slate-500"
                >
                  No applications found.
                </td>
              </tr>
            ) : (
              applications.map((job) => (
                <tr
                  key={job.id}
                  className="border-t transition hover:bg-slate-50"
                >
                  <td className="px-6 py-4 font-medium">
                    {job.company}
                  </td>

                  <td className="px-6 py-4">
                    {job.jobTitle}
                  </td>

                  <td className="px-6 py-4">
                    {job.location}
                  </td>

                  <td className="px-6 py-4">
                    {job.salary}
                  </td>

                  <td className="px-6 py-4">
                    <StatusBadge status={job.status} />
                  </td>

                  <td className="px-6 py-4">
                    {new Date(
                      job.applicationDate,
                    ).toLocaleDateString()}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <button
                        className="rounded-md p-2 text-slate-500 transition hover:bg-slate-100 hover:text-blue-600"
                        title="Edit"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        className="rounded-md p-2 text-slate-500 transition hover:bg-slate-100 hover:text-red-600"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button
          disabled={page === 0}
          onClick={() => setPage((p) => p - 1)}
          className="rounded-lg border border-slate-300 px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Previous
        </button>

        <span className="text-sm text-slate-600">
          Page {page + 1} of {Math.max(totalPages, 1)}
        </span>

        <button
          disabled={page + 1 >= totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="rounded-lg border border-slate-300 px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}