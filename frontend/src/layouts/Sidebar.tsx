import {
  BriefcaseBusiness,
  CalendarDays,
  FileText,
  LayoutDashboard,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="flex w-64 flex-col border-r border-[var(--border)] bg-white">

      <div className="border-b border-[var(--border)] p-6">
        <h1 className="text-2xl font-bold text-blue-600">
          OfferFlow
        </h1>
      </div>

      <nav className="flex-1 space-y-2 p-4">

        <SidebarItem
          to="/dashboard"
          icon={<LayoutDashboard size={20} />}
          title="Dashboard"
        />

        <SidebarItem
          to="#"
          icon={<BriefcaseBusiness size={20} />}
          title="Applications"
        />

        <SidebarItem
          to="#"
          icon={<CalendarDays size={20} />}
          title="Interviews"
        />

        <SidebarItem
          to="#"
          icon={<FileText size={20} />}
          title="Resume"
        />

        <SidebarItem
          to="#"
          icon={<Settings size={20} />}
          title="Settings"
        />

      </nav>

    </aside>
  );
}

type Props = {
  to: string;
  icon: React.ReactNode;
  title: string;
};

function SidebarItem({
  to,
  icon,
  title,
}: Props) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-lg px-4 py-3 transition ${
          isActive
            ? "bg-blue-600 text-white"
            : "hover:bg-slate-100"
        }`
      }
    >
      {icon}
      <span>{title}</span>
    </NavLink>
  );
}