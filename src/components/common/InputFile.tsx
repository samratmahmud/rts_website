import React from "react";
import InputName from "../template/InputName";

function InputFile() {
  return (
    <div className="flex lg:gap-28 gap-10 items-center">
      <div>
        <img src="/picture/AdobeStock_354009182_Preview.png" alt="" />
      </div>
      <div className="py-20 pr-4">
        <div className="text-12xl font-bold text-slate-900 mb-1 whitespace-nowrap">
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
              className="w-full h-[200px] focus:outline-none p-2 bg-[rgba(11,_11,_43,_0.05)]"
              name="text"
              id=""
              placeholder=""
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputFile;
