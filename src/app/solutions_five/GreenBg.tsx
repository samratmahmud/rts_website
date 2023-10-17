import FlexComponents from "@/components/common/FlexComponents";
import React from "react";

function GreenBg() {
  return (
    <div className="relative">
      <div className="mt-[322px]">
        <img className="w-full" src="/picture/Mask group (26).png" alt="" />
      </div>
      <div className="-mt-32">
        <img src="/picture/Vector (2).png" alt="" />
      </div>
      <div className="container">
        <div className="absolute top-20 text-8xl font-bold text-slate-900 max-w-[508px]">
          RTS aims to reduce the diameter of monofilaments, thereby applying
          them in a wider range of textiles and reducing the likelihood of
          microplastic waste.
        </div>
      </div>
      <div className="relative">
        <div className="pt-[228px]">
          <img src="/picture/Vector (3).png" alt="" />
        </div>
        <div className=" container">
          <div className="absolute top-16">
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
