import HeaderSection from "@/components/common/HeaderSection";
import React from "react";

function HeaderTwo() {
  return (
    <section>
      <div
        className="bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('/picture/AdobeStock_74657163_Preview 1.png')`,
        }}
      >
        <HeaderSection
          p1="RTS Solutions to"
          p2="Lightweighting"
          title="Monofilament with a smaller carbon footprint"
          contain="Hollow monofilament's lightweight nature reduces energy consumption, leading to a decrease in carbon emissions."
        />
      </div>
      <div className="-mt-[15%] lg:mb-[52px] mb-6">
        <img className="w-full" src="/picture/Vector (4).svg" alt="" />
      </div>
    </section>
  );
}

export default HeaderTwo;
