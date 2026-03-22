"use client";
import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-black text-white w-full px-8 py-4 
    flex items-center justify-between 
    border border-purple-500/40 
    shadow-[0_0_10px_rgba(168,85,247,0.6)]">

      {/* Logo */}
      <div className="flex items-center gap-2 text-xl font-bold">
        <span className="text-pink-400"></span>
        <span className="font-sans tracking-wide">Examverse</span>
      </div>

      {/* Links */}
      <div className="flex gap-8 text-sm font-medium">
        <a href="#" className="hover:text-pink-400 transition duration-300">About Us</a>
        <a href="#" className="hover:text-pink-400 transition duration-300">My Exams</a>
        <a href="#" className="hover:text-pink-400 transition duration-300">Contact Us</a>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <Bell className="cursor-pointer hover:text-pink-400 transition" />

        <button className="text-blue-400 underline hover:text-blue-300">
          Sign Up
        </button>
        <button className="text-blue-400 underline hover:text-blue-300">
          Sign In
        </button>
      </div>
    </nav>
  );
}