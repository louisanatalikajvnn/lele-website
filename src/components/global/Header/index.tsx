"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] w-full bg-white backdrop-blur text-customblue">
      <div className="container flex items-center justify-between mx-auto px-4 sm:px-8 h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/lele_logo.png"
            alt="LeLe logo"
            width={50}
            height={30}
            priority
          />
          <Link
            href="/"
            className="text-xl tracking-tight hover:text-primary transition-colors"
          >
            LeLe Mandarin
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-base ml-auto">
          <Link
            href="/curriculum"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Curriculum
          </Link>
          <Link
            href="/pricing"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Pricing
          </Link>
          <Link
            href="/about-us"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            About Us
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Hamburger Icon (mobile only) */}
          <button
            className="md:hidden text-muted-foreground hover:text-primary transition-transform duration-300"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            <span
              className={`block transition-transform duration-300 ${
                mobileOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"
              }`}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out 
          ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        bg-background border-t border-gray-200 px-4 py-2 text-sm font-medium shadow`}
      >
        <nav className="flex flex-col space-y-4">
          <Link
            href="/curriculum"
            className="text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Curriculum
          </Link>
          <Link
            href="/pricing"
            className="text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/guides"
            className="text-muted-foreground transition-colors hover:text-primary"
            onClick={() => setMobileOpen(false)}
          >
            Guides
          </Link>
          <Link
            href="/about-us"
            className="text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            About Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
