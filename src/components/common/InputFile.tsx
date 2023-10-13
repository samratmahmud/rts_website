import React from "react";
import InputName from "../template/InputName";
import Button from "./Button";

function InputFile() {
  return (
    <div className="flex lg:gap-12 gap-5 items-center">
      <div>
        <img src="/picture/AdobeStock_354009182_Preview.png" alt="" />
      </div>
      <div className="pt-20 pb-10 pr-4">
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
              className="w-full h-[200px] focus:outline-none p-2 bg-[rgba(11,_11,_43,_0.05)] mb-7"
              name="text"
              id=""
              placeholder=""
            ></textarea>
            <div className="flex items-center gap-4 mb-4">
              <input className="w-4 h-4" type="checkbox" />
              <span className="text-md font-medium text-slate-900">
                Tick to agree to the “Privacy Policy”
              </span>
            </div>
            <div
              role="button"
              className="bg-emerald-600 text-white inline-block rounded-full"
            >
              <Button name="Send" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputFile;
