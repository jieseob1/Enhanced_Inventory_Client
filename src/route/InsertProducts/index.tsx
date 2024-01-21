import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import Page from '../../components/Page';
import FormLayout from '../../components/FormLayout';
import Form from '../../components/Form';
import Button from '../../components/Button';
import Card from '../../components/Card';
import TextField from '../../components/TextField';
import axios from "axios";
import styled from "styled-components";
import DataTable from '../../components/DataTable';

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
const addProducts = async (products: Product[]) => {
  const response = await axios.post('/api/products', products);
  return response.data;
};
const headings = ['Product Name', 'Price', 'type', 'SKU', 'stockQuantity', 'barcode', 'weight', 'color', 'material'];



const InsertProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const queryClient = useQueryClient(); // cache value
  const mutation = useMutation(addProducts, {
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });

  const handleAddProduct = () => {
    setProducts(prevProducts => [...prevProducts, initialProduct()])
  }

  const handleProductChange = (index: number, field: keyof Product, value: string | number) => {
    const updatedProducts = products.map((product, idx) => {
      if (idx === index) {
        return { ...product, [field]: value };
      }
      return product;
    });
    setProducts(updatedProducts);
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    mutation.mutate(products);
  };
  const rows = products.map((product, index) => [
    <TextField
      label="Product Name"
      value={product.name}
      onChange={(value) => handleProductChange(index, 'name', value)}
      autoComplete="off"
    />,
    <TextField
      label="Price"
      value={product.price}
      onChange={(value) => handleProductChange(index, 'price', value)}
      autoComplete="off"
    />,
    <TextField
      label="type"
      value={product.type}
      onChange={(value) => handleProductChange(index, 'type', value)}
      autoComplete="off"
    />,
    <TextField
      label="SKU"
      value={product.SKU}
      onChange={(value) => handleProductChange(index, 'SKU', value)}
      autoComplete="off"
    />,
    <TextField
      label="stockQuantity"
      value={product.stockQuantity}
      onChange={(value) => handleProductChange(index, 'stockQuantity', value)}
      autoComplete="off"
    />,
    <TextField
      label="barcode"
      value={product.barcode}
      onChange={(value) => handleProductChange(index, 'barcode', value)}
      autoComplete="off"
    />,
    <TextField
      label="weight"
      value={product.weight}
      onChange={(value) => handleProductChange(index, 'weight', value)}
      autoComplete="off"
    />,
    <TextField
      label="color"
      value={product.color}
      onChange={(value) => handleProductChange(index, 'color', value)}
      autoComplete="off"
    />,
    <TextField
      label="material"
      value={product.material}
      onChange={(value) => handleProductChange(index, 'material', value)}
      autoComplete="off"
    />
  ]);

  return (
    <Page title="Add Products">
      <Card>
        <Form onSubmit={handleSubmit}>
          <FormLayout>
            <DataTable
              columnContentTypes={['text', 'numeric']}
              headings={headings}
              rows={rows}
            />
          </FormLayout>
        </Form>
      </Card>
      <Button onClick={handleAddProduct}>Add Another Product</Button>
      <Button>Submit Products</Button>
    </Page>
  )
};

export default InsertProduct;