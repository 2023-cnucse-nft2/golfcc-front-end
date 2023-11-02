import React from "react";
import MenuLayout from "../../../layout/menu";
import { transactionData } from "../../../constants/transaction";
import { useParams } from "react-router-dom";
import InfoBox from "../components/InfoBox";
import { dateFormat, priceFormat } from "../../../util/util";

const TransactionDetailPage = () => {
  const { id } = useParams();
  const data = transactionData.find((tx) => tx.id == id);
  return (
    <MenuLayout title="거래 상세 정보">
      <div className="md:flex md:flex-col md:justify-center md:items-center w-[100%] h-[100%]">
        <div className="py-[56px] w-[100%] flex flex-col items-center min-w-[1060px]">
          <InfoBox title="트랜잭션 ID" info={data!.id} />
          <InfoBox title="골프장명" info={data!.type} />
          <InfoBox title="매수자" info={data!.buyer} />
          <InfoBox title="매도자" info={data!.bargainer} />
          <InfoBox
            title="회원권 기간"
            info={
              dateFormat(data!.startDate) + " - " + dateFormat(data!.endDate)
            }
          />
          <InfoBox title="금액" info={priceFormat(data!.price) + " ETH"} />
          <InfoBox title="수수료" info={priceFormat(data!.charge) + " ETH"} />
          <InfoBox title="거래 등록 날짜" info={dateFormat(data!.registDate)} />
        </div>
        <div className="flex items-center justify-center w-[100%] min-w-[1060px]">
          <div className="py-[12px] px-[85px] bg-primary text-bmd text-white mr-[20px] select-none cursor-pointer">
            거래 승인
          </div>
          <div className="py-[12px] px-[85px] bg-primaryRed text-bmd text-white select-none cursor-pointer">
            거래 취소
          </div>
        </div>
      </div>
    </MenuLayout>
  );
};

export default TransactionDetailPage;
