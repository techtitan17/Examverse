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

  const handleLogin = async (e) => {
    e.preventDefault();

    await signIn("credentials", {
      redirect: true,
      username: form.username,
      password: form.password,
      callbackUrl: "/",
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.json();

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

      {/* 🌫️ Background Glow */}
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
      border border-purple-500/30 
      shadow-[0_0_25px_rgba(168,85,247,0.4)] 
      rounded-2xl p-8 w-96 transition-all">

        <h1 className="text-3xl font-bold text-center mb-6 text-white font-serif">
          {isSignup ? "Create Account ✨" : "Welcome Back 🚀"}
        </h1>

        {/* OAuth */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full mb-3 bg-red-500/80 hover:bg-red-500 text-white py-2 rounded-lg transition"
        >
          Continue with Google
        </button>

        <button
          onClick={() => signIn("github", { callbackUrl: "/" })}
          className="w-full mb-5 bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg transition"
        >
          Continue with GitHub
        </button>

        <div className="text-center text-gray-500 mb-4">or</div>

        {/* FORM */}
        <form onSubmit={isSignup ? handleSignup : handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full mb-3 px-3 py-2 rounded-lg bg-black border border-gray-700 
            text-white placeholder-gray-500 focus:outline-none focus:border-purple-400"
            onChange={handleChange}
          />

          {isSignup && (
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full mb-3 px-3 py-2 rounded-lg bg-black border border-gray-700 
              text-white placeholder-gray-500 focus:outline-none focus:border-purple-400"
              onChange={handleChange}
            />
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full mb-4 px-3 py-2 rounded-lg bg-black border border-gray-700 
            text-white placeholder-gray-500 focus:outline-none focus:border-purple-400"
            onChange={handleChange}
          />

          {/* 🌟 Button */}
          <div className="relative group">
            <div className="absolute -inset-[2px] rounded-lg 
            bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 
            opacity-70 animate-border"></div>

            <button
              type="submit"
              className="relative w-full bg-black text-white py-2 rounded-lg 
              font-semibold tracking-wide 
              hover:scale-[1.02] transition"
            >
              {isSignup ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </form>

        {/* Toggle */}
        <p className="text-center mt-4 text-sm text-gray-400">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <span
            onClick={() => setIsSignup(!isSignup)}
            className="text-purple-400 ml-1 cursor-pointer hover:underline"
          >
            {isSignup ? "Sign In" : "Sign Up"}
          </span>
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