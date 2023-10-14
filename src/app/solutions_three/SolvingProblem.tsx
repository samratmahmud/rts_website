import Cards from "@/components/common/Cards";
import React from "react";

function SolvingProblem() {
  return (
    <div>
      <div
        className=""
        style={{backgroundImage: `url('/picture/Vector (5).svg')`}}
      >
        <div className="pt-[200px] pb-40 container">
          <div className="flex justify-center mb-10">
            <img src="/picture/Group 254.svg" alt="" />
          </div>
          <div className="text-11xl text-slate-900 max-w-[900px] m-auto text-center">
            Please join RTS in solving problems together with ideal industry
            partners:
          </div>
        </div>
      </div>
      <div className="bg-[rgba(11,_11,_43,_0.05)] pt-9">
        <div className="container">
          <div className="grid grid-cols-2 gap-10 pb-40">
            <Cards
              pic="/picture/Group 254.png"
              number="# 1"
              title="Partners involved in destocking internal fiber or fabric waste."
            />
            <Cards
              pic="/picture/Mask group (5).png"
              number="# 2"
              title="Partners who want to support a true closed-loop system, whether it involves recycling bottles into new bottles or turning fabric scraps into new fabric."
            />
            <Cards
              pic="/picture/AdobeStock_585721685_Preview 1.png"
              number="# 3"
              title="Partners who collaborate in reducing textile waste."
            />
            <Cards
              pic="/picture/Mask group (6).png"
              number="# 4"
              title="Businesses that seek to gain value in the circular economy, reducing their products' carbon footprint and carbon taxes."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolvingProblem;
