import { MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3">
              <MessageSquare className="w-5 h-5 text-primary" />
              <span className="font-display font-bold text-foreground">SwiftWA</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The #1 WhatsApp API for developers. Available on RapidAPI.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="/#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="/#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/whatsapp-api" className="hover:text-foreground transition-colors">WhatsApp API</Link></li>
              <li><Link to="/whatsapp-api-providers" className="hover:text-foreground transition-colors">Provider Comparison</Link></li>
              <li><Link to="/best-whatsapp-api" className="hover:text-foreground transition-colors">Best WhatsApp API</Link></li>
              <li><Link to="/whatsapp-api-vs-business-app" className="hover:text-foreground transition-colors">API vs Business App</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Blog</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/blog/whatsapp-api-guide" className="hover:text-foreground transition-colors">Developer Guide 2026</Link></li>
              <li><Link to="/blog/best-providers" className="hover:text-foreground transition-colors">Top 10 Providers</Link></li>
              <li><Link to="/blog/pricing-guide" className="hover:text-foreground transition-colors">Pricing Guide 2026</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 SwiftWA. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Purchase securely on <a href="https://rapidapi.com/nizamnik21/api/swiftwa1" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">RapidAPI</a> • Instant API keys
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
