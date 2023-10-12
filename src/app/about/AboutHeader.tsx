import React from "react";

function AboutHeader() {
  return (
    <div
      className="bg-no-repeat bg-cover"
      style={{backgroundImage: `url('/picture/Group 97.png')`}}
    >
      <div className="container">
        <div className="pt-[225px]">
          <div className="text-17xl font-medium text-slate-900 bg-emerald-600 inline-block py-2 px-4">
            About
          </div>
          <br />
          <div className="text-17xl font-medium text-slate-900 bg-emerald-600 inline-block py-2 px-4 mb-6">
            Retain to Sustain
          </div>
          <div className="text-5xl font-medium text-white pb-[293px] shadow-lg max-w-[643px]">
            RTS is at the forefront of the synthetic fiber industry with
            sustainable monofilament that has minimal environmental impact and
            low carbon footprint.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHeader;
//Vector (2).svg
