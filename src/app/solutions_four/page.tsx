import Navbar from "@/components/global/Navbar";
import React from "react";
import HeaderFour from "./HeaderFour";
import CardsFour from "./CardsFour";
import PlasticMono from "./PlasticMono";

function page() {
  return (
    <div>
      <Navbar />
      <HeaderFour />
      <CardsFour />
      <PlasticMono />
    </div>
  );
}

export default page;
