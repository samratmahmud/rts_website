import Cards from "@/components/common/Cards";
import FlexComponents from "@/components/common/FlexComponents";
import React from "react";

function AirplanSection() {
  return (
    <div>
      <div className="relative mb-16">
        <div>
          <img src="/picture/Vector (1).svg" alt="" />
        </div>
        <div className="container">
          <div className="absolute -top-8">
            <FlexComponents
              pic="/picture/AdobeStock_91101792_Preview 1.png"
              name="Our goals"
              title="We aim to reduce the diameter and increase the hollow rate of
              hollow monofilament by 50%, while maintaining the desired
              performance targets."
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="mb-14 flex justify-center">
          <img src="/picture/Group (2).svg" alt="" />
        </div>
        <div className="text-11xl text-slate-900 max-w-[900px] m-auto text-center">
          Please join us in the RTS energy-saving and carbon reduction
          initiative:
        </div>
        <div className="relative">
          <div>
            <img src="/picture/Vector (4).svg" alt="" />
          </div>
          <div className="flex flex-row gap-10 justify-between -mt-[220px] mb-44">
            <div>
              <Cards
                pic="/picture/AdobeStock_589111468_Preview.png"
                number="# 1"
                title="Any industry that needs to reduce carbon emissions during product transportation and lightweighting transportation vehicles."
              />
            </div>
            <div>
              <Cards
                pic="/picture/AdobeStock_343329880_Preview 2.png"
                number="# 2"
                title="Any industry that needs to reduce the use of petrochemical materials, lower product carbon footprint, and decrease carbon taxes."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AirplanSection;
