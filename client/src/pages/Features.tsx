import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Upload, BarChart3, PieChart, Bot, FileText, QrCode, CheckCircle2 } from "lucide-react";

export default function Features() {
  const features = [
    {
      id: "data-hub",
      title: "1. ESG Data Hub",
      icon: Upload,
      items: [
        "Manual data entry (energy, water, staff)",
        "File uploads (PDF/JPG/CSV)",
        "AI extraction from utility bills",
        "Real-time data validation"
      ]
    },
    {
      id: "metrics-engine",
      title: "2. ESG Metrics Engine",
      icon: BarChart3,
      items: [
        "Electricity → CO₂e conversion",
        "Water usage → environmental indicators",
        "Waste → emissions + cost tracking",
        "Social metrics (hiring, attrition, training hours)"
      ]
    },
    {
      id: "dashboards",
      title: "3. Dashboards & Scorecards",
      icon: PieChart,
      items: [
        "Interactive Energy & Water trends",
        "Waste & hygiene tracking",
        "Smart Alerts for anomalies",
        "Auto-generated ESG Scorecard"
      ]
    },
    {
      id: "ai-assistant",
      title: "4. AI ESG Assistant",
      icon: Bot,
      items: [
        "Guides users step-by-step",
        "Explains complex ESG metrics simply",
        "Suggests actionable improvements",
        "Helps fill missing data gaps"
      ]
    },
    {
      id: "reports",
      title: "5. ESG Report Generation",
      icon: FileText,
      items: [
        "Auto-generated PDF/Excel exports",
        "Professional charts, narratives, and KPIs",
        "Ready for investors & suppliers",
        "Compliance documentation"
      ]
    },
    {
      id: "badge",
      title: "6. Sustainability Badge",
      icon: QrCode,
      items: [
        "Public-facing digital badge",
        "Dynamic ESG highlights page",
        "Monthly automatic updates",
        "Customer trust-builder via QR code"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      
      <main className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Platform Features</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive suite of tools designed to make ESG measurement, reporting, and improvement effortless for SMEs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.id} className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-shadow hover:shadow-lg">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-2xl font-bold">{feature.title}</h3>
                <ul className="space-y-3">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-muted-foreground">
                      <CheckCircle2 className="mr-3 h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-24 rounded-3xl bg-secondary/50 p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Specialized for Food & Beverage</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Check out our industry-specific module designed for restaurants, cafés, and cloud kitchens.
            </p>
            <Button size="lg" asChild>
              <Link href="/fb-module">Explore F&B Module</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
