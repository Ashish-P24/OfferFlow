import { CheckCircle2, Clock3, XCircle, Send } from "lucide-react";

interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  const config: Record<
    string,
    {
      className: string;
      icon: React.ReactNode;
      label: string;
    }
  > = {
    // Applications
    APPLIED: {
      className: "bg-blue-100 text-blue-700",
      icon: <Send size={14} />,
      label: "Applied",
    },

    INTERVIEW: {
      className: "bg-amber-100 text-amber-700",
      icon: <Clock3 size={14} />,
      label: "Interview",
    },

    OFFER: {
      className: "bg-green-100 text-green-700",
      icon: <CheckCircle2 size={14} />,
      label: "Offer",
    },

    REJECTED: {
      className: "bg-red-100 text-red-700",
      icon: <XCircle size={14} />,
      label: "Rejected",
    },

    // Interviews
    SCHEDULED: {
      className: "bg-blue-100 text-blue-700",
      icon: <Clock3 size={14} />,
      label: "Scheduled",
    },

    COMPLETED: {
      className: "bg-green-100 text-green-700",
      icon: <CheckCircle2 size={14} />,
      label: "Completed",
    },

    CANCELLED: {
      className: "bg-red-100 text-red-700",
      icon: <XCircle size={14} />,
      label: "Cancelled",
    },
  };
  const badge = config[status] ?? {
    className: "bg-slate-100 text-slate-700",
    icon: <Clock3 size={14} />,
    label: status,
  };

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${badge.className}`}
    >
      {badge.icon}
      {badge.label}
    </span>
  );
}