interface DeleteDialogProps {
  open: boolean;

  company: string;

  jobTitle: string;

  onCancel: () => void;

  onDelete: () => void;
}

export default function DeleteDialog({
  open,
  company,
  jobTitle,
  onCancel,
  onDelete,
}: DeleteDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-md rounded-xl bg-white shadow-xl">

        <div className="border-b px-6 py-4">

          <h2 className="text-xl font-semibold">
            Delete Application
          </h2>

        </div>

        <div className="space-y-4 p-6">

          <p className="text-slate-600">
            Are you sure you want to delete
            this application?
          </p>

          <div className="rounded-lg bg-slate-100 p-4">

            <p className="font-semibold">
              {company}
            </p>

            <p className="text-slate-500">
              {jobTitle}
            </p>

          </div>

          <div className="flex justify-end gap-3">

            <button
              onClick={onCancel}
              className="rounded-lg border border-slate-300 px-5 py-2"
            >
              Cancel
            </button>

            <button
              onClick={onDelete}
              className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
            >
              Delete
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}