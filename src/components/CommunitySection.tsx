import communityImg from "@/assets/community.png";

const CommunitySection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-xl mb-2">THE BEST PART?</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            <span className="font-bold">OUR COMMUNITY</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-base md:text-lg">
              <strong>The Daily Momentum Community</strong> is a private,
              supportive space where committed people come together to build
              consistency and stay accountable every day.
            </p>

            <p className="text-base md:text-lg font-semibold">
              Here’s what it’s all about:
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-burgundy">•</span>
                <p>Daily check-ins to share your focus and wins</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-burgundy">•</span>
                <p>
                  Gentle accountability through challenges and partner check-ins
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-burgundy">•</span>
                <p>
                  Direct access to me for questions, feedback, and quick
                  guidance
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-burgundy">•</span>
                <p>Honest conversations about progress and setbacks</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-burgundy">•</span>
                <p>
                  A positive, judgment-free environment where everyone is
                  working toward the same goal
                </p>
              </li>
            </ul>

            <p className="text-base md:text-lg">
              Being surrounded by others who are showing up daily makes it
              easier for you to do the same. The community turns solo effort
              into shared momentum — and keeps you consistent even on tough
              days.
            </p>

            <p className="text-base md:text-lg italic">
              This is where real habits are built, together. 💪
            </p>
          </div>

          {/* Image - Made significantly bigger */}
          <div className="flex justify-center">
            <img
              src={communityImg}
              alt="Daily Momentum Community"
              className="w-full max-w-3xl object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
