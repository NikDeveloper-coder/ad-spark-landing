import { motion } from "framer-motion";
import { Check, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "Free",
    period: "",
    highlight: false,
    requests: "100 / day",
    bandwidth: "10,240 / month",
    bandwidthExtra: "then $0.001 each",
    features: { bulk: false, group: false, webhook: false },
  },
  {
    name: "Pro",
    price: "$5",
    period: "/month",
    highlight: false,
    requests: "1,000 / day",
    bandwidth: "10,240 / month",
    bandwidthExtra: "then $0.001 each",
    features: { bulk: false, group: true, webhook: false },
  },
  {
    name: "Ultra",
    price: "$15",
    period: "/month",
    highlight: true,
    requests: "2,500 / day",
    bandwidth: "10,240 / month",
    bandwidthExtra: "then $0.001 each",
    features: { bulk: true, group: true, webhook: false },
  },
  {
    name: "Mega",
    price: "$30",
    period: "/month",
    highlight: false,
    requests: "5,000 / day",
    bandwidth: "10,240 / month",
    bandwidthExtra: "then $0.001 each",
    features: { bulk: true, group: true, webhook: true },
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Start free and upgrade as your business grows. No hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 flex flex-col ${
                plan.highlight
                  ? "gradient-card glow-border glow-primary"
                  : "gradient-card border border-border"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary px-4 py-1 rounded-full text-xs font-semibold text-primary-foreground font-display">
                  <Zap className="w-3 h-3 inline mr-1" />
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6 pt-2">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-end justify-center gap-1">
                  <span className="font-display text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground text-sm mb-1">{plan.period}</span>}
                </div>
              </div>

              <div className="space-y-4 flex-1">
                <div className="rounded-lg bg-secondary/50 p-4">
                  <div className="text-sm text-muted-foreground mb-1">API Requests</div>
                  <div className="font-display font-semibold text-foreground">{plan.requests}</div>
                </div>

                <div className="rounded-lg bg-secondary/50 p-4">
                  <div className="text-sm text-muted-foreground mb-1">Bandwidth (1MB units)</div>
                  <div className="font-display font-semibold text-foreground">{plan.bandwidth}</div>
                  <div className="text-xs text-muted-foreground mt-1">{plan.bandwidthExtra}</div>
                </div>

                <div className="space-y-3 pt-2">
                  {Object.entries(plan.features).map(([key, enabled]) => (
                    <div key={key} className="flex items-center gap-3">
                      {enabled ? (
                        <Check className="w-4 h-4 text-primary shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground/40 shrink-0" />
                      )}
                      <span className={`text-sm capitalize ${enabled ? "text-foreground" : "text-muted-foreground/50"}`}>
                        {key === "bulk" ? "Bulk Message" : key === "group" ? "Group Message" : "Webhook"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                asChild
                className={`w-full font-display font-semibold mt-6 ${
                  plan.highlight
                    ? "gradient-primary glow-primary"
                    : "bg-secondary hover:bg-secondary/80 text-foreground"
                }`}
                size="lg"
              >
                <a href="https://rapidapi.com/nizamnik21/api/swiftwa1" target="_blank" rel="noopener noreferrer">
                  🚀 {plan.price === "Free" ? "Start Free" : "Get on RapidAPI"}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
