import imgSrc1 from "../assets/1.png"
import imgSrc2 from "../assets/2.png"
import imgSrc3 from "../assets/3.png"
import React from "react";

const Card = ({ title, img, rotate }) => (
  <div className={`w-64 polaroid card-shadow p-3 ${rotate || ""}`}>
    <img src={img} alt={title} className="w-full h-44 object-cover" />
    <div className="text-center mt-2 font-serif text-sm">{title}</div>
  </div>
);

export default function Services() {
  return (
    <section id="services" className="py-12 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-2xl font-playfair">
          A montage of familiar faces and names.
        </h2>
        <p className="mt-4 text-sm text-vfNavy max-w-lg">
          Some stories come from the biggest names. Others begin with bold,
          rising voices. We shape stories that matter.
        </p>
        <div className="flex gap-4 mt-8">
          <Card
            title="Film Production"
            img={imgSrc1}
            rotate="-rotate-3"
          />
          <Card
            title="Branding"
            img={imgSrc2}
            rotate="rotate-3"
          />
          <Card
            title="Art Curation"
            img={imgSrc3}
            rotate="-rotate-2"
          />
        </div>
      </div>

      <div className="text-right">
        <h3 className="text-3xl font-playfair italic">
          Every project is more than just a brief — it's a new chapter waiting
          to be written.
        </h3>
      </div>
    </section>
  );
}
