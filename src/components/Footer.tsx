import { Link } from "react-router-dom";
import logo from "@/assets/astrolok-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={logo} alt="AstroLok" className="w-8 h-8 invert" />
              <span className="font-display text-lg font-bold">AstroLok</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed max-w-xs">
              Your trusted companion for personalized astrology insights, Kundali, and Rashifal.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="#features" className="text-background/60 hover:text-background text-sm transition-colors">Features</a>
              <a href="#pricing" className="text-background/60 hover:text-background text-sm transition-colors">Pricing</a>
              <a href="#faq" className="text-background/60 hover:text-background text-sm transition-colors">FAQ</a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Legal</h4>
            <div className="flex flex-col gap-2">
              <Link to="/privacy-policy" className="text-background/60 hover:text-background text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-background/60 hover:text-background text-sm transition-colors">Terms & Conditions</Link>
              <Link to="/contact" className="text-background/60 hover:text-background text-sm transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-6 text-center">
          <p className="text-background/40 text-xs">
            © {new Date().getFullYear()} AstroLok by Random Hit LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
