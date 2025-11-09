import React from "react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-6">
      <div className="flex items-center gap-3">
        <div className="text-vfRed font-playfair text-2xl">V</div>
        <div className="text-vfNavy text-lg font-medium">Films</div>
      </div>

      <nav className="hidden md:flex gap-6 items-center text-sm text-vfNavy">
        <a href="#services">Services</a>
        <a href="#stories">Their Stories</a>
        <a href="#ourstory">Our Story</a>
        <a href="#varnan">Varnan</a>
        <button className="ml-4 bg-vfRed text-white px-4 py-1 rounded-full text-sm">
          Let's Talk 🖂
        </button>
      </nav>

      <div className="md:hidden">
        <button className="p-2 border rounded">☰</button>
      </div>
    </header>
  );
}
