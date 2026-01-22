import { useState } from "react";

const pricingPlans = [
  {
    title: "Day One Planner",
    subtitle: "Start every day with clarity, focus, and control.",
    price: "800 ETB",
    priceNote: "One-time payment",
    features: [
      "Physical planner delivered to you",
      "Simple, powerful daily layout",
      "Goal setting + habit tracking",
      "Progress reviews built-in",
      "Lifetime tool to stay disciplined and productive forever",
      "Free shipping inside Ethiopia",
    ],
    cta: "ORDER YOUR PLANNER NOW",
    popular: true,
    link: "https://ye-buna.com/Yididya?ref=product_detail&product=6749b9554a4cd_1732884821_77356641_Yididya",
  },
  {
    title: "1:1 Coaching Program",
    subtitle: "Your private path to unbreakable discipline and real results.",
    price: "15,000 ETB",
    priceNote: "/month (3-month commitment)",
    features: [
      "3 sessions/week — 1.5 hours each",
      "Deep, targeted transformation",
      "Direct access to me (text, calls, email)",
      "Unlimited chat & follow-ups",
      "Full access to all resources & materials",
      "Personalized plans & guides",
      "Free Day One Planner included",
    ],
    paymentInfo: "First payment: 20,000 ETB (covers 1 month + 2 weeks)",
    cta: "APPLY FOR 1:1 COACHING",
    popular: false,
    link: "https://forms.gle/LGk3igiUdFbAS4Nc8",
  },
  {
    title: "Corporate Training Program",
    subtitle: "Smart work systems for individuals, teams, and leaders",
    price: "Custom Pricing",
    priceNote: "Tailored to your organization's needs",
    features: [
      {
        group: "For Individuals",
        items: [
          "Smart work systems to manage time, energy, and priorities",
          "Improved focus, consistency, and personal accountability",
          "Practical productivity frameworks for daily execution",
          "Reduced overwhelm and burnout through structure",
        ],
      },
      {
        group: "For Managers & Leaders",
        items: [
          "Clear communication and expectation-setting",
          "Stronger team management and performance tracking",
          "Leadership systems that build ownership, not dependency",
          "Tools to lead with clarity, discipline, and consistency",
        ],
      },
      {
        group: "For Teams",
        items: [
          "Better collaboration and workflow alignment",
          "Goal-setting systems linked to company objectives",
          "Increased productivity without overworking",
          "Stronger team discipline and follow-through",
        ],
      },
      {
        group: "Program Format Includes",
        items: [
          "On-site or virtual training sessions",
          "Interactive workshops and real-life case discussions",
          "Practical systems, tools, and frameworks",
          "Customized content based on company needs",
          "Optional post-training follow-ups",
        ],
      },
    ],
    cta: "Request Proposal",
    popular: true,
    link: "https://docs.google.com/forms/d/e/1FAIpQLSf21EXKqG9qUUVUAzFk0RE9MlqTtXvJRo5zg5mw3mX_9aIVyg/viewform",
    closed: false,
  },
];

const ReadySection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const gold = "#E8C547";

  return (
    <section className="py-16 md:py-24 bg-[#5d222a] text-[#ebebeb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Text - Now golden */}
        <h2
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
          style={{ color: gold }}
        >
          Ready to Take Control
        </h2>
        <h3
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
          style={{ color: gold }}
        >
          of Your Time & Life?
        </h3>

        <div className="max-w-3xl mx-auto space-y-4 text-lg md:text-xl mb-16">
          <p>
            Stop starting over every week. Stop feeling overwhelmed by your own
            goals.
          </p>
          <p>
            Whether you need a powerful daily tool, private 1-on-1 coaching, or
            group support — these options are built to help you finally build
            discipline, stay consistent, and create real momentum.
          </p>
          <p className="italic text-[#ebebeb]/80">
            No more procrastination. No more excuses. Just progress.
          </p>
          <p className="mt-6 font-semibold text-[#ebebeb]">
            You deserve to feel in control every single day. Choose the path
            that gets you there.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-[#5d222a]/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[${gold}]/30 border-2 ${
                plan.popular
                  ? `border-[${gold}] scale-[1.03] shadow-2xl`
                  : `border-[${gold}]/40`
              } ${plan.closed ? "opacity-70" : ""}`}
            >
              {/* Most Popular badge - golden theme */}
              {plan.popular && index !== 2 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#E8C547] text-[#5d222a] font-bold rounded-full text-sm uppercase tracking-wider shadow-md">
                  Most Popular
                </div>
              )}

              <h4 className="font-serif text-2xl md:text-3xl font-bold mb-3 text-[#ebebeb]">
                {plan.title}
              </h4>
              <p className="text-base md:text-lg mb-6 text-[#ebebeb]/90">
                {plan.subtitle}
              </p>

              {plan.price !== "Currently Closed" && (
                <div className="text-4xl md:text-5xl font-bold mb-2 text-[#ebebeb]">
                  {plan.price}
                </div>
              )}
              <p className="text-sm md:text-base mb-6 text-[#ebebeb]/80">
                {plan.priceNote}
              </p>

              {plan.paymentInfo && (
                <p className="text-sm md:text-base italic mb-6 text-[#ebebeb]/80">
                  {plan.paymentInfo}
                </p>
              )}

              {/* Features */}
              {plan.features[0]?.group ? (
                <div
                  className={`space-y-6 transition-all duration-500 overflow-hidden ${
                    expandedIndex === index
                      ? "max-h-[2000px] opacity-100"
                      : "max-h-64 opacity-90"
                  }`}
                >
                  {plan.features.map((groupObj, gIndex) => (
                    <div key={gIndex}>
                      <h5 className="text-lg md:text-xl font-semibold text-[#ebebeb] mb-3 flex items-center gap-2">
                        <span className="text-2xl opacity-70">→</span>
                        {groupObj.group}
                      </h5>
                      <ul className="space-y-2 text-left text-sm md:text-base text-[#ebebeb]/90 pl-6">
                        {groupObj.items.map((item, iIndex) => (
                          <li key={iIndex} className="flex items-start gap-3">
                            <span className="text-[#ebebeb] text-xl mt-0.5">
                              •
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-3 text-left text-base mb-8">
                  {plan.features
                    .slice(
                      0,
                      expandedIndex === index ? plan.features.length : 5,
                    )
                    .map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <span className="text-[#ebebeb] text-xl mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                </ul>
              )}

              {/* Read More / Show Less */}
              {(plan.features[0]?.group
                ? plan.features.length > 2
                : plan.features.length > 5) && (
                <button
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                  className="mt-4 text-[#ebebeb] hover:text-[#ebebeb]/70 text-sm font-medium transition flex items-center gap-2 mx-auto"
                >
                  {expandedIndex === index ? (
                    <>
                      Show Less <span className="text-xl">↑</span>
                    </>
                  ) : (
                    <>
                      Read More <span className="text-xl">↓</span>
                    </>
                  )}
                </button>
              )}

              <p className="text-xs italic mb-6 mt-6 text-[#ebebeb]/70">
                Payment via Telebirr or Bank Transfer
              </p>

              {/* Golden CTA Button */}
              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-4 rounded-xl text-lg font-bold text-center transition ${
                  plan.closed
                    ? "bg-gray-700 opacity-60 cursor-not-allowed text-[#ebebeb]"
                    : `bg-[${gold}] text-[#5d222a] hover:bg-[#f0d04f] hover:shadow-lg hover:shadow-[${gold}]/40`
                }`}
                onClick={(e) => plan.closed && e.preventDefault()}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReadySection;
