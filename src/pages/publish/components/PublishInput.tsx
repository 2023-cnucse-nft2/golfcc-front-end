import React from "react";
interface publishInputProp {
  title: string;
}
const PublishInput = ({ title }: publishInputProp) => {
  return (
    <div className="flex pr-[60px] mb-[17px]">
      <span className=" w-[110px] text-md mr-[10px] p-[9px]">{title}</span>
      <input className=" w-[300px] border border-inputgray p-[7px]" />
    </div>
  );
};

export default PublishInput;
