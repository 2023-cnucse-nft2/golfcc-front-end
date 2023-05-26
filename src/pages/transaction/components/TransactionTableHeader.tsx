import React from "react";

const TransactionTableHeader = () => {
  return (
    <div className="text-md flex min-w-[1060px] w-[100%] py-[16px] px-[10px] font-bold">
      <div className="flex-1 flex justify-center items-center">트랜잭션 ID</div>
      <div className="w-[20%] flex justify-center items-center">
        회원권 종류
      </div>
      <div className="w-[10%] flex justify-center items-center">매수자</div>
      <div className="w-[10%] flex justify-center items-center">매도자</div>
      <div className="w-[20%] flex justify-center items-center">
        거래 등록 날짜
      </div>
    </div>
  );
};

export default TransactionTableHeader;
