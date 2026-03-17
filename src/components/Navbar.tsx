import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex items-center justify-between h-16 px-6">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-6 h-6 text-primary" />
          <span className="font-display text-xl font-bold text-foreground">SwiftWA</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
        </div>
        <a href="https://rapidapi.com/nizamnik21/api/swiftwa1" target="_blank" rel="noopener noreferrer">
          <Button className="gradient-primary font-display font-semibold text-sm">
            Get API Key
          </Button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
