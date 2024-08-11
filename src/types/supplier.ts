import { PurchaseOrder } from "./purchaseOrder";

export interface Supplier {
  id: number;
  supplierName: string;
  contactInfo: string;
  address: String;
  supplierType: string; // Change to Enum
  purchaseOrder: PurchaseOrder[];
}