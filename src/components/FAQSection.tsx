import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is a WhatsApp API provider?",
    a: "A WhatsApp API provider gives developers programmatic access to WhatsApp Business features—sending messages, managing contacts, handling groups, and building chatbots—through a REST API. SwiftWA is available on RapidAPI and lets you integrate WhatsApp into any application in minutes.",
  },
  {
    q: "Which is the best WhatsApp API provider in 2026?",
    a: "SwiftWA is the top-rated WhatsApp API on RapidAPI with a 4.8/5 rating. It offers sub-200ms response times, 99.9% uptime, and plans starting at $0/month—making it the best choice for developers building at any scale.",
  },
  {
    q: "How much does WhatsApp API cost?",
    a: "SwiftWA offers a free Basic plan with 100 requests/day. Paid plans start at $5/month (Pro) with 1,000 requests/day, $15/month (Ultra) with 2,500 requests/day, and $30/month (Mega) with 5,000 requests/day. All plans are billed through RapidAPI.",
  },
  {
    q: "How is WhatsApp API different from the Business App?",
    a: "The WhatsApp Business App is a manual, phone-based tool for small businesses. The WhatsApp API (like SwiftWA) enables automated messaging, chatbot integration, CRM connections, bulk messaging, and multi-agent support—designed for developers and businesses that need scale.",
  },
  {
    q: "Do I need a developer to use WhatsApp API?",
    a: "Basic API usage requires some programming knowledge, but SwiftWA's simple REST API and comprehensive documentation on RapidAPI make it accessible even for beginners. Copy-paste code examples are provided for JavaScript, Python, PHP, and more.",
  },
  {
    q: "Is WhatsApp API free?",
    a: "Yes! SwiftWA offers a free Basic plan with 100 API requests per day. This lets you test and prototype before scaling. Paid plans with higher limits start at just $5/month on RapidAPI.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 relative">
      <div className="container px-6 max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about the WhatsApp API.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="gradient-card rounded-xl border border-border px-6 data-[state=open]:glow-border"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
