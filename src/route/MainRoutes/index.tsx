import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Settings from '../Settings';
import LoginPage from '../Login';
import SignupPage from '../Signup';
import Inventory from '../Inventory';
import ProductDetail from '../ProductDetail';
import InsertProducts from '../InsertProducts';
import InsertProduct from '../InsertProduct';
import Product from '../Product';
import SellerDashboard from '../../components/SellerDashboard';
import InventoryManagement from '../InventoryManagement';
import PurchaseOrderForm from '@/components/PurchaseOrderForm';

const MainRoutes = () => {
  console.log("hihi mainroutes")
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/settings" element={<Settings />} />
      {/* <Route path="/products" element={<Product />} /> */}
      <Route path="/products" element={<SellerDashboard />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/inventoryManagement" element={<InventoryManagement />} />
      <Route path="/productDetail" element={<ProductDetail />} />
      <Route path="/insertProduct" element={<InsertProduct />} />
      <Route path="/insertProducts" element={<InsertProducts />} />
      <Route path="/create-purchase-order" element={<PurchaseOrderForm />} />
    </Routes>
  )
};

export default MainRoutes;