import React from "react";

interface TransactionBodyT {
  id: string;
  type: string;
  buyer: string;
  bargainer: string;
  registerDate: string;
}

const TransactionTableBody = ({
  id,
  type,
  buyer,
  bargainer,
  registerDate,
}: TransactionBodyT) => {
  return (
    <div className="text-md flex w-[100%] min-w-[1060px] py-[16px] px-[10px] hover:bg-secondary hover:text-white select-none cursor-pointer">
      <div className="flex-1 flex justify-center items-center">{id}</div>
      <div className="w-[20%] flex justify-center items-center">{type}</div>
      <div className="w-[10%] flex justify-center items-center">{buyer}</div>
      <div className="w-[10%] flex justify-center items-center">
        {bargainer}
      </div>
      <div className="w-[20%] flex justify-center items-center">
        {registerDate}
      </div>
    </div>
  );
};

export default TransactionTableBody;
