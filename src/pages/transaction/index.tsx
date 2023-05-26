import MenuLayout from "../../layout/menu";
import TransactionTableHeader from "./components/TransactionTableHeader";
import { transactionData } from "../../constants/transaction";
import { dateFormat } from "../../util/util";
import TransactionTableBody from "./components/TransactionTableBody";
import Pagenation from "./components/Pagenation";
import { useEffect, useState } from "react";
import { transactionModel } from "../../model/transaction";

const TransactionPage = () => {
  const [transactionList, setTransactionList] = useState<transactionModel[]>();
  return (
    <MenuLayout title="거래 대기 목록">
      <div className="flex flex-col w-[100%] h-[100%] overflow-y-scroll">
        <TransactionTableHeader />
        <div className="h-[80%]">
          {transactionList?.map((transaction) => (
            <TransactionTableBody
              id={transaction.id}
              type={transaction.type}
              buyer={transaction.buyer}
              bargainer={transaction.bargainer}
              registerDate={dateFormat(transaction.registDate)}
              key={transaction.id}
            />
          ))}
        </div>
        <Pagenation data={transactionData} setList={setTransactionList} />
      </div>
    </MenuLayout>
  );
};

export default TransactionPage;
