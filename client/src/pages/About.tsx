import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import aboutHero from "@assets/generated_images/modern_office_interior_abstract_blur.png";
import { Target, Lightbulb, TrendingUp, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 md:py-32 bg-secondary/20">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border bg-background/50 backdrop-blur-sm px-3 py-1 text-sm font-medium text-primary mb-6">
                About Numanza
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                Making sustainability <span className="text-primary">profitable</span> for every business.
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                We are building the financial operating system for the green transition, starting with the industries that need it most.
              </p>
            </div>
          </div>
          
          {/* Abstract Background Element */}
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-30 md:opacity-100">
             <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/20 to-background" />
             <img src={aboutHero} alt="Office Abstract" className="h-full w-full object-cover" />
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">The Problem</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Small and Medium Enterprises (SMEs) are the backbone of the global economy, yet they often lack the tools and resources to participate effectively in the green transition.
                </p>
                <p className="text-lg text-muted-foreground">
                  They face pressure from lenders, buyers, and regulators to provide ESG data — but they lack simple tools to measure metrics or link them to financial outcomes.
                </p>
              </div>
              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-xl font-medium leading-relaxed">
                  To make ESG reporting simple, affordable, and financially meaningful for SMEs worldwide.
                </p>
                <div className="mt-6 pt-6 border-t border-primary/10">
                  <p className="text-muted-foreground italic">
                    "We believe that sustainability shouldn't be a compliance burden—it should be a profit driver."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Strategy Cards */}
        <section className="py-24 bg-secondary/20">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 hover:border-primary/20 transition-colors">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A lightweight AI platform that helps SMEs measure, improve, and prove their ESG performance — and convert sustainability actions into profitability. We're automating the role of a Chief Sustainability Officer for businesses that can't afford one.
                </p>
              </div>

              <div className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 hover:border-primary/20 transition-colors">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-green-600">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Why Food & Beverage?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Restaurants and cafés operate on thin margins and generate significant waste. They are the perfect testing ground for our thesis: that reducing waste and energy use directly correlates to a healthier bottom line.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values / Stats */}
        <section className="py-24 border-b">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-3xl font-bold">Profit-First</h4>
                <p className="text-sm text-muted-foreground">Sustainability driven by ROI</p>
              </div>
              <div className="space-y-2">
                <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-3xl font-bold">Accessible</h4>
                <p className="text-sm text-muted-foreground">Built for non-experts</p>
              </div>
              <div className="space-y-2">
                <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-3xl font-bold">Data-Led</h4>
                <p className="text-sm text-muted-foreground">No greenwashing, just facts</p>
              </div>
              <div className="space-y-2">
                <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-3xl font-bold">AI-Powered</h4>
                <p className="text-sm text-muted-foreground">Automation over manual work</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Join our journey</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              We are looking for forward-thinking partners, investors, and businesses to join our Early Access Program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-12 px-8" asChild>
                <Link href="/contact">Partner With Us</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8" asChild>
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
