import afnanHero2 from "@/assets/afnan-hero-2.jpeg";

const SecretSection = () => {
  return (
    <section className="section-padding bg-secondary/30 py-16 lg:py-24">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Image - Left - Made much bigger */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={afnanHero2}
              alt="Afnan Khalifa"
              className="w-full max-w-xl lg:max-w-2xl object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* Content - Right - All fonts significantly larger */}
          <div className="space-y-8 lg:space-y-10 text-center lg:text-left">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              1:1 Self-Development Coaching
            </h2>

            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-primary">
              The Secret Nobody Talks About…
            </h3>

            <div className="space-y-6 lg:space-y-8">
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed">
                For those who are done with surface-level motivation—you’re
                ready for true, lasting transformation.
              </p>

              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed">
                In my coaching, we go deep: reshaping your mindset, building
                powerful habits, creating solid structure, and gaining real
                clarity. I help you reconnect with who you really are, restore
                sharp focus, and take full control of where your life is headed.
              </p>

              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-bold">
                This isn’t therapy.
              </p>

              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed">
                This is practical, no-nonsense strategy to design and live the
                life you actually want.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecretSection;
