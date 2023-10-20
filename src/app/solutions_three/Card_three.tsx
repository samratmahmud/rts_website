import HeroBgImage from "@/components/common/HeroBgImage";
import React from "react";

function Card_three() {
  return (
    <div>
      <div className="container">
        <div className="flex md:flex-row flex-col md:gap-10 gap-20 justify-between max-w-[1057px] m-auto lg:py-36 mb-28">
          <div className="md:max-w-[310px]">
            <div className="flex md:gap-3 gap-1 items-center md:mb-20 mb-7 justify-center">
              <div className="md:text-21xl text-19xl font-medium text-slate-900">
                45
              </div>
              <div className="flex flex-col md:gap-8 gap-2.5">
                <div className="md:text-16xl text-9xl font-bold text-slate-900">
                  +
                </div>
                <div className="md:text-16xl text-9xl font-bold text-slate-900">
                  yrs.
                </div>
              </div>
            </div>
            <div className="md:text-4xl text-2xl font-bold text-slate-900 text-center md:mb-5 mb-2">
              We are using monofilaments to solve the problem of textile waste.
            </div>
            <div className="md:text-lg text-md text-slate-900 text-center">
              Over the course of 45 years, we have developed a deep
              understanding of the challenges that monofilament manufacturing
              poses and have engineered robust solutions to address them.
            </div>
          </div>
          <div className="md:max-w-[476px]">
            <div className="flex justify-center md:mb-11 mb-8">
              <img src="/picture/Group 252.svg" alt="" />
            </div>
            <div className="md:text-4xl text-2xl font-bold text-slate-900 text-center md:mb-5 mb-2">
              Striving to create a sustainable model that balances economic and
              environmental considerations.
            </div>
            <div className="md:text-lg text-md text-slate-900 text-center md:max-w-[300px] m-auto">
              We pursue sustainable development through innovative closed-loop
              methods that create shared economic value.
            </div>
          </div>
        </div>
      </div>
      <div
        className="lg:mb-48 mb-16"
        style={{backgroundImage: `url('/picture/Group 109.png')`}}
      >
        <HeroBgImage
          title="RTS solutions employ low environmental impact methods that increase
            the economic value of discarded textiles while promoting recycling
            and the closed-loop process of synthetic fabrics."
        />
      </div>
    </div>
  );
}

export default Card_three;
