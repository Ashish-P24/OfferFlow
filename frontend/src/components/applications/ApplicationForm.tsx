import { useEffect, useState } from "react";

import type { ApplicationRequest } from "@/types/applicationRequest";

interface ApplicationFormProps {
  initialValues?: ApplicationRequest;

  submitLabel?: string;

  onSubmit: (
    data: ApplicationRequest,
  ) => Promise<void>;

  onCancel: () => void;
}

const defaultForm: ApplicationRequest = {
  company: "",
  jobTitle: "",
  location: "",
  jobUrl: "",
  salary: "",
  status: "APPLIED",
  applicationDate: new Date()
    .toISOString()
    .split("T")[0],
  notes: "",
};

export default function ApplicationForm({
  initialValues,
  submitLabel = "Save Application",
  onSubmit,
  onCancel,
}: ApplicationFormProps) {
  const [form, setForm] =
    useState<ApplicationRequest>(
      initialValues ?? defaultForm,
    );

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  useEffect(() => {
    setForm(initialValues ?? defaultForm);
  }, [initialValues]);

  async function handleSubmit(
    e: React.FormEvent,
  ) {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      await onSubmit(form);
    } finally {
      setIsSubmitting(false);
    }
  }

  function update<K extends keyof ApplicationRequest>(
    key: K,
    value: ApplicationRequest[K],
  ) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input
        placeholder="Company"
        value={form.company}
        onChange={(e) =>
          update("company", e.target.value)
        }
        className="w-full rounded-lg border border-slate-300 p-3"
        required
      />

      <input
        placeholder="Job Title"
        value={form.jobTitle}
        onChange={(e) =>
          update("jobTitle", e.target.value)
        }
        className="w-full rounded-lg border border-slate-300 p-3"
        required
      />

      <input
        placeholder="Location"
        value={form.location}
        onChange={(e) =>
          update("location", e.target.value)
        }
        className="w-full rounded-lg border border-slate-300 p-3"
      />

      <input
        placeholder="Salary"
        value={form.salary}
        onChange={(e) =>
          update("salary", e.target.value)
        }
        className="w-full rounded-lg border border-slate-300 p-3"
      />

      <input
        placeholder="Job URL"
        value={form.jobUrl}
        onChange={(e) =>
          update("jobUrl", e.target.value)
        }
        className="w-full rounded-lg border border-slate-300 p-3"
      />

      <select
        value={form.status}
        onChange={(e) =>
          update(
            "status",
            e.target.value as ApplicationRequest["status"],
          )
        }
        className="w-full rounded-lg border border-slate-300 p-3"
      >
        <option value="APPLIED">
          Applied
        </option>

        <option value="INTERVIEW">
          Interview
        </option>

        <option value="OFFER">
          Offer
        </option>

        <option value="REJECTED">
          Rejected
        </option>
      </select>

      <input
        type="date"
        value={form.applicationDate}
        onChange={(e) =>
          update(
            "applicationDate",
            e.target.value,
          )
        }
        className="w-full rounded-lg border border-slate-300 p-3"
      />

      <textarea
        rows={4}
        placeholder="Notes"
        value={form.notes}
        onChange={(e) =>
          update("notes", e.target.value)
        }
        className="w-full rounded-lg border border-slate-300 p-3"
      />

      <div className="flex justify-end gap-3">

        <button
          type="button"
          disabled={isSubmitting}
          onClick={onCancel}
          className="rounded-lg border border-slate-300 px-5 py-2 disabled:opacity-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting
            ? submitLabel === "Update Application"
              ? "Updating..."
              : "Saving..."
            : submitLabel}
        </button>

      </div>
    </form>
  );
}