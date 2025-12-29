import afnanProfile from "@/assets/afnan-profile.png";

const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-serif text-xl md:text-2xl mb-2">
            Founder & Creative Director
          </p>
          <h2 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight">
            Behind The Daily Momentum
          </h2>
          <p className="font-serif text-2xl md:text-3xl italic mt-2">
            where the journey back to yourself begins
          </p>
        </div>

        {/* Content Grid - Image left, text right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start max-w-7xl mx-auto">
          {/* Image - Left Side - EXTRA BIG */}
          <div className="flex justify-center lg:justify-end lg:pt-12">
            <img
              src={afnanProfile}
              alt="Yididya"
              className="w-full h-auto object-cover rounded-xl shadow-2xl lg:scale-110"
            />
          </div>

          {/* Story Content - Right Side */}
          <div className="space-y-6 text-foreground">
            <h4 className="font-serif text-3xl md:text-4xl font-bold mb-2">
              Hi, I'm Yididya.
            </h4>
            <p className="text-lg md:text-xl italic text-muted-foreground mb-6">
              I started The Daily Momentum from a feeling I couldn't ignore.
            </p>

            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed">
                I believe everything begins with <strong>awareness</strong>,
                that first honest look in the mirror to see who you really are,
                what you truly long for, and what's been whispering that you
                can't have it. I've seen it change everything.
              </p>

              <p className="text-lg md:text-xl leading-relaxed">
                So now, I walk alongside women who are ready to rebuild, to find
                clarity in the chaos and gentle discipline that doesn't feel
                like a punishment. We create rhythms that last, so the person
                they keep imagining in their heart can finally, quietly, become
                the person living their life.
              </p>

              <p className="text-lg md:text-xl leading-relaxed">
                This isn't about hustle or a motivational high. It's about
                building a <strong>foundation</strong> in your daily habits,
                your quietest thoughts, your way of moving through the world. A
                system that holds you, even on the hard days.
              </p>

              <p className="text-lg md:text-xl leading-relaxed">
                My work extends to brands and businesses, too, helping them find
                their human voice and real momentum. Because purpose without a
                plan is just a dream, and a plan without purpose is just noise.
              </p>

              {/* Community Section */}
              <div className="pt-6 mt-6 border-t border-gray-100">
                <p className="text-lg md:text-xl leading-relaxed">
                  And this? This is the beautiful part. It's no longer just me.
                  It's a circle of <strong>over 160,000 kindred spirits</strong>{" "}
                  across social platforms, with{" "}
                  <strong>more than 5,600 souls</strong> building something real
                  in our online home.
                </p>

                <p className="text-lg md:text-xl leading-relaxed mt-6">
                  We don't just talk about growth.{" "}
                  <span className="font-semibold italic">
                    We feel it in our bones.
                  </span>{" "}
                  We celebrate the tiny wins, navigate the messy middle, and
                  show up for each other. We are living proof that change is
                  possible.
                </p>

                <p className="text-lg md:text-xl leading-relaxed font-semibold italic mt-6 text-center md:text-left">
                  And if any of this whispers to you, well, your seat at the
                  table has been waiting.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href="https://t.me/+l29gjqbKiYZhMzY0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4 hover:scale-105 transition-transform w-full justify-center md:w-auto"
                  >
                    Take your seat <span>→</span>
                  </a>

                  <p className="text-base text-muted-foreground italic text-center md:text-left">
                    The most important journey begins with a single step. Let's
                    take it together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
