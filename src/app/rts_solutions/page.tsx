import React from "react";
import SolutionHeader from "./SolutionHeader";
import Navbar from "@/components/global/Navbar";
import SolutionCard from "./SolutionCard";
import InputFile from "@/components/common/InputFile";
import Footer from "../home/Footer";

function page() {
  return (
    <div>
      <Navbar />
      <SolutionHeader />
      <SolutionCard />
      <InputFile />
      <Footer />
    </div>
  );
}

export default page;
