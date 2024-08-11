import { ExpectedReceipt } from "@/types/expectedReceipt";
import { PurchaseOrder } from "@/types/purchaseOrder";
import { Receipt } from "../types/receipt";
import { Supplier } from "@/types/supplier";
import axios from "axios";
import { Item } from "@/types/item";

const api = axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:8080/api'
});


const handleApiCall = async <T>(apiCall: Promise<{ data: T }>): Promise<T> => {
  try {
    const response = await apiCall;
    return response.data;
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
};

export const getExpectedReceipts = async (): Promise<ExpectedReceipt[]> => {
  return handleApiCall(api.get<ExpectedReceipt[]>('/expected-receipts'));
}

export const createReceipt = async (receipt: Receipt): Promise<void> => {
  await handleApiCall(api.post('/receipts', receipt));
}

export const getReceipts = async (): Promise<Receipt[]> => {
  return handleApiCall(api.get<Receipt[]>('/receipts'));
}

//purchase order

export const createPurchaseOrder = async (purchaseOrder: PurchaseOrder) => {
  handleApiCall(api.post('/purchase-orders', purchaseOrder));
};
export const getAllSuppliers = async (): Promise<Supplier[]> => {
  return handleApiCall(api.get<Supplier[]>('/suppliers'));
};
export const getAllItems = async (): Promise<Item[]> => {
  return await handleApiCall(api.get('/items'));
};

export default api;