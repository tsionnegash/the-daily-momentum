import { useState, useEffect, useRef } from "react";

const BrandingSection = () => {
  const [brandingImage, setBrandingImage] = useState(
    "/assets/afnan-image-3.jpeg", // fallback to your original
  );

  const scrollContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  const purchaseLink =
    "https://ye-buna.com/Yididya?ref=product_detail&product=6749b9554a4cd_1732884821_77356641_Yididya";

  // Load saved branding image from localStorage (set in admin)
  useEffect(() => {
    const saved = localStorage.getItem("dm-branding-image");
    if (saved) {
      setBrandingImage(saved);
    }
  }, []);

  // Snowflakes (unchanged)
  const [snowflakes, setSnowflakes] = useState([]);
  useEffect(() => {
    const createSnowflakes = () => {
      const flakes = [];
      for (let i = 0; i < 30; i++) {
        flakes.push({
          id: i,
          left: Math.random() * 100,
          size: Math.random() * 8 + 4,
          duration: Math.random() * 15 + 10,
          delay: Math.random() * 5,
        });
      }
      setSnowflakes(flakes);
    };
    createSnowflakes();
  }, []);

  // Auto-scroll (unchanged - your fixed version)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollSpeed = 30;
    const startAutoScroll = () => {
      return setInterval(() => {
        if (container.scrollWidth > container.clientWidth) {
          scrollAmount += scrollStep;
          if (scrollAmount >= container.scrollWidth - container.clientWidth) {
            scrollAmount = 0;
            container.scrollLeft = 0;
          } else {
            container.scrollLeft = scrollAmount;
          }
        }
      }, scrollSpeed);
    };
    scrollIntervalRef.current = startAutoScroll();
    const handleMouseEnter = () => {
      if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
    };
    const handleMouseLeave = () => {
      scrollIntervalRef.current = startAutoScroll();
    };
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Card data (unchanged)
  const cardsData = [
    {
      id: 1,
      title: "Take Control of Your Time",
      desc: "Simple layout for efficient planning and focus on what matters most.",
      icon: "⏰",
    },
    {
      id: 2,
      title: "Focus on Your Goals",
      desc: "Break objectives into daily steps and track progress consistently.",
      icon: "🎯",
    },
    {
      id: 3,
      title: "Build Lasting Habits",
      desc: "Create systems for organization and momentum toward success.",
      icon: "📈",
    },
    {
      id: 4,
      title: "Daily Progress Tracking",
      desc: "Monitor achievements and maintain consistent forward movement.",
      icon: "✅",
    },
    {
      id: 5,
      title: "Organized Success",
      desc: "All-in-one tool for planning, tracking, and staying on course.",
      icon: "📊",
    },
    {
      id: 6,
      title: "Start Fresh Daily",
      desc: "Make every day your Day One with renewed focus and energy.",
      icon: "🌟",
    },
  ];

  return (
    <section className="section-padding bg-[#ebebeb] relative overflow-hidden">
      {/* Snowfall */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="absolute rounded-full bg-[#5d222a]/30 animate-fall"
            style={{
              left: `${flake.left}%`,
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              top: "-20px",
              animation: `fall ${flake.duration}s linear ${flake.delay}s infinite`,
              opacity: Math.random() * 0.4 + 0.1,
            }}
          />
        ))}
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-4 h-4 bg-[#E8C547] rounded-full animate-pulse"></div>
            <div
              className="w-4 h-4 bg-[#E8C547]/80 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-4 h-4 bg-[#E8C547] rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
          <p className="font-serif text-2xl md:text-3xl text-[#E8C547] font-bold mb-4 animate-bounce">
            here we go
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Left: Text + Cards */}
          <div className="space-y-8">
            <div className="relative">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#E8C547]">
                Your Journey Starts Here.
              </h2>
              <p className="text-2xl md:text-3xl leading-relaxed text-[#5d222a] font-medium">
                Welcome to{" "}
                <span className="text-[#5d222a] font-bold italic">
                  The Day One Planner
                </span>{" "}
                —your simple, effective companion to take control of your time,
                focus on goals, and build successful habits.
              </p>
            </div>

            {/* Auto-scroll Cards */}
            <div className="mt-8">
              <h3 className="font-bold text-2xl md:text-3xl mb-6 text-center text-[#5d222a]">
                ✨ What You'll Achieve:
              </h3>
              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto scrollbar-hide space-x-4 py-4 px-2"
                style={{ scrollBehavior: "smooth" }}
              >
                {cardsData.map((card) => (
                  <div
                    key={card.id}
                    className="flex-shrink-0 w-64 h-48 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-[#5d222a]/20 p-6 flex flex-col justify-between transform hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-4xl mb-3 text-[#5d222a]">
                      {card.icon}
                    </div>
                    <h4 className="font-bold text-xl text-[#5d222a] mb-2">
                      {card.title}
                    </h4>
                    <p className="text-[#5d222a]/80 text-sm leading-tight">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-center text-[#E8C547] text-sm mt-4 italic">
                ← Hover to pause →
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <a
                href={purchaseLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-[#E8C547] text-white text-xl md:text-2xl font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
              >
                <span className="text-3xl">✨</span>
                Get Your Day One Planner Now
                <span className="text-3xl group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right: Dynamic Image */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#5d222a]/20 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <img
                src={brandingImage}
                alt="The Day One Planner"
                className="relative w-full h-auto object-cover rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500 border-8 border-white"
              />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#E8C547] text-white text-lg font-bold px-6 py-2 rounded-full">
                the day one planner
              </div>
            </div>
            <div className="h-8"></div>
          </div>
        </div>

        {/* Final Message */}
        <div className="mt-16 text-center">
          <p className="text-2xl md:text-3xl font-bold italic text-[#E8C547] p-4 border-2 border-[#E8C547]/30 rounded-xl bg-white/70 backdrop-blur-sm">
            Stop planning to start. Start with The Day One Planner.
          </p>
        </div>
      </div>

      {/* Snow animation CSS */}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default BrandingSection;
