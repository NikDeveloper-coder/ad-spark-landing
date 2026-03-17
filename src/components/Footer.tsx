import { MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-primary" />
          <span className="font-display font-bold text-foreground">SwiftWA</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2026 SwiftWA. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
