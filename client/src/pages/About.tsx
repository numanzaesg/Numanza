import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      
      <main className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground">
              We are building a multi-industry ESG platform starting with F&B as the early adopter segment.
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p>
              Small and Medium Enterprises (SMEs) are the backbone of the global economy, yet they often lack the tools and resources to participate effectively in the green transition.
            </p>
            <p>
              Our mission is to make ESG reporting <strong>simple, affordable, and financially meaningful</strong> for SMEs worldwide. We believe that sustainability shouldn't be a compliance burden—it should be a profit driver.
            </p>
            
            <h3>Our Vision</h3>
            <p>
              A lightweight AI platform that helps SMEs measure, improve, and prove their ESG performance — and convert sustainability actions into profitability.
            </p>

            <h3>Why Food & Beverage?</h3>
            <p>
              Restaurants and cafés operate on thin margins and generate significant waste. They are the perfect testing ground for our thesis: that reducing waste and energy use directly correlates to a healthier bottom line.
            </p>
          </div>

          <div className="mt-16 text-center p-8 bg-secondary/30 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Join our journey</h3>
            <p className="text-muted-foreground mb-6">
              We are looking for forward-thinking partners and businesses to join our Early Access Program.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
