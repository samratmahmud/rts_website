import React from "react";
import HeaderFour from "./HeaderFour";
import CardsFour from "./CardsFour";
import Application from "./Application";
import Footer from "../../components/global/Footer";
import Despite from "./Despite";
import MonoCards from "./MonoCards";

function page() {
  return (
    <div>
      <HeaderFour />
      <CardsFour />
      <MonoCards />
      <Despite />
      <Application />
      <Footer />
    </div>
  );
}

export default page;
