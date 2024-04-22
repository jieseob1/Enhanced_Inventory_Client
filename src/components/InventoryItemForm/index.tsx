// import React, { useState } from 'react';

// const InventoryItemForm = ({ onAdd: any }) => {
//   const [product, setProduct] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [location, setLocation] = useState('');

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const inventoryItem = { product, quantity, location };
//     onAdd(inventoryItem);
//     // 폼 초기화
//     setProduct('');
//     setQuantity('');
//     setLocation('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Product:</label>
//         <select value={product} onChange={(e) => setProduct(e.target.value)}>
//           <option value="">Select a product</option>
//           {/* 제품 목록 동적으로 렌더링 */}
//         </select>
//       </div>
//       <div>
//         <label>Quantity:</label>
//         <input
//           type="number"
//           value={quantity}
//           onChange={(e) => setQuantity(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Location:</label>
//         <input
//           type="text"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//         />
//       </div>
//       <button type="submit">Add Inventory Item</button>
//     </form>
//   );
// }

// export default InventoryItemForm;