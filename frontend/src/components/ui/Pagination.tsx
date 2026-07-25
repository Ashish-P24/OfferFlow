interface PaginationProps {
  page: number;
  totalPages: number;

  onPrevious: () => void;
  onNext: () => void;
}

export default function Pagination({
  page,
  totalPages,
  onPrevious,
  onNext,
}: PaginationProps) {
  return (
    <div className="mt-6 flex items-center justify-between">

      <button
        onClick={onPrevious}
        disabled={page === 0}
        className="rounded-lg border border-slate-300 px-4 py-2 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Previous
      </button>

      <span className="text-sm text-slate-600">
        Page {page + 1} of {Math.max(totalPages, 1)}
      </span>

      <button
        onClick={onNext}
        disabled={page + 1 >= totalPages}
        className="rounded-lg border border-slate-300 px-4 py-2 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </button>

    </div>
  );
}