"use client";
import { Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BaseNavbar() {
  const router = useRouter(); // ✅ initialize router

  return (
    <nav className="w-full bg-black text-white 
    px-6 py-4 flex items-center justify-between 
    border border-purple-500/40 
    shadow-[0_0_12px_rgba(168,85,247,0.7)]">

      {/* Logo + Name */}
      <div className="flex items-center gap-2">
        <Sparkles className="text-pink-400" />
        <h1 className="text-2xl font-extrabold tracking-wide 
        bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 
        bg-clip-text text-transparent font-serif italic">
          Examverse
        </h1>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => router.push("/signup")}   // ✅ redirect
          className="px-4 py-2 rounded-lg border border-blue-400 text-blue-400 
          transition duration-300 hover:bg-blue-400 hover:text-black"
        >
          Sign Up
        </button>

        <button
          onClick={() => router.push("/signin")}   // ✅ redirect
          className="px-4 py-2 rounded-lg border border-pink-400 text-pink-400 
          transition duration-300 hover:bg-pink-400 hover:text-black"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
}
