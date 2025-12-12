import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/ui/Hero";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, BarChart3, FileText, ShieldCheck, Upload, LineChart, Bot } from "lucide-react";
import dashboardImg from "@assets/generated_images/modern_esg_dashboard_ui_showing_energy_metrics.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      
      <main>
        <Hero />

        {/* Value Proposition Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Core Value Proposition</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We help you measure what matters, so you can manage your business better.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <LineChart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Turn ESG Into Profit</h3>
                <p className="text-muted-foreground">Reduce waste, improve staff retention, and optimise operations with data-driven insights.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fast Access to Capital</h3>
                <p className="text-muted-foreground">Generate investor-grade ESG reports and supplier scorecards to secure funding and partnerships.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Compliance Made Simple</h3>
                <p className="text-muted-foreground">Automated ESG metrics and regulatory-ready documentation, so you're always prepared.</p>
              </div>
            </div>
          </div>
        </section>

        {/* MVP Features Preview */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  Everything you need to master your ESG metrics
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  From automated data entry to AI-powered insights, our platform simplifies every step of the ESG journey.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <FeatureCard 
                    title="ESG Data Hub" 
                    description="Manual entry, file uploads, and AI extraction from utility bills."
                    icon={Upload}
                    className="bg-card shadow-sm"
                  />
                  <FeatureCard 
                    title="Metrics Engine" 
                    description="Convert usage to CO2e, track water, waste, and social metrics."
                    icon={BarChart3}
                    className="bg-card shadow-sm"
                  />
                  <FeatureCard 
                    title="AI Assistant" 
                    description="Get step-by-step guidance and improvement suggestions."
                    icon={Bot}
                    className="bg-card shadow-sm"
                  />
                  <FeatureCard 
                    title="Reporting" 
                    description="Auto-generate PDF/Excel reports ready for investors."
                    icon={FileText}
                    className="bg-card shadow-sm"
                  />
                </div>

                <Button size="lg" asChild>
                  <Link href="/features" className="group">
                    Explore All Features <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-2xl opacity-50" />
                <img 
                  src={dashboardImg} 
                  alt="ESG Dashboard" 
                  className="relative rounded-xl border shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to turn sustainability into a competitive advantage?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join the Early Access Program and get your ESG score in 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-primary font-bold h-14 px-8 text-lg" asChild>
                <Link href="/contact">Get Early Access</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
