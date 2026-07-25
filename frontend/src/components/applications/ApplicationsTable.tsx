import { Pencil, Trash2 } from "lucide-react";

import StatusBadge from "@/components/ui/StatusBadge";

import type { JobApplication } from "@/types/application";

interface ApplicationsTableProps {
  applications: JobApplication[];
  loading: boolean;

  onEdit: (application: JobApplication) => void;
  onDelete: (application: JobApplication) => void;
}

export default function ApplicationsTable({
  applications,
  loading,
  onEdit,
  onDelete,
}: ApplicationsTableProps) {
  return (
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
              <td colSpan={7} className="py-12 text-center">
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
                  {new Date(job.applicationDate).toLocaleDateString()}
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">

                    <button
                      onClick={() => onEdit(job)}
                      className="rounded-md p-2 text-slate-500 transition hover:bg-slate-100 hover:text-blue-600"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => onDelete(job)}
                      className="rounded-md p-2 text-slate-500 transition hover:bg-slate-100 hover:text-red-600"
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
  );
}