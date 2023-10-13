import React from "react";
import SolutionHeader from "./SolutionHeader";
import Navbar from "@/components/global/Navbar";
import SolutionCard from "./SolutionCard";

function page() {
  return (
    <div>
      <Navbar />
      <SolutionHeader />
      <SolutionCard />
    </div>
  );
}

export default page;
