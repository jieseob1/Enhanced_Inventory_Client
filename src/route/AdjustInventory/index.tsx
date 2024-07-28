// // pages/inventory/AdjustInventory.js
// import React, { useState } from 'react';
// import Form from '../../components/common/Form';

// const AdjustInventory = () => {
//   const [formData, setFormData] = useState({
//     productId: '',
//     adjustmentQuantity: '',
//     reason: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Submit form data to API
//   };

//   const fields = [
//     { name: 'productId', label: 'Product ID', type: 'text', value: formData.productId, onChange: handleChange },
//     { name: 'adjustmentQuantity', label: 'Adjustment Quantity', type: 'number', value: formData.adjustmentQuantity, onChange: handleChange },
//     { name: 'reason', label: 'Reason', type: 'text', value: formData.reason, onChange: handleChange }
//   ];

//   return (
//     <div>
//       <h1>Adjust Inventory</h1>
//       <Form fields={fields} onSubmit={handleSubmit} />
//     </div>
//   );
// };