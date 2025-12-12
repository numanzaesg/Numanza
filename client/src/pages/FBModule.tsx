import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Trash2, Sparkles, Zap, Users, ArrowRight } from "lucide-react";
import mobileUi from "@assets/generated_images/mobile_ui_for_kitchen_waste_logging.png";

export default function FBModule() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      
      <main>
        {/* Header */}
        <section className="py-24 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
            <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm font-medium text-primary mb-6">
              Industry Specific
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">F&B Module</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored tools for restaurants, cafés, and cloud kitchens to manage waste, hygiene, and staff effectively.
            </p>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            {/* Waste Logging */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="order-2 lg:order-1">
                <div className="relative mx-auto max-w-[300px]">
                  <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-xl" />
                  <img 
                    src={mobileUi} 
                    alt="Mobile Waste Logging UI" 
                    className="relative rounded-[2rem] border-8 border-background shadow-2xl"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-orange-100 flex items-center justify-center">
                    <Trash2 className="h-6 w-6 text-orange-600" />
                  </div>
                  <h2 className="text-3xl font-bold">Waste Logging</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Track food waste in seconds to identify cost-saving opportunities and reduce your environmental footprint.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mr-3 font-bold text-xs">1</span>
                    <span>60-second "Add Waste Entry" workflow</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mr-3 font-bold text-xs">2</span>
                    <span>Record type, quantity, reason, and notes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mr-3 font-bold text-xs">3</span>
                    <span><strong>Photo-upload → AI categorisation</strong> & quantity estimation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Hygiene Checklists */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold">Hygiene Checklists</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Digitalize your kitchen operations to ensure safety, compliance, and accountability.
                </p>
                <div className="grid gap-4">
                  <div className="p-4 border rounded-xl bg-secondary/20">
                    <h3 className="font-bold mb-1">Kitchen Cleanliness</h3>
                    <p className="text-sm text-muted-foreground">Daily opening and closing checklists.</p>
                  </div>
                  <div className="p-4 border rounded-xl bg-secondary/20">
                    <h3 className="font-bold mb-1">Food Storage</h3>
                    <p className="text-sm text-muted-foreground">Temperature logs and storage organization.</p>
                  </div>
                  <div className="p-4 border rounded-xl bg-secondary/20">
                    <h3 className="font-bold mb-1">Staff Hygiene</h3>
                    <p className="text-sm text-muted-foreground">Personal hygiene and uniform checks.</p>
                  </div>
                  <div className="p-4 border rounded-xl bg-secondary/20">
                    <h3 className="font-bold mb-1">Expiry Checks</h3>
                    <p className="text-sm text-muted-foreground">Automated alerts for expiring inventory.</p>
                  </div>
                </div>
              </div>
              <div className="bg-secondary/30 rounded-2xl p-8 border border-border/50 h-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary mb-2">100% Digital</p>
                  <p className="text-muted-foreground">No more paper clipboards.</p>
                  <div className="mt-8 p-6 bg-background rounded-xl shadow-sm max-w-xs mx-auto text-left">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-bold">Missed Task Alert</span>
                      <span className="text-xs text-destructive bg-destructive/10 px-2 py-1 rounded-full">High Priority</span>
                    </div>
                    <p className="text-sm mb-4">Freezer Temp Check was not completed by 10:00 AM.</p>
                    <Button size="sm" className="w-full">View Task</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Energy & Staff */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border rounded-2xl bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-yellow-100 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-bold">Energy & Water Tracking</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Upload bills → AI extracts data</li>
                  <li>• Trend charts & anomaly detection</li>
                  <li>• Usage benchmarking</li>
                </ul>
              </div>
              <div className="p-8 border rounded-2xl bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold">Staff Logging</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Staff count & New hires tracking</li>
                  <li>• Attrition rates</li>
                  <li>• Training hours logging</li>
                </ul>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button size="lg" className="h-12 px-8" asChild>
                <Link href="/contact">Request a Demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
