import React, { useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import TextField from '../../components/TextField';
import MultipleDropZone from '../../components/DropZone/MultipleDropZone'
import Card from '../../components/Card';
import Page from '../../components/Page';
import Grid from '../../components/Grid';
import Button from '../../components/Button';
import Form from '../../components/Form';
import FormLayout from '../../components/FormLayout';

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
  console.log("hi insertproduct")
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
  console.log("middle insert")

  return (
    <Page title="Add Product">
      <Form onSubmit={handleSubmit}>
        <FormLayout>
          <Grid>
            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
              <Card>
                <MultipleDropZone />
              </Card>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
              <Card>
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
                />
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
              </Card>
            </Grid.Cell>
          </Grid>
          <Button submit>Submit Products</Button>
        </FormLayout>
      </Form >
    </Page >
  )

};

export default InsertProduct;