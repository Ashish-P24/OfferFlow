interface ResumeUploadProps {
  onUpload: (
    file: File,
  ) => Promise<void>;
}

export default function ResumeUpload({
  onUpload,
}: ResumeUploadProps) {
  return (
    <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center">

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => {
          const file =
            e.target.files?.[0];

          if (file) {
            onUpload(file);
          }
        }}
      />

      <p className="mt-4 text-sm text-slate-500">
        Upload your resume as a PDF.
      </p>

    </div>
  );
}