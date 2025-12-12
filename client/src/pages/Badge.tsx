import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { QrCode, ShieldCheck, TrendingUp, RefreshCcw } from "lucide-react";
import { Link } from "wouter";

export default function Badge() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      
      <main className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border bg-accent/10 px-3 py-1 text-sm font-medium text-accent mb-6">
                Build Trust
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Sustainability Badge</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Showcase your commitment to the planet. Our dynamic Sustainability Badge updates automatically as you improve your ESG score.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <QrCode className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">QR Code for Customers</h3>
                    <p className="text-muted-foreground">Place it on menus, tables, or your website. Customers scan to see your live impact.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Dynamic Highlights</h3>
                    <p className="text-muted-foreground">Your badge page automatically highlights your best metrics (e.g., "Reduced plastic by 20%").</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <RefreshCcw className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Monthly Updates</h3>
                    <p className="text-muted-foreground">The data refreshes every month based on your logs, keeping your transparency real-time.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Your Badge</Link>
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-4 bg-gradient-to-tr from-accent to-primary opacity-20 blur-2xl rounded-full" />
                <div className="relative bg-white text-black p-8 rounded-2xl shadow-2xl border border-gray-100 text-center">
                  <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck className="h-10 w-10 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Eco-Certified</h2>
                  <p className="text-sm text-gray-500 mb-6">The Green Cafe - London</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-500 uppercase font-bold">Carbon</p>
                      <p className="text-lg font-bold text-green-600">-15%</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-500 uppercase font-bold">Waste</p>
                      <p className="text-lg font-bold text-green-600">Recycled</p>
                    </div>
                  </div>

                  <div className="bg-black text-white p-4 rounded-xl mb-4">
                    <QrCode className="h-16 w-16 mx-auto" />
                  </div>
                  <p className="text-xs text-gray-400">Scan to verify data</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
