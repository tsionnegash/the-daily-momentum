import { Instagram, Youtube, Linkedin } from "lucide-react"; // Added Linkedin
import dmLogo from "@/assets/dm-logo.png";

const Navbar = () => {
  return (
    <nav className="w-full py-6 px-6 md:px-12 lg:px-24 flex items-center justify-between bg-background">
      {/* Logo - DM with circular image and hover effect */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gold/20 hover:bg-gold/40 transition-colors cursor-pointer">
          <img
            src={dmLogo}
            alt="Daily Momentum Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="font-serif text-2xl font-bold tracking-tight text-gold">
          DM
        </span>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-6">
        <a
          href="https://instagram.com/itsmeyidi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:opacity-70 transition-opacity"
        >
          <Instagram size={24} />
        </a>
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
        <a
          href="https://www.youtube.com/@itsyidi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:opacity-70 transition-opacity"
        >
          <Youtube size={24} />
        </a>
        {/* NEW: LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/yididyafantahun/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:opacity-70 transition-opacity"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
