import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const RapidAPICTA = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <Button asChild size="lg" className="gradient-primary text-lg px-8 py-6 font-display font-semibold glow-primary">
        <a href="https://rapidapi.com/nizamnik21/api/swiftwa1" target="_blank" rel="noopener noreferrer">
          🚀 Get SwiftWA on RapidAPI <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </Button>
      <p className="text-xs text-muted-foreground">Purchase securely on RapidAPI • Instant API keys</p>
    </div>
  );
};

export default RapidAPICTA;
