import PageLayout from "@/components/PageLayout";
import RapidAPICTA from "@/components/RapidAPICTA";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Check, X } from "lucide-react";

const comparisons = [
  { feature: "Automated Messaging", api: true, app: false },
  { feature: "Bulk Messaging", api: true, app: false },
  { feature: "CRM Integration", api: true, app: false },
  { feature: "Chatbot Support", api: true, app: false },
  { feature: "Multi-Agent Access", api: true, app: false },
  { feature: "Free to Start", api: true, app: true },
  { feature: "No Coding Required", api: false, app: true },
  { feature: "Quick Replies", api: true, app: true },
  { feature: "Product Catalog", api: true, app: true },
  { feature: "Analytics & Reporting", api: true, app: false },
];

const WhatsAppAPIVsBusinessApp = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>WhatsApp API vs Business App: Which is Right for You? | SwiftWA</title>
        <meta name="description" content="Compare WhatsApp API and WhatsApp Business App. Learn when to use each, key differences, and why developers prefer the API for automation and scale." />
        <link rel="canonical" href="https://swiftwa.lovable.app/whatsapp-api-vs-business-app" />
      </Helmet>
      <article className="container px-6 py-20 max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-6xl font-bold gradient-hero-text mb-8">WhatsApp API vs. Business App</h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <p className="text-lg text-foreground">WhatsApp offers two business solutions: the free Business App and the Business API. Understanding the difference is crucial for choosing the right tool for your needs.</p>

          <h2 className="font-display text-2xl font-bold text-foreground">Feature Comparison</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-display font-semibold text-foreground">Feature</th>
                  <th className="text-center py-3 px-4 font-display font-semibold text-primary">WhatsApp API</th>
                  <th className="text-center py-3 px-4 font-display font-semibold text-foreground">Business App</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((c) => (
                  <tr key={c.feature} className="border-b border-border/50">
                    <td className="py-3 px-4 text-foreground">{c.feature}</td>
                    <td className="py-3 px-4 text-center">
                      {c.api ? <Check className="w-4 h-4 text-primary mx-auto" /> : <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {c.app ? <Check className="w-4 h-4 text-primary mx-auto" /> : <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-display text-2xl font-bold text-foreground">When to Use the Business App</h2>
          <p>The WhatsApp Business App is ideal for solo entrepreneurs and very small businesses who handle fewer than 50 conversations per day and don't need automation or integrations.</p>

          <h2 className="font-display text-2xl font-bold text-foreground mt-8">When to Use the API</h2>
          <p>The WhatsApp API (like SwiftWA) is essential when you need automated messaging, chatbot integration, CRM connectivity, multi-agent support, or sending messages at scale. It's the choice for developers and growing businesses.</p>

          <h2 className="font-display text-2xl font-bold text-foreground mt-8">Getting Started with the API</h2>
          <p>With SwiftWA on RapidAPI, you can get an API key instantly—no Meta business verification required to start testing. Begin with the free plan and scale as your needs grow.</p>
        </div>

        <div className="mt-12">
          <RapidAPICTA />
        </div>

        <div className="mt-12 space-y-2">
          <h3 className="font-display text-lg font-bold text-foreground">Related Pages</h3>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li><Link to="/whatsapp-api" className="text-primary hover:underline">What is WhatsApp API?</Link></li>
            <li><Link to="/whatsapp-api-pricing" className="text-primary hover:underline">WhatsApp API Pricing</Link></li>
            <li><Link to="/best-whatsapp-api" className="text-primary hover:underline">Best WhatsApp API Providers</Link></li>
          </ul>
        </div>
      </article>
    </PageLayout>
  );
};

export default WhatsAppAPIVsBusinessApp;
