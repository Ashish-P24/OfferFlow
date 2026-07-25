import { Search } from "lucide-react";

interface ApplicationToolbarProps {
  search: string;
  status: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

export default function ApplicationToolbar({
  search,
  status,
  onSearchChange,
  onStatusChange,
}: ApplicationToolbarProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="relative w-full md:max-w-sm">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search company..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 outline-none transition focus:border-blue-600"
        />
      </div>

      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className="rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-600"
      >
        <option value="">All Status</option>
        <option value="APPLIED">Applied</option>
        <option value="INTERVIEW">Interview</option>
        <option value="OFFER">Offer</option>
        <option value="REJECTED">Rejected</option>
      </select>
    </div>
  );
}