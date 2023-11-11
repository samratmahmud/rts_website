import Button from "@/components/common/Button";
import React from "react";

function Ri_Thai() {
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover"
        style={{backgroundImage: `url('/picture/Group 102.png')`}}
      >
        <div className="md:text-15xl text-4xl font-medium text-white text-center lg:py-[173px] py-16 md:px-4 px-10">
          RTS: A project initiated by Ri-Thai
        </div>
      </div>
      <div className="md:py-24 pt-14 pb-16 container">
        <div className="flex justify-center md:mb-12 mb-9">
          <img className="" src="/picture/DJI_0068_修2 1.png" alt="" />
        </div>
        <div className="md:text-5xl text-4xl font-medium text-slate-900 mb-14 max-w-[900px] m-auto font-regulator-nova">
          Ri-Thai International Inc., a monofilament fiber expert and initiator
          of the RTS project, welcomes you to visit its website to learn more
          about the company.
        </div>
        <div
          role="button"
          className="bg-slate-900 text-emerald-600 rounded-full max-w-[241px] m-auto hover:bg-slate-700 duration-300"
        >
          <Button name="Visit Ri-Thai Website" />
        </div>
      </div>
    </div>
  );
}

export default Ri_Thai;
