import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/DashboardPage";
import NotFound from "./pages/NotFound";
import RussianWarshipPage from "./pages/RussianWarshipPage";
import { SupportedLocale } from "@/lib/translations";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <LanguageProvider initialLocale="ua">
                <Index />
              </LanguageProvider>
            } />
            <Route path="/ua" element={
              <LanguageProvider initialLocale="ua">
                <Index />
              </LanguageProvider>
            } />
            <Route path="/no" element={
              <LanguageProvider initialLocale="no">
                <Index />
              </LanguageProvider>
            } />
            <Route path="/eu" element={
              <LanguageProvider initialLocale="eu">
                <Index />
              </LanguageProvider>
            } />
            <Route path="/auth" element={
              <LanguageProvider initialLocale="ua">
                <AuthPage />
              </LanguageProvider>
            } />
            <Route path="/dashboard" element={
              <LanguageProvider initialLocale="ua">
                <DashboardPage />
              </LanguageProvider>
            } />
            <Route path="/ru" element={<RussianWarshipPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
