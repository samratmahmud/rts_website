import Navbar from "@/components/global/Navbar";
import React from "react";
import AboutHeader from "./AboutHeader";
import Vision from "./Vision";
import InputFile from "@/components/common/InputFile";
import Ri_Thai from "./Ri_Thai";
import Footer from "../../components/global/Footer";
import RtsTeam from "./RtsTeam";

function page() {
  return (
    <div>
      <AboutHeader />
      <Vision />
      <RtsTeam />
      <InputFile />
      <Ri_Thai />
      <Footer />
    </div>
  );
}

export default page;
