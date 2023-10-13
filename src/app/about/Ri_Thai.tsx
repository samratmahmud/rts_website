import Button from "@/components/common/Button";
import React from "react";

function Ri_Thai() {
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover"
        style={{backgroundImage: `url('/picture/Group 102.png')`}}
      >
        <div className="text-15xl font-medium text-white text-center py-[173px] px-4">
          RTS: A project initiated by Ri-Thai
        </div>
      </div>
      <div className="py-24 container">
        <div className="flex justify-center mb-5">
          <img className="" src="/picture/DJI_0068_修2 1.png" alt="" />
        </div>
        <div className="text-5xl font-medium text-slate-900 mb-14 max-w-[900px] m-auto">
          Ri-Thai International Inc., a monofilament fiber expert and initiator
          of the RTS project, welcomes you to visit its website to learn more
          about the company.
        </div>
        <div
          role="button"
          className="bg-slate-900 text-white rounded-full max-w-[241px] m-auto"
        >
          <Button name="Visit Ri-Thai Website" />
        </div>
      </div>
    </div>
  );
}

export default Ri_Thai;
