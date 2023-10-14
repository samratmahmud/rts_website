import FlexComponents from "@/components/common/FlexComponents";
import React from "react";

function Card_three() {
  return (
    <div>
      <div className="bg-[rgba(11,_11,_43,_0.05)]">
        <div className="-mt-40">
          <img src="/picture/Vector (4).svg" alt="" />
        </div>
        <div className="container">
          <div className="flex gap-7 items-center pb-32 -mt-14">
            <div>
              <img src="/picture/Group 246.png" alt="" />
            </div>
            <div className="text-5xl font-medium text-slate-900 max-w-[540px]">
              The manufacturing industry has now extended beyond serving its end
              users, one in which the mission has become a broader commitment to
              a circular system. In the textiles industry, the most anticipated
              development is a truly closed-loop textile supply chain.
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex gap-10 justify-between max-w-[1057px] m-auto py-36">
          <div className="max-w-[310px]">
            <div className="flex gap-3 items-center mb-20">
              <div className="text-21xl font-medium text-slate-900">45</div>
              <div className="flex flex-col gap-8">
                <div className="text-16xl font-bold text-slate-900">+</div>
                <div className="text-16xl font-bold text-slate-900">yrs.</div>
              </div>
            </div>
            <div className="text-4xl font-bold text-slate-900 text-center mb-5">
              We are using monofilaments to solve the problem of textile waste.
            </div>
            <div className="text-lg text-slate-900 text-center">
              Over the course of 45 years, we have developed a deep
              understanding of the challenges that monofilament manufacturing
              poses and have engineered robust solutions to address them.
            </div>
          </div>
          <div className="max-w-[476px]">
            <div className="flex justify-center mb-11">
              <img src="/picture/Group 252.svg" alt="" />
            </div>
            <div className="text-4xl font-bold text-slate-900 text-center mb-5">
              Striving to create a sustainable model that balances economic and
              environmental considerations.
            </div>
            <div className="text-lg text-slate-900 text-center max-w-[300px] m-auto">
              We pursue sustainable development through innovative closed-loop
              methods that create shared economic value.
            </div>
          </div>
        </div>
      </div>
      <div
        className="mb-48"
        style={{backgroundImage: `url('/picture/Group 109.png')`}}
      >
        <div className="container">
          <div className="text-10xl text-white shadow-sm max-w-[744px] py-28">
            RTS solutions employ low environmental impact methods that increase
            the economic value of discarded textiles while promoting recycling
            and the closed-loop process of synthetic fabrics.
          </div>
        </div>
      </div>
      <div className="container mb-16">
        <FlexComponents
          pic="/picture/Group 252.png"
          name="Our goals"
          title="Our monofilaments that are made from recycled textile waste do not require bleaching. At the same time, we provide a wide range of color choices, ensuring that our recycled monofilaments hold the same value as virgin monofilaments.
          "
          p1="Anticipated textile waste includes pre-consumer PET yarn waste, pre-consumer PET textile waste (including TPEE), and post-consumer textile waste which has been disassembled and sorted by different materials."
        />
      </div>
    </div>
  );
}

export default Card_three;
