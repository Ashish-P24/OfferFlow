import { Outlet } from "react-router-dom";

import Sidebar from "@/layouts/Sidebar";
import Navbar from "@/layouts/Navbar";

export default function MainLayout() {
  return (
    <div className="flex h-screen bg-[var(--background)]">

      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">

        <Navbar />

        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>

      </div>

    </div>
  );
}