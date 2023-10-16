import React from "react";

function CardTop() {
  return (
    <div className="relative z-0 bg-slate-900 pb-40">
      <div className="container">
        <div className="flex">
          <div className="text-21xl font-medium text-emerald-600 pt-16 pl-10">
            “
          </div>
          <div className="text-5xl font-medium text-white max-w-[580px] pt-24">
            The RTS approach features low resource consumption and minimized
            environmental impact, making it a preferred sustainability strategy
            in the textile industry.
          </div>
        </div>
        <div className="pt-20 absolute -z-10 top-0 left-0 right-0">
          <img className="w-full" src="/picture/Vector.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default CardTop;
