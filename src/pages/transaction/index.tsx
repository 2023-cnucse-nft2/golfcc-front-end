import React from "react";
import MenuLayout from "../../layout/menu";
import TransactionTableHeader from "./components/TransactionTableHeader";

const TransactionPage = () => {
  return (
    <MenuLayout title="거래 대기 목록">
      <div className="flex flex-col w-[100%] h-[100%]">
        <TransactionTableHeader />
        <div>body</div>
        <div>pagenation</div>
      </div>
    </MenuLayout>
  );
};

export default TransactionPage;
