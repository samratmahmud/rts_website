import Navbar from "@/components/global/Navbar";
import React from "react";
import HeaderFive from "./HeaderFive";
import CardFive from "./CardFive";
import Parsenteg from "./Parsenteg";

function page() {
  return (
    <div>
      <Navbar />
      <HeaderFive />
      <CardFive />
      <Parsenteg />
    </div>
  );
}

export default page;
