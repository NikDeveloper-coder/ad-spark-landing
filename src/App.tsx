import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import WhatsAppAPI from "./pages/WhatsAppAPI.tsx";
import WhatsAppAPIProviders from "./pages/WhatsAppAPIProviders.tsx";
import WhatsAppAPIPricing from "./pages/WhatsAppAPIPricing.tsx";
import BestWhatsAppAPI from "./pages/BestWhatsAppAPI.tsx";
import WhatsAppAPIVsBusinessApp from "./pages/WhatsAppAPIVsBusinessApp.tsx";
import BlogWhatsAppAPIGuide from "./pages/BlogWhatsAppAPIGuide.tsx";
import BlogBestProviders from "./pages/BlogBestProviders.tsx";
import BlogPricingGuide from "./pages/BlogPricingGuide.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/whatsapp-api" element={<WhatsAppAPI />} />
            <Route path="/whatsapp-api-providers" element={<WhatsAppAPIProviders />} />
            <Route path="/whatsapp-api-pricing" element={<WhatsAppAPIPricing />} />
            <Route path="/best-whatsapp-api" element={<BestWhatsAppAPI />} />
            <Route path="/whatsapp-api-vs-business-app" element={<WhatsAppAPIVsBusinessApp />} />
            <Route path="/blog/whatsapp-api-guide" element={<BlogWhatsAppAPIGuide />} />
            <Route path="/blog/best-providers" element={<BlogBestProviders />} />
            <Route path="/blog/pricing-guide" element={<BlogPricingGuide />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
