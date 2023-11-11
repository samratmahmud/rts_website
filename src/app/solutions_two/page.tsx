import Navbar from "@/components/global/Navbar";
import React from "react";
import Card_two from "./Card_two";
import AirplanSection from "./AirplanSection";
import Footer from "../../components/global/Footer";
import Committed from "./Committed";
import HeaderTwo from "./HeaderTwo";

function page() {
  return (
    <div>
      <HeaderTwo />
      <Card_two />
      <Committed />
      <AirplanSection />
      <Footer />
    </div>
  );
}

export default page;
