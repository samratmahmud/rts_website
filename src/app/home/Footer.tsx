import Button from "@/components/common/Button";
import React from "react";

function Footer() {
  return (
    <div>
      <div className="bg- bg-slate-900">
        <div className="container pt-[77px] pb-14">
          <div className="text-15xl font-medium text-white max-w-[900px] m-auto text-center mb-12">
            Join RTS to build a textile circular economy and beyond
          </div>
          <div
            role="button"
            className="bg-emerald-600 text-base font-medium text-slate-900 rounded-full max-w-[157px] m-auto text-center"
          >
            <Button name="Join Us" />
          </div>
        </div>
      </div>
      <div className="bg-emerald-600">
        <div className="container">
          <div className="flex flex-row gap-5 justify-between pt-[70px] pr-[120px] pl-20 pb-11">
            <div role="button">
              <img src="/picture/Frame.svg" alt="" />
            </div>
            <div className="max-w-[333px]">
              <div
                role="button"
                className="text-2xl font-bold text-slate-900 mb-5"
              >
                info@retain2sustain.com
              </div>
              <div className="text-md font-medium text-slate-900 mb-5">
                7th Fl., 186 Nanking E. Rd., Sec. 4, Songshan Dist., Taipei
                105407, Taiwan
              </div>
              <div
                role="button"
                className="text-md font-medium text-slate-900 mb-7"
              >
                TEL 886-2-25786188 <h1>FAX 886-2-25796388</h1>
              </div>
              <div className="text-md font-medium text-slate-900">
                Copyright © 2023 RTS. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
