import React from "react";

function CardTop() {
  return (
    <div className="relative z-0 bg-slate-900 pb-40">
      <div className="container">
        <div className="md:flex">
          <div className="md:text-21xl text-[140px] font-medium text-emerald-600 md:pt-16 pt-5 md:pl-10 -mb-24 md:-mb-0">
            “
          </div>
          <div className="text-5xl font-medium text-white max-w-[580px] md:pt-24 font-regulator-nova">
            The RTS approach features low resource consumption and minimized
            environmental impact, making it a preferred sustainability strategy
            in the textile industry.
          </div>
        </div>
        <div className="absolute -z-10 md:-bottom-16 left-0 right-0">
          <img className="w-full" src="/picture/Vector.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default CardTop;
