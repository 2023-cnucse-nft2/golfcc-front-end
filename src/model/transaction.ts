export interface transactionModel {
  id: string;
  type: string;
  buyer: string;
  bargainer: string;
  startDate: Date;
  endDate: Date;
  price: number;
  charge: number;
  registDate: Date;
}
