import { createPurchaseOrder, getAllItems, getAllSuppliers } from "@/service/api";
import { Button, Card, DatePicker, Form, FormLayout, LegacyStack, Page, Range, Select, TextContainer, TextField } from "@shopify/polaris";
import React, { useState, useEffect } from "react";

const PurchaseOrderForm = () => {

  const [supplierId, setSupplierId] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  const [memo, setMemo] = useState('');
  const [items, setItems] = useState([{ itemId: '', quantity: '' }]);
  const [availableItems, setAvailableItems] = useState<{ label: string, value: string }[]>([]);
  const [suppliers, setSuppliers] = useState<{ label: string, value: string }[]>([]);

  useEffect(() => {
    const fetchSuppliersAndItems = async () => {
      const suppliersResponse = await getAllSuppliers();
      setSuppliers(suppliersResponse.map(supplier => ({
        label: supplier.supplierName,
        value: supplier.id.toString()
      })));

      const itemsResponse = await getAllItems();
      setAvailableItems(itemsResponse.map(item => ({
        label: item.name,
        value: item.id.toString()
      })));
    };

    fetchSuppliersAndItems();
  }, []);

  const handleItemChange = (index: number, value: string, name: string) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [name]: value };
    setItems(newItems);
  }
  const handleSubmit = async () => {
    interface PurchaseOrderItem {
      item: { id: number };
      quantity: number;
    }

    const purchaseOrder = {
      orderNumber: '', // Add the orderNumber property
      orderDate: new Date(),
      dueDate: new Date(dueDate),
      status: '', // Add the status property
      // items: items.map((item): PurchaseOrderItem => ({
      //   item: { id: parseInt(item.itemId, 10) },
      //   quantity: parseInt(item.quantity, 10)
      // })),
      // supplier: { id: parseInt(supplierId, 10) },
    };
    await createPurchaseOrder(purchaseOrder);
  };

  const handleAddItem = () => setItems([...items, { itemId: '', quantity: '' }]);

  const handleDateChange = (date: Range) => {
    setDueDate(date.start);
  };

  return (
    <Page title="Create Purchase Order">
      <Card>
        <Form onSubmit={handleSubmit}>
          <FormLayout>
            <Select
              label="Supplier"
              options={suppliers}
              value={supplierId}
              onChange={(value) => setSupplierId(value)}
            />
            <DatePicker
              month={dueDate.getMonth()}
              year={dueDate.getFullYear()}
              onChange={handleDateChange}
              selected={dueDate}
              allowRange={false}
            />
            <TextField
              autoComplete="off"
              label="Memo"
              value={memo}
              onChange={(value) => setMemo(value)}
              multiline={4}
            />
            <TextContainer>
              {items.map((item, index) => (
                <LegacyStack key={index} alignment="center">
                  <Select
                    label="Item"
                    options={availableItems}
                    value={item.itemId}
                    onChange={(value) => handleItemChange(index, value, 'itemId')}
                  />
                  <TextField
                    autoComplete="off"
                    label="Quantity"
                    type="number"
                    value={item.quantity}
                    onChange={(value) => handleItemChange(index, value, 'quantity')}
                  />
                </LegacyStack>
              ))}
              <Button onClick={handleAddItem}>Add Another Item</Button>
            </TextContainer>
            <Button submit primary>Create Purchase Order</Button>
          </FormLayout>
        </Form>
      </Card>
    </Page>
  );
};

export default PurchaseOrderForm;
