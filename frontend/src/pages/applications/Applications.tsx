import { useEffect, useState } from "react";

import ApplicationToolbar from "@/components/applications/ApplicationToolbar";
import ApplicationsTable from "@/components/applications/ApplicationsTable";
import ApplicationModal from "@/components/applications/ApplicationModal";
import ApplicationForm from "@/components/applications/ApplicationForm";

import DeleteDialog from "@/components/applications/DeleteDialog";

import {
  createApplication,
  updateApplication,
  deleteApplication,
  getApplications,
} from "@/services/applicationService";

import type { JobApplication } from "@/types/application";
import type { ApplicationRequest } from "@/types/applicationRequest";

export default function Applications() {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [openModal, setOpenModal] = useState(false);

  const [editingApplication, setEditingApplication] =
    useState<JobApplication | null>(null);

    const [deleteDialogOpen, setDeleteDialogOpen] =
    useState(false);

    const [selectedApplication, setSelectedApplication] =
    useState<JobApplication | null>(null);

    async function handleDeleteApplication() {
    if (!selectedApplication) return;

    try {
        await deleteApplication(selectedApplication.id);

        setDeleteDialogOpen(false);
        setSelectedApplication(null);

        await loadApplications();
    } catch (error) {
        console.error(error);
        alert("Failed to delete application.");
    }
    }

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

  async function handleCreateApplication(
    request: ApplicationRequest,
  ) {
    try {
      await createApplication(request);
      setEditingApplication(null);

      setOpenModal(false);

      await loadApplications();
    } catch (error) {
      console.error(error);
      alert("Failed to create application.");
    }
  }

  async function handleUpdateApplication(
    request: ApplicationRequest,
  ) {
    if (!editingApplication) return;

    try {
      await updateApplication(
        editingApplication.id,
        request,
      );

      setEditingApplication(null);
      setOpenModal(false);

      await loadApplications();
    } catch (error) {
      console.error(error);
      alert("Failed to update application.");
    }
  }

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

        <button
          onClick={() => {
            setEditingApplication(null);
            setSelectedApplication(null);
            setOpenModal(true);
            }}
          className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
        >
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

      <ApplicationsTable
        applications={applications}
        loading={loading}
        onEdit={(application) => {
            setEditingApplication(application);
            setOpenModal(true);
        }}
        onDelete={(application) => {
            setSelectedApplication(application);
            setDeleteDialogOpen(true);
        }}
        />

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

      <ApplicationModal
        open={openModal}
        title={
          editingApplication
            ? "Edit Application"
            : "Add New Application"
        }
        onClose={() => {
          setEditingApplication(null);
          setOpenModal(false);
        }}
      >
        <ApplicationForm
          initialValues={
            editingApplication
              ? {
                  company: editingApplication.company,
                  jobTitle: editingApplication.jobTitle,
                  location: editingApplication.location,
                  jobUrl: editingApplication.jobUrl,
                  salary: editingApplication.salary,
                  status: editingApplication.status,
                  applicationDate:
                    editingApplication.applicationDate,
                  notes: editingApplication.notes,
                }
              : undefined
          }
          submitLabel={
            editingApplication
              ? "Update Application"
              : "Save Application"
          }
          onSubmit={
            editingApplication
              ? handleUpdateApplication
              : handleCreateApplication
          }
          onCancel={() => {
            setEditingApplication(null);
            setOpenModal(false);
          }}
        />
      </ApplicationModal>
      <DeleteDialog
        open={deleteDialogOpen}
        company={selectedApplication?.company ?? ""}
        jobTitle={selectedApplication?.jobTitle ?? ""}
        onCancel={() => {
            setDeleteDialogOpen(false);
            setSelectedApplication(null);
            setEditingApplication(null);
        }}
        onDelete={handleDeleteApplication}
        />
    </div>
  );
}