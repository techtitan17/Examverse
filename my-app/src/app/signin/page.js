"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔐 Login
  const handleLogin = async (e) => {
    e.preventDefault();

    await signIn("credentials", {
      redirect: true,
      username: form.username,
      password: form.password,
      callbackUrl: "/",
    });
  };

  // 🆕 Signup
  const handleSignup = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      // auto login after signup
      await signIn("credentials", {
        username: form.username,
        password: form.password,
        callbackUrl: "/",
      });
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 to-purple-200">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-96 transition-all">
        <h1 className="text-3xl font-bold text-center mb-6">
          {isSignup ? "Create Account ✨" : "Welcome Back 🚀"}
        </h1>

        {/* OAuth */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full mb-3 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          Continue with Google
        </button>

        <button
          onClick={() => signIn("github", { callbackUrl: "/" })}
          className="w-full mb-5 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900"
        >
          Continue with GitHub
        </button>

        <div className="text-center text-gray-400 mb-4">or</div>

        {/* FORM */}
        <form onSubmit={isSignup ? handleSignup : handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full mb-3 px-3 py-2 border rounded-lg"
            onChange={handleChange}
          />

          {isSignup && (
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full mb-3 px-3 py-2 border rounded-lg"
              onChange={handleChange}
            />
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full mb-4 px-3 py-2 border rounded-lg"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600"
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </form>

      </div>
    </div>
  );
}