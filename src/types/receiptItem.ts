export interface ReceiptItem {
  id: number;
  receiptId: number;
  quantity: number;
  lotNumber?: string;
  expirationDate?: string;
}