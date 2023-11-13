import HeaderSection from "@/components/common/HeaderSection";
import React from "react";

function HeaderFive() {
  return (
    <section
      className="bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('/picture/Mask group (18).png')`,
      }}
    >
      <HeaderSection
        p1="RTS Solutions to"
        p2="# Microfiber shedding"
        title="Monofilament With Higher Durability and Low Shedding"
        contain="Introducing a fine, resilient monofilament with less shedding."
      />
    </section>
  );
}

export default HeaderFive;
