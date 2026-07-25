interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export default function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white px-8 py-16 text-center">

      <div className="mb-4 text-6xl">
        📂
      </div>

      <h2 className="text-2xl font-semibold">
        {title}
      </h2>

      <p className="mt-2 max-w-md text-slate-500">
        {description}
      </p>

      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="mt-8 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}