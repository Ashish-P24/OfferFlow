import { Pencil, Trash2 } from "lucide-react";
import ApplicationModal from "@/components/applications/ApplicationModal";
import type { Interview } from "@/types/interview";
import StatusBadge from "@/components/ui/StatusBadge";

interface InterviewsTableProps {
  interviews: Interview[];

  onEdit: (interview: Interview) => void;

  onDelete: (interview: Interview) => void;
}

export default function InterviewsTable({
  interviews,
  onEdit,
  onDelete,
}: InterviewsTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-slate-50">
          <tr className="text-left text-sm text-slate-600">
            <th className="px-6 py-4">Company</th>
            <th className="px-6 py-4">Position</th>
            <th className="px-6 py-4">Round</th>
            <th className="px-6 py-4">Date</th>
            <th className="px-6 py-4">Time</th>
            <th className="px-6 py-4">Mode</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4 text-center">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {interviews.map((interview) => (
            <tr
              key={interview.id}
              className="border-t transition hover:bg-slate-50"
            >
              <td className="px-6 py-4 font-medium">
                {interview.company}
              </td>

              <td className="px-6 py-4">
                {interview.jobTitle}
              </td>

              <td className="px-6 py-4">
                {interview.round}
              </td>

              <td className="px-6 py-4">
                {new Date(
                  interview.interviewDate,
                ).toLocaleDateString()}
              </td>

              <td className="px-6 py-4">
                {interview.interviewTime || "TBD"}
              </td>

              <td className="px-6 py-4">
                {interview.mode}
              </td>

                <td className="px-6 py-4">
                <StatusBadge status={interview.status} />
                </td>

              <td className="px-6 py-4">
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => onEdit(interview)}
                    className="rounded-md p-2 text-slate-500 transition hover:bg-slate-100 hover:text-blue-600"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => onDelete(interview)}
                    className="rounded-md p-2 text-slate-500 transition hover:bg-slate-100 hover:text-red-600"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}