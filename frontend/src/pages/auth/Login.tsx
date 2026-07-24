import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "@/context/AuthContext";
import { login as loginUser } from "@/services/authService";

export default function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      const response = await loginUser({
        email,
        password,
      });

      login(response.token);

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      alert("Invalid email or password.");
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-[var(--background)]">
      <div className="w-full max-w-md rounded-xl border border-[var(--border)] bg-white p-10 shadow-sm">

        <h1 className="text-3xl font-bold">
          OfferFlow
        </h1>

        <p className="mt-2 text-sm text-[var(--muted)]">
          Sign in to continue.
        </p>

        <div className="mt-8 space-y-5">

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

          <button
            onClick={handleLogin}
            className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Login
          </button>

        </div>

      </div>
    </div>
  );
}