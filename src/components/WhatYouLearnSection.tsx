const WhatYouLearnSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#5d222a]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Sticky Title - Left - Now golden */}
          <div className="lg:sticky lg:top-24">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold italic leading-tight text-[#E8C547]">
              1:1 Coaching — Personal Development, Personalized
            </h2>
          </div>

          {/* Interactive Accordion Content - Right */}
          <div className="space-y-6">
            <p className="text-base md:text-lg leading-relaxed text-[#ebebeb]/90">
              My 1:1 coaching is for people who know they want more from life —
              but feel stuck, overwhelmed, or unsure where to start.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-[#ebebeb]/90">
              This is not motivational talk or one-size-fits-all advice. It’s a
              personalized development space where we work together on the areas
              of your life that matter most right now.
            </p>

            {/* Main Interactive Accordion - DARK MAROON BACKGROUND */}
            <div className="space-y-4 mt-8">
              <details className="group rounded-lg border border-[#ebebeb]/20 bg-[#5d222a]/90 text-[#ebebeb] overflow-hidden transition-all duration-300">
                <summary className="flex justify-between items-center cursor-pointer p-5 text-lg md:text-xl font-semibold hover:bg-[#4a1a22] transition-colors">
                  <span>What we focus on in sessions</span>
                  <span className="text-xl transition-transform duration-300 group-open:rotate-180 text-[#E8C547]">
                    ▼
                  </span>
                </summary>
                <div className="px-5 pb-5 pt-2 text-[#ebebeb]/90">
                  <ul className="space-y-3 list-disc pl-5 marker:text-[#ebebeb]/70 text-base md:text-lg leading-relaxed">
                    <li>Building clarity around your goals and direction</li>
                    <li>
                      Creating structure and discipline that fits your real life
                    </li>
                    <li>
                      Developing consistency in habits, mindset, and
                      decision-making
                    </li>
                    <li>
                      Strengthening internal growth (mental, physical, and
                      spiritual)
                    </li>
                    <li>
                      Improving external areas such as relationships, finances,
                      and independence
                    </li>
                  </ul>
                </div>
              </details>

              <details className="group rounded-lg border border-[#ebebeb]/20 bg-[#5d222a]/90 text-[#ebebeb] overflow-hidden transition-all duration-300">
                <summary className="flex justify-between items-center cursor-pointer p-5 text-lg md:text-xl font-semibold hover:bg-[#4a1a22] transition-colors">
                  <span>How the process actually works</span>
                  <span className="text-xl transition-transform duration-300 group-open:rotate-180 text-[#E8C547]">
                    ▼
                  </span>
                </summary>
                <div className="px-5 pb-5 pt-2 space-y-4 text-base md:text-lg leading-relaxed text-[#ebebeb]/90">
                  <p>
                    I work with you to identify what’s holding you back — not
                    just on the surface, but at the root — and help you build
                    practical systems to move forward with confidence.
                  </p>
                  <p>
                    This coaching is especially for those who feel like they’ve
                    been trying on their own for a long time, and are ready for
                    guided growth, accountability, and honest conversations.
                  </p>
                </div>
              </details>
            </div>

            {/* Final powerful statement - always visible */}
            <p className="text-xl md:text-2xl font-semibold italic text-center md:text-left mt-12 border-t border-[#ebebeb]/20 pt-10 text-[#ebebeb]">
              The goal isn’t to fix you.
              <br />
              The goal is to help you develop the skills, clarity, and
              self-trust to lead your own life well.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearnSection;
