import React, { useEffect, useState } from "react";
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";
import { ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";
import { ReactComponent as DoubleArrowL } from "../../../assets/DoubleArrowL.svg";
import { ReactComponent as DoubleArrowR } from "../../../assets/DoubleArrowR.svg";
import PageButton from "./PageButton";
import { transactionModel } from "../../../model/transaction";

interface pagenationProps {
  data: transactionModel[];
  setList: React.Dispatch<React.SetStateAction<transactionModel[] | undefined>>;
}

const Pagenation = ({ data, setList }: pagenationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageLimit = 8;
  const totalData = data.length;
  const totalPage = Math.floor((totalData + (pageLimit - 1)) / pageLimit);
  const pageButtonNumber = totalPage > 4 ? 5 : totalPage;

  useEffect(() => {
    if (totalPage == 0) setCurrentPage(0);
    if (data.length > pageLimit) {
      setList(data.slice(0, pageLimit));
      return;
    }
    setList(data.slice(0, data.length));
  }, []);

  useEffect(() => {
    if (currentPage == totalPage) {
      setList(data.slice(pageLimit * (currentPage - 1), data.length - 1));
    }
    setList(data.slice(pageLimit * (currentPage - 1), pageLimit * currentPage));
  }, [currentPage]);

  return (
    <div className="flex justify-center py-[20px] w-[100%] min-w-[1060px]">
      <div className="flex justify-center items-center w-[256px]">
        {currentPage <= 1 ? (
          <>
            <div className="mr-[10px] w-[14px]"></div>
            <div className="mr-[10px] w-[14px]"></div>
          </>
        ) : (
          <>
            <DoubleArrowL
              width={14}
              className={`mr-[10px] select-none cursor-pointer`}
              onClick={() => setCurrentPage(1)}
            />
            <LeftArrow
              width={14}
              className={`mr-[10px] select-none cursor-pointer `}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            />
          </>
        )}
        {Array(pageButtonNumber)
          .fill(0)
          .map((_, i) => {
            let start = currentPage - 2;
            if (start < 1) start = 1;
            if (currentPage + 2 > totalPage)
              start = totalPage - (pageButtonNumber - 1);

            return (
              <PageButton
                setCurrentPage={setCurrentPage}
                selected={start + i == currentPage ? true : false}
                page={start + i}
                key={start + i}
              />
            );
          })}
        {currentPage == totalPage ? (
          <>
            <div className="ml-[10px] w-[14px]"></div>
            <div className="ml-[10px] w-[14px]"></div>
          </>
        ) : (
          <>
            <RightArrow
              width={14}
              className="ml-[10px] select-none cursor-pointer"
              onClick={() => setCurrentPage((prev) => prev + 1)}
            />
            <DoubleArrowR
              width={14}
              className="ml-[10px] select-none cursor-pointer"
              onClick={() => setCurrentPage(totalPage)}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Pagenation;
