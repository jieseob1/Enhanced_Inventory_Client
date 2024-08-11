export interface ExpectedReceipt {
  id: number;
  expectedData: string; //LocalDateTime
  expectedQuantity: number;
  status: string; // 추후에 Enum으로 변경할 수 있으면 하기 => 입고 상태에 대한 Enum
  purchaseOrder: string; //PurchaseOrder와 연관된 식별자 => 나중에 purchaseOrder로 변경 
}