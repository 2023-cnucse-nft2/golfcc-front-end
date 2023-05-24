import { ReactComponent as Ticket } from "../assets/Ticket.svg";
import { ReactComponent as QR } from "../assets/QR.svg";
interface InavMenu {
  id: number;
  svg: React.FC<React.SVGProps<SVGSVGElement>>;
  title: String;
}

export const navMenu: InavMenu[] = [
  {
    id: 1,
    svg: Ticket,
    title: "토큰 발행",
  },
  {
    id: 2,
    svg: QR,
    title: "거래 대기 목록",
  },
];
