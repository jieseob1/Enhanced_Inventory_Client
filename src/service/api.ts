import { ExpectedReceipt } from "@/types/expectedReceipt";
import { Receipt } from "@/types/Receipt";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:8080/api'
});


export const getExpectedReceipts = async (): Promise<ExpectedReceipt[]> => {
  try {
    const response = await api.get<ExpectedReceipt[]>('/expected-receipts');
    return response.data;
  } catch (error) {
    console.error('Error fetching expected receipts:', error);
    throw error;
  }
}
export const createReceipt = async (receipt: Receipt): Promise<void> => {
  try {
    await api.post('/receipts', receipt)
  } catch (error) {
    console.error('Error creating receipt:', error);
    throw error;
  }

};
export const getReceipts = async (): Promise<Receipt[]> => {
  try {
    const response = await api.get<Receipt[]>('/receipts');
    return response.data;
  } catch (error) {
    console.error('Error fetching receipts:', error);
    throw error;
  }
}
export default api;