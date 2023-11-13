import UserProfile from "@/components/common/Userprofile";
import React from "react";

function ProblemSolving() {
  return (
    <section>
      <div className="container md:mb-16 mb-3">
        <UserProfile
          pic="/picture/Group 252.png"
          name="Our goals"
          title="Our monofilaments that are made from recycled textile waste do not require bleaching. At the same time, we provide a wide range of color choices, ensuring that our recycled monofilaments hold the same value as virgin monofilaments.
          "
          p1="Anticipated textile waste includes pre-consumer PET yarn waste, pre-consumer PET textile waste (including TPEE), and post-consumer textile waste which has been disassembled and sorted by different materials."
        />
      </div>
      <div
        className="bg-no-repeat bg-cover"
        style={{backgroundImage: `url('/picture/Vector (5).svg')`}}
      >
        <div className="md:pt-[15%] pt-[24%] md:pb-60 pb-32 container">
          <div className="flex justify-center md:mb-10 mb-8">
            <img src="/picture/Group 254.svg" alt="" />
          </div>
          <div className="md:text-11xl text-4xl text-slate-900 max-w-[900px] m-auto text-center">
            Please join RTS in solving problems together with ideal industry
            partners:
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemSolving;
