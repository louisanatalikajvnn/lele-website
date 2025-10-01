"use client";

import { useState } from "react";
import HeroSection from "../components/pages/home/Hero";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full bg-neutral-50">
        <HeroSection />
      </div>
    </main>
  );
}
