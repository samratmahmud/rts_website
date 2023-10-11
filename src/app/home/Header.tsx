import {url} from "inspector";
import React from "react";

function Header() {
  return (
    <div
      className="bg-no-repeat bg-cover"
      style={{backgroundImage: `url('/picture/Mask group.png')`}}
    >
      <div className="">
        <div className="mb-10 pt-[300px]">
          <img
            className="max-w-[400px] m-auto"
            src="/picture/Group (1).svg"
            alt=""
          />
        </div>
        <div className="text-15xl font-medium text-white shadow-sm pb-[324px] text-center">
          Textile Circularity and Beyond
        </div>
      </div>
    </div>
  );
}

export default Header;
