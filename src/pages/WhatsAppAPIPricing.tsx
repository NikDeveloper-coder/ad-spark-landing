import PageLayout from "@/components/PageLayout";
import RapidAPICTA from "@/components/RapidAPICTA";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const WhatsAppAPIPricing = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>WhatsApp API Pricing 2026: Complete Cost Breakdown | SwiftWA</title>
        <meta name="description" content="Understand WhatsApp API pricing in 2026. Compare conversation fees, provider costs, and SwiftWA's plans starting at $0/month on RapidAPI." />
        <link rel="canonical" href="https://swiftwa.lovable.app/whatsapp-api-pricing" />
      </Helmet>
      <article className="container px-6 py-20 max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-6xl font-bold gradient-hero-text mb-8">WhatsApp API Pricing in 2026</h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <p className="text-lg text-foreground">Understanding WhatsApp API pricing can be confusing. This guide breaks down Meta's conversation-based pricing model and how SwiftWA's plans compare to other providers.</p>

          <h2 className="font-display text-2xl font-bold text-foreground">Meta's Conversation-Based Pricing</h2>
          <p>Meta charges per 24-hour conversation window. Costs vary by conversation type (marketing, utility, service, authentication) and country. Business-initiated conversations cost more than user-initiated ones.</p>

          <h2 className="font-display text-2xl font-bold text-foreground mt-8">SwiftWA Plans on RapidAPI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            {[
              { plan: "Basic (Free)", requests: "100/day", cost: "$0/month" },
              { plan: "Pro", requests: "1,000/day", cost: "$5/month" },
              { plan: "Ultra", requests: "2,500/day", cost: "$15/month" },
              { plan: "Mega", requests: "5,000/day", cost: "$30/month" },
            ].map((p) => (
              <div key={p.plan} className="gradient-card border border-border rounded-xl p-6">
                <h3 className="font-display font-bold text-foreground text-lg">{p.plan}</h3>
                <p className="text-primary font-display font-bold text-2xl mt-2">{p.cost}</p>
                <p className="text-sm mt-1">{p.requests} API requests</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold text-foreground mt-8">SwiftWA vs. Other Providers</h2>
          <p>Most providers charge per message ($0.005–$0.05 each) or require enterprise contracts starting at $49+/month. SwiftWA offers a subscription model through RapidAPI with a generous free tier—no per-message fees within your plan limits.</p>

          <h2 className="font-display text-2xl font-bold text-foreground mt-8">Which Plan is Right for You?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-foreground">Basic (Free):</strong> Perfect for testing and prototyping</li>
            <li><strong className="text-foreground">Pro ($5/mo):</strong> Small businesses and side projects</li>
            <li><strong className="text-foreground">Ultra ($15/mo):</strong> Growing businesses with daily messaging needs</li>
            <li><strong className="text-foreground">Mega ($30/mo):</strong> High-volume operations and enterprises</li>
          </ul>
        </div>

        <div className="mt-12">
          <RapidAPICTA />
        </div>

        <div className="mt-12 space-y-2">
          <h3 className="font-display text-lg font-bold text-foreground">Related Pages</h3>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li><Link to="/whatsapp-api" className="text-primary hover:underline">What is WhatsApp API?</Link></li>
            <li><Link to="/whatsapp-api-providers" className="text-primary hover:underline">Compare Providers</Link></li>
            <li><Link to="/blog/pricing-guide" className="text-primary hover:underline">Pricing Deep Dive (Blog)</Link></li>
          </ul>
        </div>
      </article>
    </PageLayout>
  );
};

export default WhatsAppAPIPricing;
