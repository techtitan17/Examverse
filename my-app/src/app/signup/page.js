"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignupPage() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
console.log(data);

setLoading(false);

if (data.success) {
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 to-purple-300">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-96">
        <h1 className="text-3xl font-bold text-center mb-6">
          Create Account ✨
        </h1>

        <form onSubmit={handleSignup}>
          {/* First Name */}
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            className="w-full mb-3 px-3 py-2 border rounded-lg"
            onChange={handleChange}
            required
          />

          {/* Last Name */}
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            className="w-full mb-3 px-3 py-2 border rounded-lg"
            onChange={handleChange}
            required
          />

          {/* Email / Username */}
          <input
            type="email"
            name="username"
            placeholder="Email"
            className="w-full mb-3 px-3 py-2 border rounded-lg"
            onChange={handleChange}
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full mb-4 px-3 py-2 border rounded-lg"
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <div className="text-center text-gray-400 my-4">or</div>

        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full mb-2 bg-red-500 text-white py-2 rounded-lg"
        >
          Sign up with Google
        </button>

        <button
          onClick={() => signIn("github", { callbackUrl: "/" })}
          className="w-full bg-gray-800 text-white py-2 rounded-lg"
        >
          Sign up with GitHub
        </button>

        <p className="text-center mt-4 text-sm">
          Already have an account?
          <a href="/signin" className="text-indigo-600 ml-1">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}