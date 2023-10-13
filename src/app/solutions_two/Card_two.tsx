import React from "react";

function Card_two() {
  return (
    <div className="">
      <div className="-mt-40 mb-12">
        <img src="/picture/Vector (4).svg" alt="" />
      </div>
      <div className="container">
        <div className="flex gap-7 items-center mb-20">
          <div>
            <img
              className="max-w-[630px]"
              src="/picture/AdobeStock_490732559_Preview.png"
              alt=""
            />
          </div>
          <div className="text-5xl font-medium text-slate-900 max-w-[560px]">
            The consequences of climate change are disproportionately borne by
            vulnerable groups and regions, who contribute minimally to
            greenhouse gas emissions. To address this problem, we aim to make
            breakthroughs in our products regarding net-zero emissions.
            <p className="pt-6">
              We turn to nature for design inspiration, observing how birds use
              hollow bones and feathers to achieve easier flight.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card_two;
