import Button from "@/components/common/Button";
import InputName from "@/components/template/InputName";
import React from "react";

function ContactForm() {
  return (
    <section className="bg-no-repeat bg-cover bg-contactInfo">
      <div className="container">
        <div className="py-20 md:max-w-[623px] m-auto">
          <div className="py-9 lg:px-7 px-5 bg-white">
            <div className="lg:text-12xl text-7xl font-bold text-slate-900 mb-1 whitespace-nowrap lg:w-[563px]">
              Send us a message
            </div>
            <div className="flex flex-col gap-3.5">
              <InputName name="Company *" />
              <InputName name="Name *" />
              <InputName name="Country *" />
              <InputName name="Email address *" />
              <div>
                <div>Message *</div>
                <textarea
                  className="w-full h-[200px] focus:outline-none p-2 bg-[rgba(11,_11,_43,_0.05)] md:mb-7 m-1.5"
                  name="text"
                  id=""
                  placeholder="Enter Your Messege....."
                ></textarea>
                <div className="flex items-center md:gap-4 gap-2 mb-4">
                  <input className="w-4 h-4" type="checkbox" />
                  <span className="text-md font-medium text-slate-900 font-regulator-nova">
                    Tick to agree to the “Privacy Policy”
                  </span>
                </div>
                <div
                  role="button"
                  className="bg-emerald-600 text-white inline-block rounded-full px-4 md:px-0"
                >
                  <Button name="Send" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
