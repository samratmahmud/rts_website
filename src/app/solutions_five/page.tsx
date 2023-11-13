import React from "react";
import HeaderFive from "./HeaderFive";
import CardFive from "./CardFive";
import TestingCard from "./TestingCard";
import GreenBg from "./GreenBg";
import Footer from "../../components/global/Footer";
import Percentage from "./Percentage";

function page() {
  return (
    <div>
      <HeaderFive />
      <CardFive />
      <Percentage />
      <TestingCard />
      <GreenBg />
      <Footer />
    </div>
  );
}

export default page;
