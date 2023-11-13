import HeroBgImage from "@/components/common/HeroBgImage";
import UserProfile from "@/components/common/Userprofile";
import React from "react";

function HeroSection() {
  return (
    <section>
      <div
        className="md:mb-48 mb-14 bg-no-repeat bg-cover"
        style={{backgroundImage: `url('/picture/Mask group (3).png')`}}
      >
        <HeroBgImage title="RTS is committed to developing hollow monofilament, expanding its uses and achieving energy-saving, carbon reduction, and other ecological goals." />
      </div>
      <div className="relative lg:mb-40 md:mb-4 mb-6">
        <div className="hidden lg:block absolute -z-10">
          <img className="w-screen" src="/picture/Vector (1).svg" alt="" />
        </div>
        <div className="container">
          <UserProfile
            pic="/picture/AdobeStock_91101792_Preview 1.png"
            name="Our goals"
            title="We aim to reduce the diameter and increase the hollow rate of hollow monofilament by 50%, while maintaining the desired performance targets."
          />
        </div>
        <div className="lg:hidden">
          <img src="/picture/Vector (1).svg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
