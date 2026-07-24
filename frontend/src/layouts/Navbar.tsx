import { Bell, LogOut, UserCircle } from "lucide-react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();

    navigate("/login");
  }

  return (
    <header className="flex h-16 items-center justify-between border-b border-[var(--border)] bg-white px-8">

      <h1 className="text-xl font-semibold">
        OfferFlow
      </h1>

      <div className="flex items-center gap-4">

        <button className="rounded-lg p-2 hover:bg-slate-100">
          <Bell size={20} />
        </button>

        <UserCircle size={34} />

        <button
          onClick={handleLogout}
          className="rounded-lg p-2 hover:bg-slate-100"
        >
          <LogOut size={20} />
        </button>

      </div>

    </header>
  );
}