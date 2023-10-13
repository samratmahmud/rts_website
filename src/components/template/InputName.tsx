import React from "react";

interface inputBox {
  name: string;
}

function InputName(props: inputBox) {
  return (
    <div>
      <div className="text-md font-medium text-slate-900 mb-0.5">
        {props.name}
      </div>
      <input
        className="w-full focus:outline-none bg-[rgba(11,_11,_43,_0.05)] px-4 h-10"
        type="text"
        placeholder="Fill up this file"
      />
    </div>
  );
}

export default InputName;
