import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DisplayHome from "./DisplayHome";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = form;

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");
    setShowModal(true); // Show success popup

    setTimeout(() => {
      setShowModal(false);
      navigate("/");
    }, 2000);
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e1e2f] to-[#121212] text-white px-4">
      <div className="bg-[#1e1e2f]/80 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="p-3 rounded bg-[#2a2a3f] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <input
              id="password"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="p-3 rounded bg-[#2a2a3f] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
              required
              minLength={6}
            />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition py-3 rounded font-semibold"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-4">
          Don’t have an account?{" "}
          <span
            className="text-purple-400 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
      </div>

      {/* ✅ Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#222] text-white p-6 rounded-xl shadow-xl border border-purple-500 w-[300px] text-center">
            <p className="text-lg font-semibold text-green-400 mb-2">
              ✅ Successfully Logged In!
            </p>
            <p className="text-sm text-gray-300">Redirecting to home...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
