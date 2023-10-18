import React from "react";

function AboutHeader() {
  return (
    <div
      className="bg-no-repeat bg-cover -ml-1"
      style={{backgroundImage: `url('/picture/Group 97.png')`}}
    >
      <div className="container">
        <div className="md:pt-[225px] pt-[155px]">
          <div className="md:text-17xl text-9xl font-medium text-slate-900 bg-emerald-600 inline-block py-2 px-4">
            About
          </div>
          <br />
          <div className="md:text-17xl text-9xl font-medium text-slate-900 bg-emerald-600 inline-block py-2 px-4 -mt-[1px] lg:-mt-0">
            Retain to <span className="hidden lg:block"></span>
          </div>
          <br />
          <div className="md:text-17xl text-9xl font-medium text-slate-900 bg-emerald-600 inline-block py-2 px-4 mb-6 -mt-[1px] lg:-mt-0">
            Sustain
          </div>
          <div className="md:text-5xl text-2xl font-medium text-white md:pb-[293px] pb-52 drop-shadow-lg max-w-[643px]">
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
