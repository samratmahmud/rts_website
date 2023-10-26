import HeaderSection from "@/components/common/HeaderSection";
import React from "react";

function HeaderFive() {
  return (
    <div
      className="bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('/picture/Mask group (18).png')`,
      }}
    >
      <HeaderSection
        p1="RTS Solutions to"
        p2="# Microfiber shedding"
        div1="Monofilament With Higher Durability and Low Shedding"
        title="Introducing a fine, resilient monofilament with less shedding."
      />
    </div>
  );
}

export default HeaderFive;
