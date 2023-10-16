import FlexComponents from "@/components/common/FlexComponents";
import React from "react";

function CardFive() {
  return (
    <div>
      <div className="relative">
        <img className=" w-full" src="/picture/Mask group (19).png" alt="" />
        <div className="absolute -top-[18%]">
          <img className="w-screen" src="/picture/Vector (7).svg" alt="" />
        </div>
        <div className="container">
          <div className="absolute top-[226px] text-white">
            <div>
              <FlexComponents
                pic="/picture/Group 73 (1).png"
                title="Textiles shed microfibers during use and washing, which can enter the environment and the food chain, causing pollution."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFive;
