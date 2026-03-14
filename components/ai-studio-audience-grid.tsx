"use client";

const audiences = [
  {
    id: "designers",
    label: "Designers",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=600&fit=crop",
    bg: "from-[#4a5a8a] to-[#2a3a6a]",
  },
  {
    id: "marketers",
    label: "Marketers",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=600&fit=crop",
    bg: "from-[#b4a5d5] to-[#8a7ab5]",
  },
  {
    id: "filmmakers",
    label: "Filmmakers",
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=600&fit=crop",
    bg: "from-[#5a8a9a] to-[#3a6a7a]",
  },
  {
    id: "creators",
    label: "Content creators",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=600&fit=crop",
    bg: "from-[#9a5a6a] to-[#7a3a4a]",
  },
];

export function AIStudioAudienceGrid() {
  return (
    <section className="py-24 bg-[#0e0e0e] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="font-['Sora',sans-serif] text-4xl sm:text-5xl font-bold text-white">
            Boost your professional workflow and productivity
          </h2>
        </div>

        {/* Grid of 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience) => (
            <div
              key={audience.id}
              className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${audience.bg} h-[520px] group cursor-pointer transition-transform duration-300 hover:scale-[1.02]`}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={audience.img}
                  alt={audience.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Label - Vertical Text at Bottom */}
              <div className="absolute inset-0 flex items-end justify-center pb-8">
                <span
                  className="text-white text-lg font-semibold tracking-wide"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {audience.label}
                </span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Optional Search Bar (like in reference) */}
        <div className="mt-8 flex justify-center">
          <div className="bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white/70 text-sm">
            Search - Winter Paralympics
          </div>
        </div>
      </div>
    </section>
  );
}
