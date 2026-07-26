import {
  BriefcaseBusiness,
  CalendarDays,
  FileText,
  LayoutDashboard,
  Settings,
  SettingsIcon,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menu = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    to: "/dashboard",
  },
  {
    title: "Applications",
    icon: <BriefcaseBusiness size={20} />,
    to: "/applications",
  },
  {
    title: "Interviews",
    icon: <CalendarDays size={20} />,
    to: "/interviews",
  },
  {
    title: "Resume",
    icon: <FileText size={20} />,
    to: "/resume",
  },
  {
    title: "Settings",
    icon: <Settings size={20} />,
    to: "/settings",
  }
];

export default function Sidebar() {
  return (
    <aside className="flex w-64 flex-col border-r border-[var(--border)] bg-white">

      <div className="border-b border-[var(--border)] p-6">
        <h1 className="text-2xl font-bold text-blue-600">
          OfferFlow
        </h1>
      </div>

      <nav className="flex-1 space-y-2 p-4">

        {menu.map((item) => (
          <NavLink
            key={item.title}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-slate-100"
              }`
            }
          >
            {item.icon}
            {item.title}
          </NavLink>
        ))}
        

      </nav>

    </aside>
  );
}