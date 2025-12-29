import heroLeftPanel from "@/assets/hero-left-panel.png";
import heroCenter from "@/assets/hero-center.png";
import heroRight from "@/assets/hero-right.png";
import dmLogo from "@/assets/dm-logo.png";

const HeroSection = () => {
  return (
    <>
      {/* Edwardian Script ITC font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Edwardian+Script+ITC:wght@400&display=swap"
        rel="stylesheet"
      />

      <section className="bg-burgundy py-12 md:py-20">
        {/* DM Logo - circular with golden glow */}
        <div className="flex justify-center mb-6 md:mb-8 px-4">
          <div className="relative group">
            <img
              src={dmLogo}
              alt="Daily Momentum Logo"
              className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-full
                         transition-all duration-700
                         group-hover:shadow-2xl group-hover:shadow-gold/60
                         group-hover:scale-110"
            />
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                            transition-opacity duration-700
                            shadow-2xl shadow-gold/40 blur-xl -z-10"
            />
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-6 md:mb-10 px-4">
          <div className="flex items-baseline justify-center gap-2 md:gap-4">
            {/* "The" - big and strongly slanted */}
            <span
              className="text-7xl md:text-8xl lg:text-9xl text-gold"
              style={{
                fontFamily: "'Edwardian Script ITC', cursive",
                transform: "rotate(-34deg)",
                marginRight: "-10px",
                marginBottom: "-20px",
              }}
            >
              The
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight uppercase text-gold">
              Daily Momentum
            </h1>
          </div>
        </div>

        {/* Subheading */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 px-4">
          <p className="text-sm md:text-base text-cream/80 leading-relaxed font-sans">
            A Life of Intention & Power Welcome to{" "}
            <span className="font-semibold text-gold">The Daily Momentum </span>
            your space to finally take full control of your life, build
            unbreakable habits, and create momentum that carries you forward
            every single day.
          </p>
        </div>

        {/* Hero Images Grid */}
        <div className="flex flex-col md:flex-row items-end justify-center max-w-7xl mx-auto px-4">
          <div className="relative w-full md:w-[32%] z-20 md:mr-[-40px] md:mb-12">
            <img
              src={heroLeftPanel}
              alt="Daily Momentum"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="relative w-full md:w-[38%] md:self-start md:mt-[-60px] z-10">
            <img
              src={heroRight}
              alt="Yidi - Seated Portrait"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="relative w-full md:w-[32%] md:ml-[-20px] z-0 md:mb-8">
            <img
              src={heroCenter}
              alt="Yidi - Portrait"
              className="w-full h-auto object-cover object-top"
            />
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-20 md:mt-28 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 -z-10 rounded-3xl" />

          {/* Main Text - "It's time to make" now in Edwardian Script ITC */}
          <div className="text-center mb-12 relative z-10 pt-8">
            <span
              className="text-5xl md:text-6xl lg:text-7xl block mb-2 text-gold drop-shadow-2xl"
              style={{ fontFamily: "'Edwardian Script ITC', cursive" }}
            >
              It's time to make
            </span>
            <span className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-cream uppercase tracking-wide drop-shadow-2xl">
              change in your life
            </span>
          </div>

          <div className="max-w-6xl mx-auto relative z-10 pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* YouTube Video Card */}
              <div className="order-1 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transform transition-transform duration-700">
                  <div className="bg-gold text-burgundy py-5 px-8 flex items-center justify-center gap-4">
                    <svg
                      className="w-7 h-7 animate-bounce"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                    <span className="text-xl font-bold tracking-widest uppercase">
                      Click to Watch My Story
                    </span>
                  </div>
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/AUaKz8pPFgA?si=kxTTtdq329lqsI1W"
                      title="My Story - Daily Momentum"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Welcome Card */}
              <div className="order-2 lg:order-2">
                <div className="bg-black/70 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gold/50 hover:border-gold hover:shadow-gold/40 hover:scale-105 transform transition-all duration-500">
                  <h3 className="text-3xl font-serif font-bold text-gold mb-6 text-center animate-pulse">
                    Welcome! ✨
                  </h3>
                  <p className="text-cream text-base leading-relaxed mb-8">
                    Hi there :) Welcome to my channel! We talk about
                    self-development and productivity. My videos will inspire
                    and motivate you to become the best version of yourself.
                    Join me on this journey of growth and success.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://www.youtube.com/@itsyidi?sub_confirmation=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gold text-burgundy px-6 py-3 rounded-full font-bold uppercase tracking-wider text-base hover:bg-yellow-400 hover:scale-110 hover:rotate-3 transform transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3H1v18h22V3zm-2 16H3V5h18v14zM10 15l6-3-6-3v6z" />
                      </svg>
                      Subscribe Now
                    </a>
                    <a
                      href="https://www.youtube.com/@itsyidi?sub_confirmation=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-transparent text-gold border-2 border-gold px-6 py-3 rounded-full font-bold uppercase tracking-wider text-base hover:bg-gold/20 hover:border-yellow-400 hover:scale-110 hover:-rotate-3 transform transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                      </svg>
                      Notifications
                    </a>
                  </div>
                  <p className="text-cream/70 text-sm text-center mt-6">
                    Click subscribe🔔
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
