import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Request Sent!",
        description: "We'll be in touch with your demo access shortly.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      
      <main className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-lg">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight mb-4">Request Demo / Early Access</h1>
            <p className="text-muted-foreground">
              Join the Early Access Program and get your ESG score in 5 minutes.
            </p>
          </div>

          <div className="border bg-card p-8 rounded-xl shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" required placeholder="John Doe" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input id="email" type="email" required placeholder="john@company.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company / Restaurant Name</Label>
                <Input id="company" required placeholder="The Green Cafe" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell us about your needs (Optional)</Label>
                <Textarea id="message" placeholder="We are looking to track waste..." />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Request Access"}
              </Button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
