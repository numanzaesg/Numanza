import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/fb-module", label: "F&B Module" },
    { href: "/pricing", label: "Pricing" },
    { href: "/badge", label: "Sustainability Badge" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 mx-auto">
        <Link href="/">
          <a className="mr-6 flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">N</span>
            </div>
            <span className="hidden font-display font-bold text-xl sm:inline-block">
              Numanza
            </span>
          </a>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <div className="flex gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location === item.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
               <Link href="/contact">Log in</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/contact">Request Demo</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="container md:hidden pb-6 animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-4 rounded-lg border bg-background p-6 shadow-lg">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary block py-2",
                    location === item.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Log in</Link>
              </Button>
              <Button className="w-full" asChild>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
