import { motion } from "framer-motion";
import { Lock, ShieldCheck, Server } from "lucide-react";

const badges = [
  { icon: Lock, label: "End-to-End Encryption" },
  { icon: ShieldCheck, label: "GDPR Compliant" },
  { icon: Server, label: "99.9% Uptime SLA" },
];

const SecurityBadges = () => {
  return (
    <section className="py-16 border-y border-border/50">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-widest font-display">
            Security & Compliance
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {badges.map((b) => (
              <div key={b.label} className="flex items-center gap-3 rounded-xl border border-border bg-secondary/30 px-5 py-3">
                <b.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-display font-semibold text-foreground">{b.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityBadges;
