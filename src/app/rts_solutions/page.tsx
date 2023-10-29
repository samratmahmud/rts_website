import React from "react";
import SolutionHeader from "./SolutionHeader";
import Navbar from "@/components/global/Navbar";
import SolutionCard from "./SolutionCard";
import InputFile from "@/components/common/InputFile";
import Footer from "../../components/global/Footer";
import Solving from "./Solving";

function page() {
  return (
    <div>
      <SolutionHeader />
      <Solving />
      <SolutionCard />
      <InputFile />
      <Footer />
    </div>
  );
}

export default page;
