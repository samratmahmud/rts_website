import Navbar from "@/components/global/Navbar";
import React from "react";
import Card_two from "./Card_two";
import AirplanSection from "./AirplanSection";
import Footer from "../../components/global/Footer";
import Header_two from "./Header_two";
import HeroBgImage from "@/components/common/HeroBgImage";
import Committed from "./Committed";

function page() {
  return (
    <div>
      <Navbar />
      <Card_two />
      <Committed />
      <AirplanSection />
      <Footer />
    </div>
  );
}

export default page;
