import React, { useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import TextField from '../TextField';
import { Form } from "react-router-dom";
import { FormLayout } from "@shopify/polaris";

interface Product {
  id: string;
  productImage: string;
  name: string;
  description: string;
  price: string;
  status: string;
  type: string;
  SKU: string;
  stockQuantity: string;
  barcode: string;
  weight: string;
  color: string;
  material: string;
  Vendor: string;
}

const initialProduct = (): Product => {
  return {
    id: '',
    productImage: '',
    name: '',
    description: '',
    price: '',
    status: '',
    type: '',
    SKU: '',
    stockQuantity: '',
    barcode: '',
    weight: '',
    color: '',
    material: '',
    Vendor: ''
  };
};

const addProduct = async (product: Product) => {
  const response = await axios.post('/api/product', product);
  return response.data;
};
const headings = [
  'Product Name',
  'Price',
  'type',
  'SKU',
  'stockQuantity',
  'barcode',
  'weight',
  'color',
  'material'];

const InsertProduct = () => {
  const [product, setProduct] = useState<Product>(initialProduct);

  const queryClient = useQueryClient(); // cache value
  const mutation = useMutation(addProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });

  const handleProductChange = (field: keyof Product, value: string | number) => {
    setProduct(prevProductState => ({
      ...prevProductState,
      [field]: value,
    }))
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    mutation.mutate(product);
  };
  const row = (
    <>
      <TextField
        label="Product Name"
        value={product.name}
        onChange={(value) => handleProductChange('name', value)}
        autoComplete="off"
      />
      <TextField
        label="Price"
        value={product.price}
        onChange={(value) => handleProductChange('price', value)}
        autoComplete="off"
      />
      <TextField
        label="type"
        value={product.type}
        onChange={(value) => handleProductChange('type', value)}
        autoComplete="off"
      />
      <TextField
        label="SKU"
        value={product.SKU}
        onChange={(value) => handleProductChange('SKU', value)}
        autoComplete="off"
      />
      <TextField
        label="stockQuantity"
        value={product.stockQuantity}
        onChange={(value) => handleProductChange('stockQuantity', value)}
        autoComplete="off"
      />
      <TextField
        label="barcode"
        value={product.barcode}
        onChange={(value) => handleProductChange('barcode', value)}
        autoComplete="off"
      />
      <TextField
        label="weight"
        value={product.weight}
        onChange={(value) => handleProductChange('weight', value)}
        autoComplete="off"
      />,
      <TextField
        label="color"
        value={product.color}
        onChange={(value) => handleProductChange('color', value)}
        autoComplete="off"
      />
      <TextField
        label="material"
        value={product.material}
        onChange={(value) => handleProductChange('material', value)}
        autoComplete="off"
      />
    </>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <FormLayout>
        {row}
      </FormLayout>
    </Form>
  )

}
