import type { Resume } from "@/types/resume";

interface ResumeCardProps {
  resume: Resume;

  onDownload: () => void;

  onDelete: () => void;
}

export default function ResumeCard({
  resume,
  onDownload,
  onDelete,
}: ResumeCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <h2 className="text-xl font-semibold">
        {resume.fileName}
      </h2>

      <p className="mt-2 text-slate-500">
        {(resume.fileSize / 1024).toFixed(1)} KB
      </p>

      <p className="mt-1 text-slate-500">
        Uploaded: {resume.uploadedAt}
      </p>

      <div className="mt-6 flex gap-3">

        <button
          onClick={onDownload}
          className="rounded-lg bg-blue-600 px-5 py-2 text-white"
        >
          Download
        </button>

        <button
          onClick={onDelete}
          className="rounded-lg bg-red-600 px-5 py-2 text-white"
        >
          Delete
        </button>

      </div>

    </div>
  );
}