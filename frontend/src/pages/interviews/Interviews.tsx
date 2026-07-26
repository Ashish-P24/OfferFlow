import { useEffect, useState } from "react";

import ApplicationModal from "@/components/applications/Modal";
import DeleteDialog from "@/components/applications/DeleteDialog";

import InterviewForm from "@/components/interviews/InterviewForm";
import InterviewsTable from "@/components/interviews/InterviewsTable";

import Spinner from "@/components/ui/Spinner";
import EmptyState from "@/components/ui/EmptyState";

import toast from "react-hot-toast";

import {
  createInterview,
  updateInterview,
  deleteInterview,
  getInterviews,
} from "@/services/interviewService";

import type { Interview } from "@/types/interview";
import type { InterviewRequest } from "@/types/interviewRequest";

export default function Interviews() {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [loading, setLoading] = useState(true);

  const [openModal, setOpenModal] = useState(false);

  const [editingInterview, setEditingInterview] =
    useState<Interview | null>(null);

  const [deleteDialogOpen, setDeleteDialogOpen] =
    useState(false);

  const [selectedInterview, setSelectedInterview] =
    useState<Interview | null>(null);

  async function loadInterviews() {
    try {
      setLoading(true);

      const data = await getInterviews();

      setInterviews(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load interviews.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadInterviews();
  }, []);

  async function handleCreateInterview(
    request: InterviewRequest,
  ) {
    try {
      await createInterview(request);

      toast.success("Interview created successfully.");

      setEditingInterview(null);
      setOpenModal(false);

      await loadInterviews();
    } catch (error: any) {
  console.error("Status:", error.response?.status);
  console.error("Response:", error.response?.data);
  console.error("Request:", request);

  toast.error("Failed to create interview.");
}
  }

  async function handleUpdateInterview(
    request: InterviewRequest,
  ) {
    if (!editingInterview) return;

    try {
      await updateInterview(
        editingInterview.id,
        request,
      );

      toast.success("Interview updated successfully.");

      setEditingInterview(null);
      setOpenModal(false);

      await loadInterviews();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update interview.");
    }
  }

  async function handleDeleteInterview() {
    if (!selectedInterview) return;

    try {
      await deleteInterview(selectedInterview.id);

      toast.success("Interview deleted successfully.");

      setDeleteDialogOpen(false);
      setSelectedInterview(null);
      setEditingInterview(null);

      await loadInterviews();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete interview.");
    }
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Interviews
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your scheduled interviews.
          </p>
        </div>

        <button
          onClick={() => {
            setEditingInterview(null);
            setSelectedInterview(null);
            setOpenModal(true);
          }}
          className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          + Add Interview
        </button>
      </div>

      {loading ? (
        <Spinner text="Loading interviews..." />
      ) : interviews.length === 0 ? (
        <EmptyState
          title="No interviews scheduled"
          description="Create your first interview."
          actionLabel="Add Interview"
          onAction={() => {
            setEditingInterview(null);
            setSelectedInterview(null);
            setOpenModal(true);
          }}
        />
      ) : (
        <InterviewsTable
          interviews={interviews}
          onEdit={(interview) => {
            setEditingInterview(interview);
            setOpenModal(true);
          }}
          onDelete={(interview) => {
            setEditingInterview(null);
            setSelectedInterview(interview);
            setDeleteDialogOpen(true);
          }}
        />
      )}

      <ApplicationModal
        open={openModal}
        title={
          editingInterview
            ? "Edit Interview"
            : "Add Interview"
        }
        onClose={() => {
          setEditingInterview(null);
          setSelectedInterview(null);
          setOpenModal(false);
        }}
      >
        <InterviewForm
          initialValues={
            editingInterview
              ? {
                  jobApplicationId:
                    editingInterview.jobApplicationId,
                  round: editingInterview.round,
                  interviewDate:
                    editingInterview.interviewDate,
                  interviewTime:
                    editingInterview.interviewTime,
                  mode: editingInterview.mode,
                  status: editingInterview.status,
                  interviewer:
                    editingInterview.interviewer,
                  location:
                    editingInterview.location,
                  notes: editingInterview.notes,
                  feedback:
                    editingInterview.feedback,
                }
              : undefined
          }
          submitLabel={
            editingInterview
              ? "Update Interview"
              : "Save Interview"
          }
          onSubmit={
            editingInterview
              ? handleUpdateInterview
              : handleCreateInterview
          }
          onCancel={() => {
            setEditingInterview(null);
            setOpenModal(false);
          }}
        />
      </ApplicationModal>

      <DeleteDialog
        open={deleteDialogOpen}
        company={selectedInterview?.company ?? ""}
        jobTitle={selectedInterview?.jobTitle ?? ""}
        onCancel={() => {
          setDeleteDialogOpen(false);
          setSelectedInterview(null);
          setEditingInterview(null);
        }}
        onDelete={handleDeleteInterview}
      />
    </div>
  );
}