import Navbar from "@/components/global/Navbar";
import React from "react";
import Card_two from "./Card_two";
import AirplanSection from "./AirplanSection";
import Footer from "../home/Footer";
import Header_two from "./Header_two";

function page() {
  return (
    <div>
      <Navbar />
      <Header_two />
      <Card_two />
      <AirplanSection />
      <Footer />
    </div>
  );
}

export default page;
