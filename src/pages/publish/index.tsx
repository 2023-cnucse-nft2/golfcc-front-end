import React from "react";
import MenuLayout from "../../layout/menu";
import PublishInput from "./components/PublishInput";

const PublishPage = () => {
  return (
    <MenuLayout title="토큰 발행">
      <div className="flex-1 flex flex-col justify-center items-center">
        <div>
          <PublishInput title="골프장명" />
          <PublishInput title="분양가(ETH)" />
          <PublishInput title="수령자" />
        </div>
        <div className="flex justify-center items-center">
          <div className="px-[90px] py-[15px] bg-primary text-md text-white select-none cursor-pointer">
            발행하기
          </div>
        </div>
      </div>
    </MenuLayout>
  );
};

export default PublishPage;
