import React from "react";
import { Route, Routes } from 'react-router-dom';
export const InventoryRoutes = () => (
  <Routes>
    <Route path="/inventory/list" component={InventoryList} />
    <Route path="/inventory/add" component={AddInventory} />
    <Route path="/inventory/adjust" component={AdjustInventory} />
  </Routes>
);
