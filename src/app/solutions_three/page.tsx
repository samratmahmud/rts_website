import Navbar from "@/components/global/Navbar";
import React from "react";
import Header_three from "./Header_three";
import Card_three from "./Card_three";
import SolvingProblem from "./SolvingProblem";
import Footer from "../../components/global/Footer";
import BussinesPartnerCard from "./BussinesPartnerCard";

function page() {
  return (
    <div>
      <Header_three />
      <Card_three />
      <SolvingProblem />
      <BussinesPartnerCard />
      <Footer />
    </div>
  );
}

export default page;
