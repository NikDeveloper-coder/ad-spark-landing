import { motion } from "framer-motion";
import { MessageSquare, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      
      {/* Glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="container relative z-10 px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-8">
            <Zap className="w-4 h-4" />
            Powerful WhatsApp API for Developers
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight gradient-hero-text leading-tight mb-6">
            SwiftWA
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Send messages, manage groups, and automate your WhatsApp workflows with our blazing-fast API.
          </p>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Trusted by developers worldwide. Start free, scale as you grow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://rapidapi.com/nizamnik21/api/swiftwa1" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gradient-primary text-lg px-8 py-6 font-display font-semibold glow-primary">
                Get Started Free
              </Button>
            </a>
            <a href="#pricing">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 font-display border-primary/30 text-foreground hover:bg-primary/10">
                View Pricing
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { icon: MessageSquare, label: "Messages Sent", value: "10M+" },
            { icon: Zap, label: "Avg Response", value: "<200ms" },
            { icon: Shield, label: "Uptime", value: "99.9%" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <stat.icon className="w-6 h-6 text-primary" />
              <span className="text-3xl font-display font-bold text-foreground">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
