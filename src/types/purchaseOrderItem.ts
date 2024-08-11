import { Item } from "./item";
import { PurchaseOrder } from "./purchaseOrder";

export interface PurchaseOrderItem {
  id: number;
  productCode: number;
  quantity: number;
  unitPrice: number;
  purchaseOrder: PurchaseOrder;
  item: Item;
}