import React from "react";
import FaqsDetails from "./FaqsDetails";
import Footer from "@/components/global/Footer";
import FaqsHeader from "./FaqsHeader";

function page() {
  return (
    <main>
      <FaqsHeader />
      <FaqsDetails />
      <Footer />
    </main>
  );
}

export default page;
