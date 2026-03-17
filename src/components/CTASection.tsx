import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import RapidAPICTA from "@/components/RapidAPICTA";

const CTASection = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-card glow-border rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/15 blur-[100px] rounded-full" />
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-8">
              Join 500+ developers building with SwiftWA. Start with our free plan today.
            </p>
            <RapidAPICTA />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
