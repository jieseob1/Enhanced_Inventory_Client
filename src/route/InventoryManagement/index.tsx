import React, { useState, useCallback } from 'react';
import {
  Page,
  Card,
  DataTable,
  Modal,
  TextContainer,
  Form,
  FormLayout,
  TextField,
  Button,
  Select,
} from '@shopify/polaris';

function InventoryManagement() {
  const [inventoryData, setInventoryData] = useState([
    ['001', 'Item A', '100', 'Location A'],
    ['002', 'Item B', '150', 'Location B'],
    ['003', 'Item C', '75', 'Location C'],
  ]);

  const [modalActive, setModalActive] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleModal = useCallback(() => setModalActive((active) => !active), []);

  const handleInventoryAction = useCallback((type: React.SetStateAction<string>, item = null) => {
    setModalType(type);
    setSelectedItem(item);
    toggleModal();
  }, [toggleModal]);

  const handleSubmit = useCallback((_event: any) => {
    // Handle form submission based on modalType
    // Update inventoryData accordingly
    toggleModal();
  }, [toggleModal]);

  const renderForm = () => {
    switch (modalType) {
      case 'add':
        return (
          <Form onSubmit={handleSubmit}>
            <FormLayout>
              <TextField label="Item ID" type="text" autoComplete="off" />
              <TextField label="Item Name" type="text" autoComplete="off" />
              <TextField label="Quantity" type="number" autoComplete="off" />
              <TextField label="Location" type="text" autoComplete="off" />
              <Button submit>Add Item</Button>
            </FormLayout>
          </Form>
        );
      case 'move':
        return (
          <Form onSubmit={handleSubmit}>
            <FormLayout>
              <Select
                label="From Location"
                options={['Location A', 'Location B', 'Location C']}
              />
              <Select
                label="To Location"
                options={['Location A', 'Location B', 'Location C']}
              />
              <TextField label="Quantity" type="number" autoComplete="off" />
              <Button submit>Move Inventory</Button>
            </FormLayout>
          </Form>
        );
      case 'adjust':
        return (
          <Form onSubmit={handleSubmit}>
            <FormLayout>
              <TextField label="New Quantity" type="number" autoComplete="off" />
              <Select
                label="Reason"
                options={['Damaged', 'Lost', 'Found', 'Other']}
              />
              <Button submit>Adjust Inventory</Button>
            </FormLayout>
          </Form>
        );
      default:
        return null;
    }
  };

  return (
    <Page title="Inventory Management">
      <Card>
        <DataTable
          columnContentTypes={[
            'text',
            'text',
            'numeric',
            'text',
          ]}
          headings={[
            'Item ID',
            'Item Name',
            'Quantity',
            'Location',
          ]}
          rows={inventoryData}
        />
      </Card>
      <div style={{ marginTop: '1rem' }}>
        <Button onClick={() => handleInventoryAction('add')}>Add Inventory</Button>
        <Button onClick={() => handleInventoryAction('move')}>Move Inventory</Button>
        <Button onClick={() => handleInventoryAction('adjust')}>Adjust Inventory</Button>
      </div>
      <Modal
        open={modalActive}
        onClose={toggleModal}
        title={`${modalType.charAt(0).toUpperCase() + modalType.slice(1)} Inventory`}
      >
        <Modal.Section>
          <TextContainer>
            {renderForm()}
          </TextContainer>
        </Modal.Section>
      </Modal>
    </Page>
  );
}

export default InventoryManagement;