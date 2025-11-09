import React from "react";

export default function Highlight() {
  return (
    <section className="py-12">
      <h2 className="text-center text-2xl font-playfair mb-6">
        The Highlight Reel
      </h2>
      <div className="flex items-center justify-center">
        <div className="w-full max-w-3xl relative">
          <div className="aspect-[16/9] bg-gray-100 rounded overflow-hidden card-shadow">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/xciwYxZuxog?si=qSCyHWdMJkm0PECl"
              title="video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
