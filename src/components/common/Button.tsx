import React from "react";

interface buttonProps {
  name: string;
}

function Button(props: buttonProps) {
  return (
    <div className="text-base font-medium py-3.5 px-9 rounded-full">
      {props.name}
    </div>
  );
}

export default Button;
