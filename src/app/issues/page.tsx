import React from "react";
import IssuesHeader from "./IssuesHeader";
import IssuesCard from "./IssuesCard";
import Footer from "@/components/global/Footer";

function page() {
  return (
    <main>
      <IssuesHeader />
      <IssuesCard />
      <Footer />
    </main>
  );
}

export default page;
