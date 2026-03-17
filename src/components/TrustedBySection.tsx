import { motion } from "framer-motion";
import { Star } from "lucide-react";

const logos = ["TechCorp", "ShopFlow", "DevStack", "CloudBase", "MsgHub"];

const TrustedBySection = () => {
  return (
    <section className="py-12 border-b border-border/50">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-semibold text-primary">4.8/5 on RapidAPI</span>
            <Star className="w-4 h-4 text-primary fill-primary" />
          </div>
          <p className="text-sm text-muted-foreground uppercase tracking-widest font-display">Trusted by 500+ developers worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {logos.map((name) => (
              <div
                key={name}
                className="text-muted-foreground/40 font-display text-xl font-bold tracking-wider hover:text-muted-foreground/70 transition-colors"
              >
                {name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;
