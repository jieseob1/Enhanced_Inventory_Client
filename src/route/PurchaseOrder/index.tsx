import React, { useState, useEffect } from 'react';
// import Table from '../../components/common/Table';

const PurchaseOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch purchase orders from API
    // setOrders(fetchedData);
  }, []);

  const headers = ['Order ID', 'Supplier', 'Date', 'Total Amount', 'Status'];

  return (
    <div>
      <h1>Purchase Orders</h1>
      {/* <Table headers={headers} data={orders} /> */}
    </div>
  );
};
