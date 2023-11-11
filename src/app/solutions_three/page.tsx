import React from "react";
import SolvingProblem from "./SolvingProblem";
import Footer from "../../components/global/Footer";
import BussinesPartnerCard from "./BussinesPartnerCard";
import CardThree from "./CardThree";
import HeaderThree from "./HeaderThree";

function page() {
  return (
    <div>
      <HeaderThree />
      <CardThree />
      <SolvingProblem />
      <BussinesPartnerCard />
      <Footer />
    </div>
  );
}

export default page;
