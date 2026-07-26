import { useEffect, useState } from "react";

import { getApplicationOptions } from "@/services/applicationService";

import type { JobApplication } from "@/types/application";
import type { InterviewRequest } from "@/types/interviewRequest";

interface InterviewFormProps {
  initialValues?: InterviewRequest;

  submitLabel?: string;

  onSubmit: (
    data: InterviewRequest,
  ) => Promise<void>;

  onCancel: () => void;
}

const defaultForm: InterviewRequest = {
  jobApplicationId: 0,
  round: "",
  interviewDate: new Date()
    .toISOString()
    .split("T")[0],
  interviewTime: "",
  mode: "ONLINE",
  status: "SCHEDULED",
  interviewer: "",
  location: "",
  notes: "",
  feedback: "",
};

export default function InterviewForm({
  initialValues,
  submitLabel = "Save Interview",
  onSubmit,
  onCancel,
}: InterviewFormProps) {
  const [form, setForm] =
    useState<InterviewRequest>(
      initialValues ?? defaultForm,
    );

  const [applications, setApplications] =
    useState<JobApplication[]>([]);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  useEffect(() => {
    setForm(initialValues ?? defaultForm);
  }, [initialValues]);

  useEffect(() => {
    async function loadApplications() {
      const data = await getApplicationOptions();
      setApplications(data);
    }

    loadApplications();
  }, []);

  function update<K extends keyof InterviewRequest>(
    key: K,
    value: InterviewRequest[K],
  ) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

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

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <select
        value={form.jobApplicationId}
        onChange={(e) =>
          update(
            "jobApplicationId",
            Number(e.target.value),
          )
        }
        className="w-full rounded-lg border border-slate-300 p-3"
        required
      >
        <option value={0}>
          Select Job Application
        </option>

        {applications.map((application) => (
          <option
            key={application.id}
            value={application.id}
          >
            {application.company} —{" "}
            {application.jobTitle}
          </option>
        ))}
      </select>

      <input
        placeholder="Interview Round"
        value={form.round}
        onChange={(e) =>
          update("round", e.target.value)
        }
        className="w-full rounded-lg border border-slate-300 p-3"
        required
      />

      <input
        type="date"
        value={form.interviewDate}
        onChange={(e) =>
          update(
            "interviewDate",
            e.target.value,
          )
        }
        className="w-full rounded-lg border border-slate-300 p-3"
      />

        <input
        type="time"
        value={form.interviewTime}
        onChange={(e) =>
            update(
            "interviewTime",
            e.target.value,
            )
        }
        className="w-full rounded-lg border border-slate-300 p-3"
        />

        <p className="text-xs text-slate-500">
        Leave blank if the time hasn't been announced yet.
        </p>

      <select
        value={form.mode}
        onChange={(e) =>
          update(
            "mode",
            e.target.value as InterviewRequest["mode"],
          )
        }
        className="w-full rounded-lg border border-slate-300 p-3"
      >
        <option value="ONLINE">
          Online
        </option>

        <option value="OFFLINE">
          Offline
        </option>

        <option value="PHONE">
          Phone
        </option>
      </select>

      <select
        value={form.status}
        onChange={(e) =>
          update(
            "status",
            e.target.value as InterviewRequest["status"],
          )
        }
        className="w-full rounded-lg border border-slate-300 p-3"
      >
        <option value="SCHEDULED">
          Scheduled
        </option>

        <option value="COMPLETED">
          Completed
        </option>

        <option value="CANCELLED">
          Cancelled
        </option>
      </select>

      <input
        placeholder="Interviewer"
        value={form.interviewer}
        onChange={(e) =>
          update(
            "interviewer",
            e.target.value,
          )
        }
        className="w-full rounded-lg border border-slate-300 p-3"
      />

      <input
        placeholder="Location / Meeting Link"
        value={form.location}
        onChange={(e) =>
          update(
            "location",
            e.target.value,
          )
        }
        className="w-full rounded-lg border border-slate-300 p-3"
      />

      <textarea
        rows={3}
        placeholder="Notes"
        value={form.notes}
        onChange={(e) =>
          update("notes", e.target.value)
        }
        className="w-full rounded-lg border border-slate-300 p-3"
      />

      <textarea
        rows={3}
        placeholder="Feedback"
        value={form.feedback}
        onChange={(e) =>
          update(
            "feedback",
            e.target.value,
          )
        }
        className="w-full rounded-lg border border-slate-300 p-3"
      />

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          disabled={isSubmitting}
          className="rounded-lg border border-slate-300 px-5 py-2"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {isSubmitting
            ? submitLabel === "Update Interview"
              ? "Updating..."
              : "Saving..."
            : submitLabel}
        </button>
      </div>
    </form>
  );
}