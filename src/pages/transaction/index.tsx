import React from "react";
import MenuLayout from "../../layout/menu";
import TransactionTableHeader from "./components/TransactionTableHeader";
import { transactionData } from "../../constants/transaction";
import { dateFormat } from "../../util/util";
import TransactionTableBody from "./components/TransactionTableBody";

const TransactionPage = () => {
  return (
    <MenuLayout title="거래 대기 목록">
      <div className="flex flex-col w-[100%] h-[100%]">
        <TransactionTableHeader />
        <div className="">
          {transactionData.map((transaction) => (
            <TransactionTableBody
              id={transaction.id}
              type={transaction.type}
              buyer={transaction.buyer}
              bargainer={transaction.bargainer}
              registerDate={dateFormat(transaction.registDate)}
            />
          ))}
        </div>
        <div>pagenation</div>
      </div>
    </MenuLayout>
  );
};

export default TransactionPage;
