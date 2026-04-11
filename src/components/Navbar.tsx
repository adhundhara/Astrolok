import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/astrolok-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="AstroLok" className="h-10 w-10" />
          <span className="font-display text-xl font-bold text-foreground">AstroLok</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a href="https://play.google.com/store/apps/details?id=com.astrolok.app" target="_blank" rel="noopener noreferrer" className="gradient-warm text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            Download App
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
            <a href="https://play.google.com/store/apps/details?id=com.astrolok.app" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="gradient-warm text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold text-center hover:opacity-90 transition-opacity">
              Download App
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
