import afnanProfile from "@/assets/afnan-profile.png";

const AboutSection = () => {
  return (
    <section className="section-padding bg-[#ebebeb] py-12 md:py-20">
      <div className="container-wide max-w-6xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="
              font-serif 
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
              font-bold 
              tracking-tight 
              uppercase 
              text-[#E8C547]
            "
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            Who I Am & Why I Started This Journey
          </h2>
        </div>

        {/* Two-column book layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24">
          {/* Left column – Photo + beginning */}
          <div className="space-y-10">
            <div className="flex justify-center lg:justify-start">
              <img
                src={afnanProfile}
                alt="Yididya - Founder of Sinera"
                className="w-full max-w-md lg:max-w-lg h-auto object-cover"
              />
            </div>

            <div className="prose prose-lg md:prose-xl max-w-none space-y-6 text-[#5d222a] leading-relaxed">
              <p className="text-[#E8C547]">
                I started this journey from a simple place: sharing what I knew.
              </p>

              <p>
                At first, I didn’t see it as anything special. The things
                Italked about felt natural to me: how to structure your day, how
                to stay disciplined, how to thinkindependently, how to move
                forward even when life feels heavy. But as I shared more,
                something became clear.
              </p>

              <p>
                What felt easy to me was actually very hard for many others.
              </p>

              <p>
                As I continued creating content, another pattern emerged: there
                was a huge knowledge gap.
              </p>
            </div>
          </div>

          {/* Right column – Continuation */}
          <div className="prose prose-lg md:prose-xl max-w-none space-y-6 text-[#5d222a] leading-relaxed lg:pt-20">
            <p>
              The same questions kept coming up about productivity,
              independence, consistency, discipline, and direction. And slowly,
              everything pointed to one core truth:
            </p>

            <p className="font-semibold italic text-xl md:text-2xl my-8 text-[#E8C547]">
              This is personal development.
            </p>

            <p>
              I see personal development as a complete system made of six
              essential areas:
            </p>

            {/* Six areas - clean text, two columns, no emojis/checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 my-10 text-base md:text-lg">
              <div className="space-y-2">
                <p className="font-semibold text-[#E8C547]">
                  Internal development
                </p>
                <p>Physical</p>
                <p>Mental</p>
                <p>Spiritual</p>
              </div>

              <div className="space-y-2">
                <p className="font-semibold text-[#E8C547]">
                  External development
                </p>
                <p>Relationships</p>
                <p>Finances</p>
                <p>Personal life and independence</p>
              </div>
            </div>

            <p>
              Real growth happens when these areas develop together. Neglect
              one, and the rest eventually suffer.
            </p>

            <p className="font-semibold italic text-xl md:text-2xl my-8 text-[#E8C547]">
              I was becoming the person I once needed.
            </p>

            <p>That’s how my YouTube channel was born.</p>

            <p>That’s how Daily Momentum and Day One came to life.</p>

            <p className="font-medium italic text-center mt-12 text-xl border-t border-gray-300/50 pt-10 text-[#E8C547]">
              This isn’t about perfection.
              <br />
              It’s about progress—one intentional day at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
