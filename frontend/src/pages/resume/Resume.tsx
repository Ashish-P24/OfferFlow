import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import Spinner from "@/components/ui/Spinner";
import EmptyState from "@/components/ui/EmptyState";

import ResumeCard from "@/components/resume/ResumeCard";
import ResumeUpload from "@/components/resume/ResumeUpload";

import {
  getResume,
  uploadResume,
  downloadResume,
  deleteResume,
} from "@/services/resumeService";

import type { Resume as ResumeType } from "@/types/resume";

export default function Resume() {
  const [resume, setResume] =
    useState<ResumeType | null>(null);

  const [loading, setLoading] =
    useState(true);

  async function loadResume() {
    try {
      setLoading(true);

      const data =
        await getResume();

      setResume(data);
    } catch {
      setResume(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadResume();
  }, []);

  async function handleUpload(
    file: File,
  ) {
    try {
      const data =
        await uploadResume(file);

      setResume(data);

      toast.success(
        "Resume uploaded successfully.",
      );
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to upload resume.",
      );
    }
  }

  async function handleDownload() {
    try {
      await downloadResume();
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to download resume.",
      );
    }
  }

  async function handleDelete() {
    try {
      await deleteResume();

      setResume(null);

      toast.success(
        "Resume deleted successfully.",
      );
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to delete resume.",
      );
    }
  }

  if (loading) {
    return (
      <Spinner text="Loading resume..." />
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Resume
        </h1>

        <p className="mt-2 text-slate-500">
          Upload and manage your resume.
        </p>
      </div>

      {resume ? (
        <ResumeCard
          resume={resume}
          onDownload={handleDownload}
          onDelete={handleDelete}
        />
      ) : (
        <EmptyState
          title="No resume uploaded"
          description="Upload your resume to keep it ready for applications."
        />
      )}

      <div className="mt-8">
        <ResumeUpload
          onUpload={handleUpload}
        />
      </div>
    </div>
  );
}