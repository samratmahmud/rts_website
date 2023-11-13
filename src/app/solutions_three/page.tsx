import React from "react";
import Footer from "../../components/global/Footer";
import BussinesPartnerCard from "./BussinesPartnerCard";
import CardThree from "./CardThree";
import HeaderThree from "./HeaderThree";
import ProblemSolving from "./ProblemSolving";

function page() {
  return (
    <main>
      <HeaderThree />
      <CardThree />
      <ProblemSolving />
      <BussinesPartnerCard />
      <Footer />
    </main>
  );
}

export default page;
