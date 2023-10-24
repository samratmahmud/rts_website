import HeaderSection from "@/components/common/HeaderSection";
import React from "react";

function Header_three() {
  return (
    <section>
      <div
        className="bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('/picture/Mask group (4).png')`,
        }}
      >
        <HeaderSection
          p1="RTS Solutions to"
          p2="# Addressing the current challenges in textile recycling"
          div1="Monofilament With Greater Inclusivity"
          title="Overcoming the challenges of synthetic textiles closed-loop recycling by using innovative, low environmental impact methods."
          width="true"
        />
      </div>
      <div className="bg-[rgba(11,_11,_43,_0.05)]">
        <div className="-mt-[10%]">
          <img className="w-full" src="/picture/Vector (4).svg" alt="" />
        </div>
        <div className="container">
          <div className="flex lg:flex-row flex-col gap-7 items-center lg:pb-32 pb-16 lg:-mt-[5%] mt-5">
            <div>
              <img src="/picture/Group 246.png" alt="" />
            </div>
            <div className="md:text-5xl text-4xl font-medium text-slate-900 max-w-[540px]">
              The manufacturing industry has now extended beyond serving its end
              users, one in which the mission has become a broader commitment to
              a circular system. In the textiles industry, the most anticipated
              development is a truly closed-loop textile supply chain.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header_three;
