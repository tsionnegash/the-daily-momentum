import { Youtube, Linkedin } from "lucide-react";

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.505 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const stats = [
  {
    icon: <Youtube className="w-16 h-16 md:w-20 md:h-20 text-[#E8C547]" />,
    text: "68.5K Subscribers & Over 3.2 Million Views on YouTube",
  },
  {
    icon: <TelegramIcon className="w-16 h-16 md:w-20 md:h-20 text-[#E8C547]" />,
    text: "5,967 Members in My Private Telegram Community",
  },
  {
    icon: <Linkedin className="w-16 h-16 md:w-20 md:h-20 text-[#E8C547]" />,
    text: "3,420 Professional Connections on LinkedIn",
  },
  {
    icon: <TikTokIcon className="w-16 h-16 md:w-20 md:h-20 text-[#E8C547]" />,
    text: "97.3K Followers & Growing Fast on TikTok",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-[#5d222a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row justify-between items-start gap-8 min-w-max md:min-w-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center flex-1 min-w-[200px] max-w-[280px]"
            >
              <div className="text-[#E8C547] mb-6 opacity-90">{stat.icon}</div>
              <p className="font-serif text-sm md:text-base lg:text-lg text-[#E8C547] leading-relaxed italic">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
