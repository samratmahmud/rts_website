import Button from "@/components/common/Button";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div>
      <div className="bg- bg-slate-900">
        <div className="container pt-[77px] pb-14">
          <div className="md:text-15xl text-4xl font-medium text-white max-w-[900px] m-auto text-center md:mb-12 mb-14">
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
          <div className="flex md:flex-row flex-col gap-[107px] justify-between pt-[70px] md:pb-11 pb-6">
            <Link href={"/"} className="m-auto md:ml-0 md:mt-0">
              <img src="/picture/Frame.svg" alt="" />
            </Link>
            <div className="md:max-w-[333px]">
              <div
                role="button"
                className="md:text-2xl text-xl font-bold text-slate-900 md:mb-5 mb-3 text-center md:text-left"
              >
                info@retain2sustain.com
              </div>
              <div className="text-md font-medium text-slate-900 md:mb-5 text-center md:text-left">
                7th Fl., 186 Nanking E. Rd., Sec. 4, Songshan Dist., Taipei
                105407, Taiwan
              </div>
              <div
                role="button"
                className="text-md font-medium text-slate-900 md:mb-7 mb-14 flex md:flex-col justify-center gap-2 md:gap-0"
              >
                <p>TEL 886-2-25786188</p> <p className="md:hidden"> / </p>{" "}
                <p>FAX 886-2-25796388</p>
              </div>
              <div
                role="button"
                className="md:text-md text-xs font-medium text-slate-900 text-center  md:text-left"
              >
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
