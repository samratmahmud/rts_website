import HeaderSection from "@/components/common/HeaderSection";
import React from "react";

function HeaderFour() {
  return (
    <div>
      <div className="bg-no-repeat bg-cover lg:bg-solutions2 bg-solutions2Mob">
        <HeaderSection
          p1="RTS Solutions to"
          p2="# Embracing a mono-material approach"
          div1=" Monofilament For Improved Recyclability"
          title="Mono-material design allows products to be recycled more efficiently."
          width="true"
        />
      </div>
      <div className="bg-[rgba(11,_11,_43,_0.05)]">
        <div className="-mt-[12%]">
          <img className="w-full" src="/picture/Vector (4).svg" alt="" />
        </div>
        <div className="container">
          <div className="flex lg:flex-row flex-col md:gap-7 gap-5 lg:items-center md:pb-24 pb-[60px] lg:-mt-14 mt-12">
            <div>
              <img className="w-full" src="/picture/Group 73.png" alt="" />
            </div>
            <div className="md:text-5xl text-2xl font-medium text-slate-900 lg:max-w-[540px]">
              When products with different materials are thrown away, they can
              lead to a series of interconnected environmental issues.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderFour;
