import React from "react";
import ContactHeader from "./ContactHeader";
import SocialSite from "./SocialSite";
import ContactForm from "./ContactForm";
import Location from "./Location";
import Footer from "@/components/global/Footer";

function page() {
  return (
    <main>
      <ContactHeader />
      <SocialSite />
      <ContactForm />
      <Location />
      <Footer />
    </main>
  );
}

export default page;
