const WhatYouLearnSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Title - Left */}
          <div className="lg:sticky lg:top-24">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold italic leading-tight">
              📌 Is This Coaching Program For YOU?
            </h2>
          </div>

          {/* Content - Right - Back to original, moderate font sizes */}
          <div className="space-y-8">
            <p className="text-base md:text-lg leading-relaxed">
              Let’s cut the fluff—answer these questions honestly:
            </p>

            <div className="space-y-5">
              <p className="text-base md:text-lg leading-relaxed">
                • Do you often start strong on goals… but procrastination creeps
                in and kills your momentum?
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                • Are you tired of feeling inconsistent, even though you know
                you’re capable of so much more?
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                • Do you crave real discipline and next-level productivity, but
                struggle to make it stick on your own?
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                • Have you tried apps, books, or random routines—yet still lack
                a clear, structured plan that actually works for YOUR life?
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                • Are you finally ready to stop spinning your wheels and make
                serious, measurable progress toward your biggest goals?
              </p>
            </div>

            <p className="text-base md:text-lg leading-relaxed mt-8">
              If you nodded <span className="font-bold">“yes”</span> to even{" "}
              <span className="font-bold">one</span> of these → this program is
              built for you.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              This is perfect for ambitious people who:
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-1">✔️</span>
                <p className="text-base md:text-lg leading-relaxed">
                  Battle{" "}
                  <span className="font-bold">
                    procrastination and inconsistency
                  </span>{" "}
                  daily
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl mt-1">✔️</span>
                <p className="text-base md:text-lg leading-relaxed">
                  Want to unlock{" "}
                  <span className="font-bold">unbreakable discipline</span> and
                  skyrocket their productivity
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl mt-1">✔️</span>
                <p className="text-base md:text-lg leading-relaxed">
                  Need a{" "}
                  <span className="font-bold">
                    proven structure, clear plan, and real accountability
                  </span>{" "}
                  to stay on track
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl mt-1">✔️</span>
                <p className="text-base md:text-lg leading-relaxed">
                  Are <span className="font-bold">100% ready</span> to invest in
                  themselves and finally turn ambition into results
                </p>
              </div>
            </div>

            <p className="text-base md:text-lg leading-relaxed mt-8">
              If you’ve been feeling{" "}
              <span className="font-bold">
                stuck, drained, unmotivated, overwhelmed, or just directionless
              </span>
              —this isn’t another quick fix.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearnSection;
