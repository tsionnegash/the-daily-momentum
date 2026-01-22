import { Link } from "react-router-dom";
import { Instagram, Youtube } from "lucide-react";
import dmLogo from "@/assets/dm-logo.png";

const Navbar = () => {
  return (
    <nav className="w-full py-6 px-6 md:px-12 lg:px-24 flex items-center justify-between bg-background">
      {/* Logo */}
      <Link
        to="/admin"
        className="w-12 h-12 rounded-full overflow-hidden bg-gold/20 hover:bg-gold/40 transition-colors cursor-pointer"
      >
        <img
          src={dmLogo}
          alt="Daily Momentum Logo"
          className="w-full h-full object-cover"
        />
      </Link>

      {/* Social Icons */}
      <div className="flex items-center gap-6">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/its_yidi/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:opacity-70 transition-opacity"
        >
          <Instagram size={24} />
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@itsmeyidi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:opacity-70 transition-opacity"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
          </svg>
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@itsyidi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:opacity-70 transition-opacity"
        >
          <Youtube size={24} />
        </a>

        {/* Telegram - NEW */}
        <a
          href="https://t.me/theDailyMomentum"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:opacity-70 transition-opacity"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.896 8.312l-2.5 11.75c-.184.82-.68 1.02-1.375.635l-3.8-2.8-1.83 1.765c-.202.2-.37.37-.76.37l.27-3.85 7-6.4c.305-.27-.033-.42-.42-.15l-8.65 5.45-3.72-1.16c-.81-.25-.81-1.02.17-1.51l14.5-5.6c.68-.3 1.27.17 1.05.95z" />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
