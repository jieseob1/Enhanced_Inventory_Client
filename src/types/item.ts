export interface Item {
  id: number;
  name: string;
  specification: string;
  unit: string;
  category: string;
  barcode: string;
  image: string;
  price: string;
  stockAlertLevel?: number;
  // inventories: Inventory[];
}