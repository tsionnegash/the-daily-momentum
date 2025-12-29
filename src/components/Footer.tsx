import { Instagram, Youtube, Heart, Linkedin } from "lucide-react"; // Added Linkedin
import dmLogo from "@/assets/dm-logo.png";

const Footer = () => {
  return (
    <footer className="section-padding bg-secondary">
      <div className="container-wide">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src={dmLogo}
                alt="Daily Momentum Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-serif text-3xl font-bold tracking-tight text-gold">
              DM
            </span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 mb-8">
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

          {/* Added LinkedIn */}
          <a
            href="https://www.linkedin.com/in/yididyafantahun/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:opacity-70 transition-opacity"
          >
            <Linkedin size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © 2025 The Daily Momentum | Built with{" "}
            <Heart size={14} className="text-red-500 fill-red-500" /> for
            Growth, Awareness & Conscious Living
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
