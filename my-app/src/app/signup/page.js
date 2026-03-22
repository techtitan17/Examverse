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
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden px-4">

      {/* 🌫️ Purple / Pink Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 
      w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 
      w-[400px] h-[400px] bg-pink-500/20 blur-[120px] rounded-full"></div>

      {/* 🔲 Subtle Grid */}
      <div className="absolute inset-0 
      bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),
           linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
      bg-[size:70px_70px]"></div>

      {/* 💎 Card */}
      <div className="relative z-10 bg-black/80 backdrop-blur-md 
      shadow-[0_0_25px_rgba(168,85,247,0.4)] 
      border border-purple-500/30 
      rounded-2xl p-8 w-96">

        <h1 className="text-3xl font-bold text-center mb-6 text-white font-serif">
          Create Account ✨
        </h1>

        <form onSubmit={handleSignup}>
          {/* First Name */}
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            className="w-full mb-3 px-3 py-2 rounded-lg bg-black border border-gray-700 
            text-white placeholder-gray-500 focus:outline-none focus:border-purple-400"
            onChange={handleChange}
            required
          />

          {/* Last Name */}
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            className="w-full mb-3 px-3 py-2 rounded-lg bg-black border border-gray-700 
            text-white placeholder-gray-500 focus:outline-none focus:border-purple-400"
            onChange={handleChange}
            required
          />

          {/* Email */}
          <input
            type="email"
            name="username"
            placeholder="Email"
            className="w-full mb-3 px-3 py-2 rounded-lg bg-black border border-gray-700 
            text-white placeholder-gray-500 focus:outline-none focus:border-purple-400"
            onChange={handleChange}
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full mb-4 px-3 py-2 rounded-lg bg-black border border-gray-700 
            text-white placeholder-gray-500 focus:outline-none focus:border-purple-400"
            onChange={handleChange}
            required
          />

          {/* Button */}
          <div className="relative group">
            <div className="absolute -inset-[2px] rounded-lg 
            bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 
            opacity-70 animate-border"></div>

            <button
              type="submit"
              disabled={loading}
              className="relative w-full bg-black text-white py-2 rounded-lg 
              font-semibold tracking-wide 
              hover:scale-[1.02] transition disabled:opacity-50"
            >
              {loading ? "Creating account..." : "Sign Up"}
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="text-center text-gray-500 my-4">or</div>

        {/* Google */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full mb-2 bg-red-500/80 hover:bg-red-500 text-white py-2 rounded-lg transition"
        >
          Sign up with Google
        </button>

        {/* GitHub */}
        <button
          onClick={() => signIn("github", { callbackUrl: "/" })}
          className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg transition"
        >
          Sign up with GitHub
        </button>

        {/* Footer */}
        <p className="text-center mt-4 text-sm text-gray-400">
          Already have an account?
          <a href="/signin" className="text-purple-400 ml-1 hover:underline">
            Sign in
          </a>
        </p>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes borderMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-border {
          background-size: 200% 200%;
          animation: borderMove 3s linear infinite;
        }
      `}</style>
    </div>
  );
}