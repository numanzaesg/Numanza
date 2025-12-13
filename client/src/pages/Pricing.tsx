import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

export default function Pricing() {
  const tiers = [
    {
      name: "Basic",
      price: "59",
      description: "Essential ESG tracking for small businesses.",
      features: [
        "ESG Logs (Energy, Water, Waste)",
        "Basic Scorecard",
        "Standard PDF Reports",
        "Email Support"
      ],
      cta: "Get Started",
      featured: false
    },
    {
      name: "Pro",
      price: "109",
      description: "Advanced tools with AI for growing businesses.",
      features: [
        "Everything in Basic",
        "AI ESG Assistant",
        "Full F&B Module Access",
        "Advanced Analytics",
        "Priority Support"
      ],
      cta: "Try Pro",
      featured: true
    },
    {
      name: "Plus",
      price: "209",
      description: "Complete solution for multi-site operations.",
      features: [
        "Everything in Pro",
        "Multi-site Management",
        "Team Access & Roles",
        "Custom Integrations",
        "Dedicated Account Manager"
      ],
      cta: "Contact Sales",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      
      <main className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your business stage. All plans include core ESG metrics.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {tiers.map((tier) => (
              <div 
                key={tier.name} 
                className={cn(
                  "relative flex flex-col rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-lg",
                  tier.featured ? "border-primary ring-1 ring-primary shadow-md scale-105 z-10" : "border-border"
                )}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold">{tier.name}</h3>
                  <p className="text-muted-foreground mt-2 text-sm">{tier.description}</p>
                </div>

                <div className="mb-8">
                  <span className="text-4xl font-bold">£{tier.price}</span>
                  <span className="text-muted-foreground">/year</span>
                </div>

                <ul className="mb-8 flex-1 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm">
                      <Check className="mr-3 h-5 w-5 text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full" 
                  variant={tier.featured ? "default" : "outline"}
                  size="lg"
                  asChild
                >
                  <Link href="/contact">{tier.cta}</Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <h2 className="text-2xl font-bold mb-4">Enterprise Customization?</h2>
            <p className="text-muted-foreground mb-6">
              Need a tailored solution for a large franchise or unique requirements?
            </p>
            <Button variant="link" asChild>
              <Link href="/contact">Contact our sales team &rarr;</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
