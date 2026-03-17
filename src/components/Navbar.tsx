import { MessageSquare, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "WhatsApp API", to: "/whatsapp-api" },
  { label: "Providers", to: "/whatsapp-api-providers" },
  { label: "Best API", to: "/best-whatsapp-api" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex items-center justify-between h-16 px-6">
        <Link to="/" className="flex items-center gap-2">
          <MessageSquare className="w-6 h-6 text-primary" />
          <span className="font-display text-xl font-bold text-foreground">SwiftWA</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          {navLinks.map((link) =>
            link.to ? (
              <Link key={link.label} to={link.to} className="hover:text-foreground transition-colors">
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className="hover:text-foreground transition-colors">
                {link.label}
              </a>
            )
          )}
        </div>

        <div className="flex items-center gap-3">
          <Button asChild className="gradient-primary font-display font-semibold text-sm hidden sm:inline-flex">
            <a href="https://rapidapi.com/nizamnik21/api/swiftwa1" target="_blank" rel="noopener noreferrer">
              🚀 Get SwiftWA on RapidAPI
            </a>
          </Button>
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl px-6 py-4 space-y-3">
          {navLinks.map((link) =>
            link.to ? (
              <Link key={link.label} to={link.to} className="block text-sm text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className="block text-sm text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            )
          )}
          <Button asChild className="gradient-primary font-display font-semibold text-sm w-full mt-2">
            <a href="https://rapidapi.com/nizamnik21/api/swiftwa1" target="_blank" rel="noopener noreferrer">
              🚀 Get SwiftWA on RapidAPI
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
