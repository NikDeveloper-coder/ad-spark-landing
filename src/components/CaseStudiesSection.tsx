import { motion } from "framer-motion";
import { TrendingUp, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const cases = [
  {
    icon: TrendingUp,
    metric: "+35%",
    title: "How an E-commerce Store Increased Sales by 35%",
    desc: "By automating order confirmations and abandoned cart reminders via SwiftWA's bulk messaging API, an online retailer saw a 35% lift in monthly revenue within 60 days.",
    tags: ["E-commerce", "Bulk Messaging", "Automation"],
  },
  {
    icon: Clock,
    metric: "-80%",
    title: "How a Support Team Reduced Response Time by 80%",
    desc: "A SaaS company integrated SwiftWA's chatbot API to handle tier-1 support queries automatically, reducing average response time from 15 minutes to under 3 minutes.",
    tags: ["Customer Support", "Chatbot", "SaaS"],
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Real Results from Real Businesses
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            See how developers and businesses are scaling with SwiftWA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="gradient-card rounded-2xl border border-border p-8 hover:glow-border transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <c.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <span className="font-display text-4xl font-bold text-primary">{c.metric}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{c.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{c.desc}</p>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild variant="outline" className="font-display border-primary/30 text-foreground hover:bg-primary/10">
            <a href="https://rapidapi.com/nizamnik21/api/swiftwa1" target="_blank" rel="noopener noreferrer">
              Start Your Success Story <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
