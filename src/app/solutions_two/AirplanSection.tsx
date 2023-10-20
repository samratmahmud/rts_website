import Cards from "@/components/common/Cards";
import FlexComponents from "@/components/common/Userprofile";
import HeroBgImage from "@/components/common/HeroBgImage";
import React from "react";
import UserProfile from "@/components/common/Userprofile";

function AirplanSection() {
  return (
    <div>
      <div
        className="md:mb-48 mb-14 bg-no-repeat bg-cover"
        style={{backgroundImage: `url('/picture/Mask group (3).png')`}}
      >
        <HeroBgImage
          title="RTS is committed to developing hollow monofilament, expanding its uses
          and achieving energy-saving, carbon reduction, and other ecological
          goals."
        />
      </div>
      <div className="relative mb-16">
        <div>
          <img src="/picture/Vector (1).svg" alt="" />
        </div>
        <div className="container">
          <div className="absolute -top-8">
            <UserProfile
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
