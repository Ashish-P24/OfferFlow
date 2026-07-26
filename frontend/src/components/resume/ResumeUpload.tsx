import { useRef, useState } from "react";
import { Upload } from "lucide-react";

interface ResumeUploadProps {
  onUpload: (
    file: File,
  ) => Promise<void>;
}

export default function ResumeUpload({
  onUpload,
}: ResumeUploadProps) {
  const inputRef =
    useRef<HTMLInputElement>(null);

  const [fileName, setFileName] =
    useState("No file selected");

  function handleChooseFile() {
    inputRef.current?.click();
  }

  async function handleFileChange(
    e: React.ChangeEvent<HTMLInputElement>,
  ) {
    const file =
      e.target.files?.[0];

    if (!file) return;

    setFileName(file.name);

    await onUpload(file);
  }

  return (
    <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10">

      <div className="flex flex-col items-center gap-4">

        <div className="rounded-full bg-blue-100 p-4">
          <Upload
            size={28}
            className="text-blue-600"
          />
        </div>

        <button
          type="button"
          onClick={handleChooseFile}
          className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Choose Resume
        </button>

        <p className="text-sm font-medium">
          {fileName}
        </p>

        <p className="text-sm text-slate-500">
          PDF only
        </p>

        <input
          ref={inputRef}
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="hidden"
        />

      </div>

    </div>
  );
}