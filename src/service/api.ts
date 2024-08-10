// 추후 service split 관련 고민
//Receipt Relate API => 입고

import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:8080/api'
}); // 추후 process.env 써서 환경변수로 변경


export const getExpectedReceipts = () => api.get('/expected-receipts');
export const createReceipt = (receipt) => api.post('/receipts', receipt);
export const updateInspection = (id, inspection) => api.put(`/receipts/${id}/inspection`, inspection);
export const updateLabeling = (id, labeling) => api.put(`/receipts/${id}/labeling`, labeling);

export default api;