import { useEffect, useState } from "react";

import ApplicationToolbar from "@/components/applications/ApplicationToolbar";
import ApplicationsTable from "@/components/applications/ApplicationsTable";
import ApplicationModal from "@/components/applications/ApplicationModal";
import ApplicationForm from "@/components/applications/ApplicationForm";
import toast from "react-hot-toast";
import DeleteDialog from "@/components/applications/DeleteDialog";
import Spinner from "@/components/ui/Spinner";
import EmptyState from "@/components/ui/EmptyState";
import Pagination from "@/components/ui/Pagination";
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

        toast.success("Application deleted successfully.");

        setDeleteDialogOpen(false);
        setSelectedApplication(null);
        setEditingApplication(null);

        await loadApplications();
      } catch (error) {
        console.error(error);
        toast.error("Failed to delete application.");
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
      toast.success("Application created successfully.");
      setEditingApplication(null);

      setOpenModal(false);

      await loadApplications();
    } catch (error) {
      console.error(error);
      toast.error("Failed to create application.");
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
      toast.success("Application updated successfully.");

      setEditingApplication(null);
      setOpenModal(false);

      await loadApplications();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update application.");
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

      {loading ? (
        <Spinner text="Loading applications..." />
      ) : applications.length === 0 ? (
        <EmptyState
          title="No applications yet"
          description="Start tracking your job applications."
          actionLabel="Add Application"
          onAction={() => {
            setEditingApplication(null);
            setSelectedApplication(null);
            setOpenModal(true);
          }}
        />
      ) : (
        <>
          <ApplicationsTable
            applications={applications}
            onEdit={(application) => {
              setEditingApplication(application);
              setOpenModal(true);
            }}
            onDelete={(application) => {
              setEditingApplication(null);
              setSelectedApplication(application);
              setDeleteDialogOpen(true);
            }}
          />

          <Pagination
            page={page}
            totalPages={totalPages}
            onPrevious={() => setPage((p) => p - 1)}
            onNext={() => setPage((p) => p + 1)}
          />
        </>
      )}

      <ApplicationModal
        open={openModal}
        title={
          editingApplication
            ? "Edit Application"
            : "Add New Application"
        }
        onClose={() => {
          setEditingApplication(null);
          setSelectedApplication(null);
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