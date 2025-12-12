import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/minimalist_abstract_background_for_saas_hero_section.png";
import { Leaf, Droplets, Zap, Trash2, Users } from "lucide-react";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Abstract Background" 
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-24 md:px-6 md:py-32 max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center rounded-full border bg-background/50 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
            Built for F&B SMEs
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            The AI ESG Platform That Turns <span className="text-primary">Sustainability</span> Into <span className="text-accent">Profit</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            Designed for restaurants, cafés, and cloud kitchens. Generate investor-ready ESG data in minutes — no complex systems required.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button size="lg" className="h-12 px-8 text-base" asChild>
              <Link href="/contact">Request Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
              <Link href="/contact">Get Early Access</Link>
            </Button>
          </motion.div>

          {/* Icons Row */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground md:gap-12"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/50 p-2.5">
                <Trash2 className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium">Waste</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/50 p-2.5">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium">Hygiene</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/50 p-2.5">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium">Energy</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/50 p-2.5">
                <Droplets className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium">Water</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/50 p-2.5">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium">Staff</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
