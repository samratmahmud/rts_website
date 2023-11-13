import React from "react";
import AirplanSection from "./AirplaneSection";
import Footer from "../../components/global/Footer";
import HeaderTwo from "./HeaderTwo";
import CardTwo from "./CardTwo";
import HeroSection from "./HeroSection";

function page() {
  return (
    <main>
      <HeaderTwo />
      <CardTwo />
      <HeroSection />
      <AirplanSection />
      <Footer />
    </main>
  );
}

export default page;
