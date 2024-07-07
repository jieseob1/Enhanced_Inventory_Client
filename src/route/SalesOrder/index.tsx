import React, { useState, useEffect } from 'react';
import Table from '../../components/common/Table';

const SalesOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch sales orders from API
    // setOrders(fetchedData);
  }, []);

  const headers = ['Order ID', 'Customer', 'Date', 'Total Amount', 'Status'];

  return (
    <div>
      <h1>Sales Orders</h1>
      <Table headers={headers} data={orders} />
    </div>
  );
};