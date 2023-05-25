import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 h-[100%]">
      <div className="w-[20%] min-w-[300px] flex justify-center mb-[10px]">
        <span>지갑 주소로 로그인 해주세요.</span>
      </div>
      <div className="flex min-w-[300px]">
        <div className="flex flex-col justify-between mr-[10px]">
          <input className=" border border-inputgray p-[7px]" />
          <input className=" border border-inputgray p-[7px]" />
        </div>
        <div className="py-[35px] px-[22.5px] bg-primary text-white text-md cursor-pointer select-none">
          로그인
        </div>
      </div>
      <div className="h-[150px]"></div>
    </div>
  );
};

export default LoginPage;
