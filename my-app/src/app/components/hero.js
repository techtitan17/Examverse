"use client";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-black overflow-hidden">

      {/* 🔲 DARK GRID WITH SOFT WHITE LINES */}
      <div className="absolute inset-0 
      bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),
           linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]
      bg-[size:70px_70px]"></div>

      {/* CONTENT */}
      <div className="relative z-10">
        
        {/* WELCOME */}
        <h1 className="text-6xl md:text-7xl text-white tracking-[0.2em] 
        font-extrabold italic font-serif">
          WELCOME
        </h1>

        {/* Paragraph */}
        <p className="mt-6 text-gray-400 max-w-xl text-lg leading-relaxed font-light">
          Discover opportunities, track your progress, and prepare smarter for competitive exams.
          Your journey to success begins here.
        </p>

        {/* BUTTON */}
        <div className="mt-10 relative group">

          {/* Moving Border */}
          <div className="absolute -inset-[2px] rounded-xl 
          bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 
          opacity-60 animate-border"></div>

          <button className="relative bg-black text-white px-8 py-3 rounded-xl 
          text-lg tracking-wide font-semibold font-mono 
          hover:scale-105 transition">
            Start Your Journey
          </button>
        </div>

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