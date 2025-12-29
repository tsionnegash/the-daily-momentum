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
      {
        text: "Lifetime tool",
        highlight: " to stay disciplined and productive forever",
      },
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
    title: "Membership Coaching Program",
    subtitle: "Small-group support to build consistency together.",
    price: "Currently Closed",
    priceNote: "",
    features: [
      "2 sessions/week — 1 hour each",
      "1-month duration (renewable if needed)",
      "Group guidance & discussions",
      "Private chat group with direct access to me",
      "Weekly challenges & follow-ups",
      "Confidence boost through community",
    ],
    cta: "JOIN WAITLIST",
    popular: false,
    link: "https://forms.gle/LGk3igiUdFbAS4Nc8",
    closed: true,
  },
];

const ReadySection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#6b112e] text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
          Ready to Take Control
        </h2>
        <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
          of Your Time & Life?
        </h3>

        <div className="max-w-3xl mx-auto space-y-4 text-lg md:text-xl mb-12">
          <p>
            Stop starting over every week. Stop feeling overwhelmed by your own
            goals.
          </p>

          <p>
            Whether you need a powerful daily tool, private 1-on-1 coaching, or
            group support — these options are built to help you finally build
            discipline, stay consistent, and create real momentum.
          </p>

          <p className="italic">
            No more procrastination. No more excuses. Just progress.
          </p>

          <p className="mt-6 font-semibold text-amber-400">
            You deserve to feel in control every single day. Choose the path
            that gets you there.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2 ${
                plan.popular ? "border-amber-400 scale-105" : "border-white/20"
              } ${plan.closed ? "opacity-70" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-amber-500 text-[#6b112e] font-bold rounded-full text-sm uppercase">
                  Most Popular
                </div>
              )}

              <h4 className="font-serif text-2xl md:text-3xl font-bold mb-3">
                {plan.title}
              </h4>

              <p className="text-base md:text-lg mb-6 opacity-90">
                {plan.subtitle}
              </p>

              <div className="text-4xl md:text-5xl font-bold mb-2 text-amber-400">
                {plan.price}
              </div>
              <p className="text-sm md:text-base opacity-80 mb-6">
                {plan.priceNote}
              </p>

              {plan.paymentInfo && (
                <p className="text-sm md:text-base italic mb-6 text-amber-300">
                  {plan.paymentInfo}
                </p>
              )}

              <ul className="space-y-3 text-left text-base mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <span className="text-amber-400 text-xl mt-0.5">✅</span>
                    {typeof feature === "string" ? (
                      <span>{feature}</span>
                    ) : (
                      <span>
                        <strong>{feature.text}</strong>
                        {feature.highlight}
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              <p className="text-xs opacity-70 italic mb-6">
                Payment via Telebirr or Bank Transfer
              </p>

              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block w-full py-4 rounded-xl text-lg font-bold transition ${
                  plan.closed
                    ? "bg-gray-600 cursor-not-allowed opacity-60"
                    : "bg-amber-500 text-[#6b112e] hover:bg-amber-400 shadow-lg hover:shadow-amber-400/50"
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
