import React from "react";
import HeaderFour from "./HeaderFour";
import CardsFour from "./CardsFour";
import PlasticMono from "./PlasticMono";
import Application from "./Application";
import Footer from "../../components/global/Footer";
import Despite from "./Despite";

function page() {
  return (
    <div>
      <HeaderFour />
      <CardsFour />
      <PlasticMono />
      <Despite />
      <Application />
      <Footer />
    </div>
  );
}

export default page;
