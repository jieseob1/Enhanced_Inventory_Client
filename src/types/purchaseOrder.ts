import { PurchaseOrderItem } from "./purchaseOrderItem";
import { Supplier } from "./supplier";

export interface PurchaseOrder {
  orderNumber: string;
  orderDate: Date; // LocalDate -> string
  dueDate: Date; // LocalDate -> string
  status: string;
  items?: PurchaseOrderItem[]; // 1개의 구매 주문에는 여러개의 purchaseOrderItem이 있을 수 있다.
  supplier?: Supplier; // 여러개의 구매 주문은 1개의 공급자에게 발주될 수 있다.
}