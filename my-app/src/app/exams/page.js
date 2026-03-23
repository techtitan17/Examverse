"use client";

const exams = [
  { name: "JEE", desc: "Entrance exam for IITs, NITs and top engineering colleges in India." },
  { name: "NEET", desc: "Medical entrance exam for MBBS, BDS and other healthcare courses." },
  { name: "UPSC", desc: "Civil services exam for IAS, IPS and other top government posts." },
  { name: "GATE", desc: "Exam for postgraduate engineering admissions and PSU jobs." },
  { name: "CAT", desc: "MBA entrance exam for IIMs and top business schools." },

  { name: "SSC", desc: "Government exams for various central government departments." },
  { name: "RBI", desc: "Recruitment exam for Reserve Bank of India positions." },
  { name: "SBI", desc: "Banking exams for SBI PO, Clerk and other roles." },
  { name: "BITSAT", desc: "Entrance exam for BITS Pilani engineering programs." },
  { name: "INI CET", desc: "Medical PG entrance exam for AIIMS and other institutes." },

  { name: "CA", desc: "Chartered Accountant exam for finance and accounting careers." },
  { name: "XAT", desc: "MBA entrance exam conducted by XLRI." },
  { name: "CLAT", desc: "Law entrance exam for NLUs across India." },
  { name: "AILET", desc: "Law entrance exam for National Law University Delhi." },
  { name: "UGC NET", desc: "Eligibility test for lectureship and research fellowships." },

  { name: "NID", desc: "Design entrance exam for National Institute of Design." },
  { name: "NATA", desc: "Architecture entrance exam for top architecture colleges." },
];

export default function Exams() {
  return (
    <div className="relative min-h-screen bg-black py-20 px-6 overflow-hidden">

      {/* 🔲 GRID BACKGROUND */}
      <div className="absolute inset-0 
      bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),
           linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
      bg-[size:70px_70px]"></div>

      {/* 🌫️ GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 
      w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl text-white text-center mb-12 font-serif">
          All Competitive Exams
        </h2>

        {/* GRID → 5 PER ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {exams.map((exam, index) => (
            <div
              key={index}
              className="relative bg-black/80 backdrop-blur-md 
              border border-purple-500/30 
              rounded-2xl p-5 
              shadow-[0_0_20px_rgba(168,85,247,0.4)] 
              hover:scale-105 transition"
            >
              <h3 className="text-lg text-white font-bold mb-2">
                {exam.name}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {exam.desc}
              </p>

              {/* BUTTON */}
              <div className="relative group w-fit">
                <div className="absolute -inset-[2px] rounded-lg 
                bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 
                opacity-70 animate-border"></div>

                <button className="relative bg-black text-white px-4 py-2 rounded-lg 
                text-sm font-mono hover:scale-105 transition">
                  Explore Course
                </button>
              </div>
            </div>
          ))}

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