import Navbar from "@/components/global/Navbar";
import React from "react";
import HeaderFive from "./HeaderFive";
import CardFive from "./CardFive";
import Parsenteg from "./Parsenteg";
import TestingCard from "./TestingCard";
import GreenBg from "./GreenBg";
import Footer from "../../components/global/Footer";

function page() {
  return (
    <div>
      <HeaderFive />
      <CardFive />
      <Parsenteg />
      <TestingCard />
      <GreenBg />
      <Footer />
    </div>
  );
}

export default page;
