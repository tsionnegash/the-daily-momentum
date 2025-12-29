const programCards = [
  {
    front: "3-Month Journey",
    back: "The ideal timeframe to build deep habits, create real momentum, and see lasting transformation—without dragging on forever.",
  },
  {
    front: "Private 1-on-1 Coaching",
    back: "3 sessions/week (live video). Completely personalized. We focus only on your goals, blocks, and life—no group distractions, just direct, high-impact coaching.",
  },
  {
    front: "Group Coaching Option",
    back: "2 sessions/week. Same proven system + energy from a small, motivated community. Perfect if you want support and insights from others on the same path.",
  },
  {
    front: "Your Custom Plan",
    back: "Tailored Strategy. Built 100% around your unique goals, schedule, and challenges. No generic templates—everything fits YOUR life.",
  },
  {
    front: "Weekly Structure",
    back: "Action Plans + Habit Tracking. Clear, bite-sized steps every week + simple tracking tools so you always know exactly what to do and see your progress.",
  },
  {
    front: "Resources",
    back: "Exclusive Tools & Guides. Worksheets, templates, checklists, and audio guides for productivity and discipline—yours to keep and use forever.",
  },
  {
    front: "Accountability",
    back: "Direct Support from Me. Message me anytime between sessions for quick feedback, motivation, or adjustments. I’ve got your back.",
  },
  {
    front: "Progress Check-Ins",
    back: "Monthly Reviews. We look at wins, obstacles, and results—then refine the plan so you keep moving forward faster each month.",
  },
];

const HowItWorksSection = () => {
  return (
    <section
      className="relative section-padding overflow-hidden"
      style={{ backgroundColor: "#6b112e" }}
    >
      {/* Subtle festive overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute w-1 h-1 md:w-2 md:h-2 bg-amber-100 rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={`gift-${i}`}
              className="absolute text-2xl md:text-3xl animate-fall-slow drop-shadow-md"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 3}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            >
              🎁
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative container-wide">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-white drop-shadow-2xl">
          📅 How the Program Works
        </h2>
        <p className="text-center text-lg md:text-xl mb-12 max-w-3xl mx-auto text-white/90">
          Swipe or flip each card to reveal full details on the back 👆
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {programCards.map((card, index) => (
            <div
              key={index}
              className="group h-64 [perspective:1000px] cursor-pointer"
            >
              <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-active:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">
                {/* Front of card – deep burgundy */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-gradient-to-br from-[#7a1638] to-[#5a0f28] text-white rounded-2xl shadow-2xl flex flex-col items-center justify-center p-6 text-center border border-white/10">
                  <p className="text-2xl md:text-3xl font-bold drop-shadow-lg">
                    {index + 1}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold mt-4 drop-shadow-md">
                    {card.front}
                  </h3>
                </div>

                {/* Back of card – white with golden shadow on hover/touch */}
                <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-white rounded-2xl flex items-center justify-center p-8 text-center transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-yellow-400/50 group-active:shadow-2xl group-active:shadow-yellow-400/60">
                  <p className="text-base md:text-lg leading-relaxed text-gray-800">
                    {card.back}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl font-semibold leading-relaxed text-white drop-shadow-2xl">
            This isn’t motivation that fades.
            <br />
            This is a clear, practical system to build real discipline and
            become the most consistent version of yourself.
          </p>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fall-slow {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 0.8;
          }
          85% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        .animate-fall-slow {
          animation: fall-slow linear infinite;
        }

        .animate-twinkle {
          animation: twinkle infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HowItWorksSection;
