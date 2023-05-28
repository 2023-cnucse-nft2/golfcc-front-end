import React from "react";

interface InfoBoxProps {
  title: string;
  info: string;
}

const InfoBox = ({ title, info }: InfoBoxProps) => {
  return (
    <div className="flex text-bmd mb-[15px] w-[50%]">
      <div className=" text-center font-bold w-[120px] mr-[10px]">{title}</div>
      <div className=" text-center flex-1">{info}</div>
    </div>
  );
};

export default InfoBox;
