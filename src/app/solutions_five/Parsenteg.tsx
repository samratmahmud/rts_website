import HeroBgImage from "@/components/common/HeroBgImage";
import React from "react";

function Parsenteg() {
  return (
    <div>
      <div
        className="w-full"
        style={{backgroundImage: `url('/picture/Rectangle 63.png')`}}
      >
        <HeroBgImage
          title="We strive to produce high-quality monofilaments while also
            considering the impact of microfibers shed by our own products."
          width="true"
        />
      </div>
      <div className="bg-[rgba(11,_11,_43,_0.05)]">
        <div className="container">
          <div className="flex lg:flex-row flex-col gap-11 justify-between items-center lg:pt-[109px] pt-20 pb-[102px]">
            <div className="mb-7 lg:mb-0">
              <div className="text-8xl font-bold text-slate-900 max-w-[304px] text-center m-auto mb-3">
                Microfiber shedding rate detection
              </div>
              <div className="lg:text-lg text-4xl text-slate-900 text-center">
                TMC method 1.1-2021
              </div>
            </div>
            <div className="text-11xl text-slate-900 hidden lg:block">:</div>
            <div className="flex flex-col items-center">
              <div className="text-17xl font-bold lg:font-medium text-slate-900 mb-3">
                0.0343%
              </div>
              <div className="text-8xl font-bold text-slate-900 bg-emerald-600 px-3 mb-4">
                Monofilament
              </div>
              <div className="text-lg text-slate-900">150D/1f</div>
            </div>
            <div className="text-11xl text-slate-900">vs.</div>
            <div className="flex flex-col items-center">
              <div className="text-17xl font-bold lg:font-medium text-slate-900 mb-3">
                0.1513%
              </div>
              <div className="text-8xl font-bold text-slate-900 bg-emerald-600 px-3 mb-4">
                Monofilament
              </div>
              <div className="text-lg text-slate-900">150D/48f</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parsenteg;
