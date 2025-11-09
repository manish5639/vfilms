import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Highlight from "./components/Highlight";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-texture bg-[length:1800px]">
      <Navbar />
      <main className="max-w-[1200px] mx-auto px-6">
        <Hero />
        <Services />
        <Highlight />
        <Contact />
      </main>
      <footer className="text-center py-8 text-sm text-vfNavy">
        © {new Date().getFullYear()} V Films
      </footer>
    </div>
  );
}
