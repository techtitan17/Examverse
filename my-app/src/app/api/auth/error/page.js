"use client";

export default function Error({ message = "Invalid signup credentials!", onRetry }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden px-4">

      {/* 🔲 GRID BACKGROUND */}
      <div className="absolute inset-0 
      bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),
           linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]
      bg-[size:70px_70px]"></div>

      {/* 🌫️ GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 
      w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 
      w-[400px] h-[400px] bg-pink-500/20 blur-[120px] rounded-full"></div>

      {/* 💎 POPUP */}
      <div className="relative z-10 bg-black/80 backdrop-blur-md 
      border border-red-500/40 
      shadow-[0_0_25px_rgba(239,68,68,0.4)] 
      rounded-2xl p-8 w-full max-w-md text-center">

        {/* ❌ Title */}
        <h2 className="text-2xl font-bold text-red-400 mb-4">
          Error
        </h2>

        {/* Message */}
        <p className="text-gray-300 mb-6">
          {message}
        </p>

        {/* 🔵 Try Again Button */}
        <button
          onClick={onRetry}
          className="w-full bg-blue-500 text-white py-2 rounded-lg 
          font-semibold hover:bg-blue-600 transition"
        >
          Try Again
        </button>

      </div>
    </div>
  );
}