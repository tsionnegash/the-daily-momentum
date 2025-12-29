const programs = [
  {
    title: "1:1 Coaching Program",
    features: [
      "3 times a week, 1.30 hours each session",
      "Will last for 3 months (3-month lock-in)",
      "Deep and targeted transformation",
      "Direct access with me (Text, Video Calls, Emails, etc)",
      "Deep chat and follow-ups",
      "Full free access to all resources and materials",
      "Personalized guides and programs",
      "Free Journal book or Planner",
    ],
    highlighted: true,
  },
  {
    title: "Membership Coaching Program (5-7 members only)",
    subtitle: "Currently Closed!",
    features: [
      "2 times a week, 1 hour each session",
      "Will last for 1 month only. (If needed, it can continue)",
      "Group discussion and guidance",
      "Access to the dedicated group for chatting and communicating, including me.",
      "Boost your confidence by interacting with one another",
      "Every week, follow-ups and new challenges",
    ],
    highlighted: false,
  },
];

const CoachingMethodsSection = () => {
  return (
    <section className="section-padding bg-[#6b112e]">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl mb-6">
            Are You Ready?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Choose the coaching method that will finally help you break through
            procrastination, build unbreakable discipline, and transform your
            life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group relative h-full [perspective:1200px] cursor-pointer ${
                program.highlighted ? "lg:scale-110" : ""
              }`}
            >
              <div
                className={`relative w-full h-full transition-all duration-800 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-active:[transform:rotateY(180deg)]`}
              >
                {/* Front of the Card */}
                <div className="[backface-visibility:hidden] absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                  <div
                    className={`h-full flex flex-col p-10 md:p-12 rounded-3xl border-4 ${
                      program.highlighted
                        ? "bg-gradient-to-br from-amber-600/20 to-yellow-600/20 border-amber-400/50 backdrop-blur-sm"
                        : "bg-white/10 border-white/20 backdrop-blur-md"
                    }`}
                  >
                    {program.subtitle && (
                      <div className="text-center mb-4">
                        <span className="inline-block px-6 py-3 bg-red-600/80 text-white font-bold rounded-full text-lg">
                          {program.subtitle}
                        </span>
                      </div>
                    )}

                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
                      {program.title}
                    </h3>

                    <ul className="space-y-5 flex-1">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <span className="text-3xl mt-1">✅</span>
                          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-10 text-center">
                      <span
                        className={`inline-block px-8 py-4 rounded-full text-xl font-bold ${
                          program.highlighted
                            ? "bg-amber-500 text-[#6b112e] shadow-lg shadow-amber-400/50"
                            : "bg-gray-600 text-white/70"
                        }`}
                      >
                        {program.highlighted
                          ? "Most Intensive"
                          : "Currently Closed"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Back of the Card – Only for 1:1 */}
                {program.highlighted && (
                  <div className="[transform:rotateY(180deg)] [backface-visibility:hidden] absolute inset-0 rounded-3xl bg-white flex items-center justify-center p-12 transition-shadow duration-500 group-hover:shadow-3xl group-hover:shadow-yellow-400/70 group-active:shadow-yellow-400/90">
                    <div className="text-center">
                      <h3 className="text-4xl md:text-5xl font-bold text-[#6b112e] mb-8">
                        Are You Truly Ready?
                      </h3>
                      <p className="text-xl md:text-2xl text-gray-800 leading-relaxed max-w-lg">
                        This private 1:1 journey is for those who are done
                        waiting and ready to commit to real, profound change. No
                        more excuses. No more inconsistency. Just results.
                      </p>
                      <div className="mt-12">
                        <p className="text-3xl font-bold text-amber-600">
                          Your transformation begins now.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachingMethodsSection;
