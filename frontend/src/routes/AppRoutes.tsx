import { Navigate, Route, Routes } from "react-router-dom";

import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Dashboard from "@/pages/dashboard/Dashboard";
import Applications from "@/pages/applications/Applications";
import Interviews from "@/pages/interviews/Interviews";

import MainLayout from "@/layouts/MainLayout";
import ProtectedRoute from "@/routes/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/applications"
          element={<Applications />}
        />

        <Route
          path="/interviews"
          element={<Interviews />}
        />

      </Route>

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>
  );
}