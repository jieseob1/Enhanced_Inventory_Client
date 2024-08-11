import { ExpectedReceipt } from "./expectedReceipt";
import { ReceiptItem } from "./receiptItem";

export interface Receipt {
  id: number;
  receiptData: string; //LocalDateTime
  size: string;
  temperatrueCondition: string;
  status: string;
  expectedReceipt: ExpectedReceipt; // 예상 입고와 연관된 식별자
  receiptItems: ReceiptItem[]
}