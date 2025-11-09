import imgSrc from "../assets/vfilms.png"
import React from "react";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center py-8">
      <div className="flex items-center justify-center">
        <div className="relative">
          <div
            className="w-[320px] h-[320px] rounded-full border border-[#f0cfc9] flex items-center justify-center card-shadow"
            style={{ background: "#fff0" }}
          >
            <img
              src={imgSrc}
              alt="mandala"
              className="w-72 h-72 object-contain"
            />
          </div>
          {/* <div className="absolute left-8 top-32 text-5xl font-bold text-vfNavy">
            Films
          </div> */}
        </div>
      </div>

      <div className="px-4">
        <h1 className="font-Island_Moments text-4xl md:text-5xl text-vfNavy leading-tight italic">
          Varnan is where stories find
          <br />
          their voice and form
        </h1>
        <p className="text-vfRed mt-4">Films · Brands · Art</p>
        <p className="text-sm text-vfNavy mt-6 max-w-md">
          Since 2009, V've been telling stories — stories of people, their
          journeys, and the places that shape them. Every story starts the same
          way — by listening with intention. V believes it takes trust, patience
          and an eye for the unseen to capture what truly matters.
        </p>

        <div className="mt-8">
          <button className="bg-vfRed text-white px-4 py-2 rounded-full">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
