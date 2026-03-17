import { motion } from "framer-motion";
import { Send, Users, Webhook, Bot, Globe, Lock } from "lucide-react";

const features = [
  { icon: Send, title: "Bulk Messaging", desc: "Send thousands of messages at once with smart queuing and rate limiting." },
  { icon: Users, title: "Group Management", desc: "Create, manage, and broadcast to WhatsApp groups programmatically." },
  { icon: Webhook, title: "Webhooks", desc: "Get real-time notifications for incoming messages and status updates." },
  { icon: Bot, title: "Chatbot Ready", desc: "Build intelligent chatbots with our easy-to-use message handling API." },
  { icon: Globe, title: "Multi-Device", desc: "Connect multiple WhatsApp sessions and manage them from one dashboard." },
  { icon: Lock, title: "Enterprise Security", desc: "End-to-end encryption, API key management, and IP whitelisting." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A complete WhatsApp API solution built for scale and reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="gradient-card rounded-xl p-6 border border-border hover:glow-border transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
