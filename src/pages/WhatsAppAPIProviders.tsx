import PageLayout from "@/components/PageLayout";
import RapidAPICTA from "@/components/RapidAPICTA";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Check, X } from "lucide-react";

const providers = [
  { name: "SwiftWA", price: "Free – $30/mo", speed: "<200ms", uptime: "99.9%", freePlan: true, rating: "4.8/5", highlight: true },
  { name: "Twilio", price: "Pay-per-message", speed: "~500ms", uptime: "99.95%", freePlan: false, rating: "4.2/5", highlight: false },
  { name: "Wati", price: "$49+/mo", speed: "~400ms", uptime: "99.5%", freePlan: false, rating: "4.0/5", highlight: false },
  { name: "Infobip", price: "Custom pricing", speed: "~350ms", uptime: "99.9%", freePlan: false, rating: "4.1/5", highlight: false },
  { name: "MessageBird", price: "Pay-per-message", speed: "~450ms", uptime: "99.5%", freePlan: false, rating: "3.9/5", highlight: false },
];

const WhatsAppAPIProviders = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Top WhatsApp API Providers Compared (2026) | SwiftWA</title>
        <meta name="description" content="Compare the best WhatsApp API providers including SwiftWA, Twilio, Wati, and Infobip. Find the right provider for your budget and use case." />
        <link rel="canonical" href="https://swiftwa.lovable.app/whatsapp-api-providers" />
      </Helmet>
      <article className="container px-6 py-20 max-w-5xl mx-auto">
        <h1 className="font-display text-4xl md:text-6xl font-bold gradient-hero-text mb-4">WhatsApp API Providers Compared</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">A side-by-side comparison of the top WhatsApp API providers in 2026 to help you choose the best solution for your project.</p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-display font-semibold text-foreground">Provider</th>
                <th className="text-left py-4 px-4 font-display font-semibold text-foreground">Pricing</th>
                <th className="text-left py-4 px-4 font-display font-semibold text-foreground">Speed</th>
                <th className="text-left py-4 px-4 font-display font-semibold text-foreground">Uptime</th>
                <th className="text-left py-4 px-4 font-display font-semibold text-foreground">Free Plan</th>
                <th className="text-left py-4 px-4 font-display font-semibold text-foreground">Rating</th>
              </tr>
            </thead>
            <tbody>
              {providers.map((p) => (
                <tr key={p.name} className={`border-b border-border/50 ${p.highlight ? "bg-primary/5" : ""}`}>
                  <td className="py-4 px-4 font-display font-semibold text-foreground">
                    {p.highlight && <span className="text-primary">★ </span>}{p.name}
                  </td>
                  <td className="py-4 px-4 text-muted-foreground">{p.price}</td>
                  <td className="py-4 px-4 text-muted-foreground">{p.speed}</td>
                  <td className="py-4 px-4 text-muted-foreground">{p.uptime}</td>
                  <td className="py-4 px-4">
                    {p.freePlan ? <Check className="w-4 h-4 text-primary" /> : <X className="w-4 h-4 text-muted-foreground/40" />}
                  </td>
                  <td className="py-4 px-4 text-muted-foreground">{p.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <h2 className="font-display text-2xl font-bold text-foreground">Why SwiftWA Stands Out</h2>
          <p>Unlike traditional providers that require complex onboarding and enterprise contracts, SwiftWA is available instantly on RapidAPI. You get an API key in seconds, a generous free tier, and the fastest response times in the industry.</p>

          <h2 className="font-display text-2xl font-bold text-foreground mt-8">How to Choose a WhatsApp API Provider</h2>
          <p>Consider these factors: pricing model (per-message vs. subscription), response speed, uptime guarantees, free tier availability, and ease of integration. SwiftWA excels across all these dimensions.</p>
        </div>

        <div className="mt-12">
          <RapidAPICTA />
        </div>

        <div className="mt-12 space-y-2">
          <h3 className="font-display text-lg font-bold text-foreground">Related Pages</h3>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li><Link to="/whatsapp-api" className="text-primary hover:underline">What is WhatsApp API?</Link></li>
            <li><Link to="/best-whatsapp-api" className="text-primary hover:underline">Best WhatsApp API in 2026</Link></li>
            <li><Link to="/whatsapp-api-pricing" className="text-primary hover:underline">WhatsApp API Pricing</Link></li>
          </ul>
        </div>
      </article>
    </PageLayout>
  );
};

export default WhatsAppAPIProviders;
