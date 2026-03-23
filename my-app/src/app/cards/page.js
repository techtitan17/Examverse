"use client";

const exams = [
  {
    name: "JEE",
    desc: "Joint Entrance Examination for admission to top engineering institutes like IITs and NITs.",
  },
  {
    name: "NEET",
    desc: "National Eligibility cum Entrance Test for students aspiring to pursue medical courses.",
  },
  {
    name: "UPSC",
    desc: "Civil Services Examination conducted for prestigious government positions in India.",
  },
  {
    name: "GATE",
    desc: "Graduate Aptitude Test in Engineering for postgraduate admissions and PSU jobs.",
  },
  {
    name: "CAT",
    desc: "Common Admission Test for entry into top management institutes like IIMs.",
  },
  {
    name: "SSC",
    desc: "Staff Selection Commission exams for recruitment in various government departments.",
  },
];

export default function ExamSection() {
  return (
    <div className="relative min-h-screen bg-black py-20 px-6 overflow-hidden">

      {/* 🔲 GRID BACKGROUND */}
      <div className="absolute inset-0 
      bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),
           linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
      bg-[size:70px_70px]"></div>

      {/* 🌫️ Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 
      w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl text-white text-center mb-12 font-serif">
          Explore Exams
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exams.map((exam, index) => (
            <div
              key={index}
              className="relative bg-black/80 backdrop-blur-md 
              border border-purple-500/30 
              rounded-2xl p-6 
              shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              <h3 className="text-2xl text-white font-bold mb-3">
                {exam.name}
              </h3>

              <p className="text-gray-400 text-sm mb-6">
                {exam.desc}
              </p>

              {/* Button */}
              <div className="relative group w-fit">
                <div className="absolute -inset-[2px] rounded-lg 
                bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 
                opacity-70 animate-border"></div>

                <button className="relative bg-black text-white px-5 py-2 rounded-lg 
                font-semibold font-mono hover:scale-105 transition">
                  Start
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-16">
          <div className="relative group">
            <div className="absolute -inset-[2px] rounded-lg 
            bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 
            opacity-70 animate-border"></div>

            <button className="relative bg-black text-white px-8 py-3 rounded-lg 
            font-semibold font-mono hover:scale-105 transition">
              View More
            </button>
          </div>
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