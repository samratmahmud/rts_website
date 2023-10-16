import Navbar from "@/components/global/Navbar";
import React from "react";
import HeaderFour from "./HeaderFour";
import CardsFour from "./CardsFour";
import PlasticMono from "./PlasticMono";
import Application from "./Application";
import Footer from "../home/Footer";

function page() {
  return (
    <div>
      <Navbar />
      <HeaderFour />
      <CardsFour />
      <PlasticMono />
      <Application />
      <Footer />
    </div>
  );
}

export default page;
