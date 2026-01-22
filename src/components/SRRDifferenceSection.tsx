import { motion } from "framer-motion";

const CoachingMethodsSection = () => {
  return (
    <section className="section-padding bg-[#5d222a]">
      <div className="container-wide">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-xl mb-6 text-[#E8C547]">
            new things are coming sooon...
          </h2>
          <p className="text-xl md:text-2xl text-[#ebebeb]/90 max-w-3xl mx-auto">
            A powerful community is being built a place where people show up
            daily, support each other, stay accountable, and grow stronger
            together.
          </p>
        </div>

        {/* Coming Soon Card with Beating Heart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center py-20 px-8 md:px-16 bg-[#ebebeb]/10 backdrop-blur-lg rounded-3xl border border-[#E8C547]/30 shadow-2xl"
        >
          {/* Beating Heart */}
          <motion.div
            className="mb-10 inline-block"
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              className="w-24 h-24 md:w-32 md:h-32 mx-auto text-[#E8C547]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>

          {/* Coming Soon Title */}
          <h3 className="text-5xl md:text-7xl font-serif font-bold text-[#E8C547] mb-8 drop-shadow-lg">
            Coming Soon
          </h3>

          {/* Community Message */}
          <p className="text-2xl md:text-3xl text-[#ebebeb] leading-relaxed mb-10">
            The Daily Momentum Community where committed people gather every
            day, share their progress, hold each other accountable, celebrate
            wins, and lift each other up through tough days.
          </p>

          {/* Community Quote */}
          <blockquote className="text-xl md:text-2xl italic text-[#E8C547]/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            "Alone we can do so little; together we can do so much."
            <footer className="mt-4 text-lg opacity-80 not-italic">
              — Helen Keller
            </footer>
          </blockquote>

          {/* Teaser Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-5 bg-[#E8C547] text-[#5d222a] font-bold text-xl rounded-full shadow-lg hover:shadow-2xl transition-all"
          >
            the Community Soon...
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoachingMethodsSection;
