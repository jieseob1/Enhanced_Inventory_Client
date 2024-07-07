import React from "react";

const AddInventory = () => {

};

export default AddInventory;

const fields = [
  { name: 'productName', label: 'Product Name', type: 'text', value: formData.productName, onChange: handleChange },
  { name: 'quantity', label: 'Quantity', type: 'number', value: formData.quantity, onChange: handleChange },
  { name: 'location', label: 'Location', type: 'text', value: formData.location, onChange: handleChange }
];

return (
  <div>
    <h1>Add Inventory</h1>
    <Form fields={fields} onSubmit={handleSubmit} />
  </div>
);
};

export default AddInventory;