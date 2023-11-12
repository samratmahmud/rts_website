import React from "react";

function Header() {
  return (
    <div className="bg-no-repeat bg-cover md:bg-homePage bg-homePageMV">
      <div className="container">
        <div className="md:mb-16 mb-12 md:pt-[295px] pt-[144px]">
          <img
            className="max-w-[269px] md:max-w-[420px] m-auto"
            src="/picture/Group (1).svg"
            alt=""
          />
        </div>
        <div className="md:text-15xl text-6xl font-medium text-white shadow-sm md:pb-[324px] pb-[228px] font-roc-grotesk text-center">
          Textile Circularity and Beyond
        </div>
      </div>
    </div>
  );
}

export default Header;
