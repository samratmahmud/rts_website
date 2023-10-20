import React from "react";

interface UserProps {
  pic: string;
  name?: string;
  title: string;
  p1?: string;
}

function UserProfile(props: UserProps) {
  const {pic, name, title, p1} = props;
  return (
    <div className="flex lg:flex-row flex-col lg:gap-10 gap-6 items-center">
      <div>
        <img className="w-full" src={pic} alt="" />
      </div>
      <div>
        <div className="md:text-12xl text-7xl font-bold text-slate-900 md:mb-6 mb-3">
          {name}
        </div>
        <div className="md:text-lg text-md text-slate-900 max-w-[604px]">
          {title} <p className="pt-4">{p1}</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
