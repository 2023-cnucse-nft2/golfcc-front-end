import React from "react";

interface IPageButton {
  selected: boolean;
  page: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const PageButton = ({ selected, page, setCurrentPage }: IPageButton) => {
  return (
    <div
      className={`flex justify-center items-center text-sm w-[32px] h-[32px] rounded-[50%] ${
        selected && "bg-primary text-white"
      } select-none cursor-pointer`}
      onClick={() => setCurrentPage(page)}
    >
      {page}
    </div>
  );
};

export default PageButton;
