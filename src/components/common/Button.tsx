import React from "react";

interface buttonProps {
  name: string;
  className?: string;
}

function Button(props: buttonProps) {
  const {name, className} = props;
  return (
    <div
      className={`${className} text-base font-medium md:py-3.5 py-3 md:px-9 px-7 rounded-full text-center whitespace-nowrap inline-block`}
    >
      {name}
    </div>
  );
}

export default Button;
