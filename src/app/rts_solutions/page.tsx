import React from "react";
import SolutionHeader from "./SolutionHeader";
import Navbar from "@/components/global/Navbar";
import SolutionCard from "./SolutionCard";
import InputFile from "@/components/common/InputFile";
import Footer from "../../components/global/Footer";

function page() {
  return (
    <div className="">
      <Navbar />
      <SolutionHeader />
      <section className="z-0 relative ">
        <img
          src="/picture/Group 105 (1).png"
          className="absolute -z-10 w-full lg:h-full pt-32 lg:pt-0 [background-image:none] lg:bg-[linear-gradient(transparent_50%,rgba(11,_11,_43,_0.05)_50%)]"
          alt=""
        />
        <div className="md:text-11xl text-5xl font-bold md:font-normal max-w-[906px] mx-auto text-center text-slate-900 -mt-52 pt-72 md:pb-24 pb-12">
          Solving significant problems in the textile industry begins with
          thoughtful choices.
          <div className="font-bold">RTS proposes four major solutions.</div>
        </div>
      </section>
      <SolutionCard />
      <InputFile />
      <Footer />
    </div>
  );
}

export default page;
