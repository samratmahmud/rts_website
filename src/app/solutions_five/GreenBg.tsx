import FlexComponents from "@/components/common/Userprofile";
import React from "react";

function GreenBg() {
  return (
    <div className="">
      <div className="relative">
        <div className="mt-8">
          <img
            className="w-full h-60 md:h-full"
            src="/picture/Mask group (26).png"
            alt=""
          />
        </div>
        <div className="md:-mt-[8%] hidden md:block">
          <img className="w-full" src="/picture/Vector (2).png" alt="" />
        </div>
        <div className="container">
          <div className="absolute lg:top-20 top-0 lg:text-8xl text-4xl font-bold text-slate-900 max-w-[508px]">
            RTS aims to reduce the diameter of monofilaments, thereby applying
            them in a wider range of textiles and reducing the likelihood of
            microplastic waste.
          </div>
        </div>
      </div>
      <div className="relative z-0 pt-16">
        <div className="absolute left-0 right-0 lg:bottom-0 bottom-1/2 -z-10">
          <img className="w-full" src="/picture/Vector (3).png" alt="" />
        </div>
        <div className=" container">
          <div className="lg:pb-52 pb-16">
            <FlexComponents
              pic="/picture/Group 194.png"
              name="Our goals"
              title="Textiles produced with monofilaments have been found to be stiff and uncomfortable to the touch. To expand the range of applications for monofilaments and reduce their microfiber shedding, we are making it even thinner, softer, and more elastic than our current 50 denier monofilament."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GreenBg;
