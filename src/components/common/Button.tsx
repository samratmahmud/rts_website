import React from "react";

interface buttonProps {
  name: string;
}

function Button(props: buttonProps) {
  return (
    <div className="text-base font-medium md:py-3.5 py-3 md:px-9 px-5 rounded-full">
      {props.name}
    </div>
  );
}

export default Button;
