import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "@/context/AuthContext";
import { register as registerUser } from "@/services/authService";

export default function Register() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [firstName, setFirstName] =
    useState("");

  const [lastName, setLastName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  async function handleRegister() {

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {

      const response =
        await registerUser({
          firstName,
          lastName,
          email,
          password,
        });

      login(response.token);

      navigate("/dashboard");

    } catch (error) {
      console.error(error);

      alert("Registration failed.");
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-[var(--background)]">

      <div className="w-full max-w-md rounded-xl border border-[var(--border)] bg-white p-10 shadow-sm">

        <h1 className="text-3xl font-bold">
          OfferFlow
        </h1>

        <p className="mt-2 text-sm text-[var(--muted)]">
          Create your account.
        </p>

        <div className="mt-8 space-y-5">

          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) =>
              setFirstName(e.target.value)
            }
            className="w-full rounded-lg border border-[var(--border)] px-4 py-3"
          />

          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) =>
              setLastName(e.target.value)
            }
            className="w-full rounded-lg border border-[var(--border)] px-4 py-3"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full rounded-lg border border-[var(--border)] px-4 py-3"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full rounded-lg border border-[var(--border)] px-4 py-3"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            className="w-full rounded-lg border border-[var(--border)] px-4 py-3"
          />

          <button
            onClick={handleRegister}
            className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Register
          </button>

          <p className="text-center text-sm text-[var(--muted)]">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:underline"
            >
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}