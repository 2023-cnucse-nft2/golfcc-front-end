import React from "react";

const TransactionTableHeader = () => {
  return (
    <div className="flex w-[100%] py-[16px]">
      <div className="flex-1 flex justify-center items-center">트랜잭션 ID</div>
      <div className="w-[25%] flex justify-center items-center">
        회원권 종류
      </div>
      <div className="w-[10%] flex justify-center items-center">매수자</div>
      <div className="w-[10%] flex justify-center items-center">매도자</div>
      <div className="w-[25%] flex justify-center items-center">
        거래 등록 날짜
      </div>
    </div>
  );
};

export default TransactionTableHeader;
