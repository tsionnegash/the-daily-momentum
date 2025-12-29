import afnanWhy from "@/assets/afnan-why.jpeg";

const WhyMattersSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Content - Left */}
          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">
              <em className="font-signature text-5xl md:text-6xl lg:text-7xl not-italic">
                Why
              </em>{" "}
              Does This Matter?
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl">
              Because I see it every. day. People DM me saying:
            </p>

            <p className="text-lg md:text-xl lg:text-2xl font-bold">
              "I feel stuck. I feel like I have no control because I can't stay
              consistent."
            </p>

            <p className="text-lg md:text-xl lg:text-2xl">
              Yes, you need discipline and productivity.
              <br />
              Not just for the tasks, but because they give you control,
              momentum, and freedom.
            </p>

            <p className="text-lg md:text-xl lg:text-2xl">
              You should never stay overwhelmed, unmotivated, or directionless
              because you can't build the habits to move forward. You should
              never settle for less because you lack the structure and focus to
              create the life you want.
            </p>

            <p className="text-lg md:text-xl lg:text-2xl font-bold">
              And that's exactly what this Day One Planner will give you —{" "}
              <span className="underline">
                the power to plan your day, track your progress, and build
                habits that lead to success.
              </span>
            </p>
          </div>

          {/* Image - Right */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={afnanWhy}
              alt="Afnan Khalifa"
              className="w-full max-w-lg object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMattersSection;
