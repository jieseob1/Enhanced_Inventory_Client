import React,{useState} from 'react';
import { Page, Layout, Card, FormLayout, TextField, Button, ChoiceList, Thumbnail } from '@shopify/polaris';
import { DeleteMinor, DuplicateMinor, ArchiveMinor } from '@shopify/polaris-icons';
import Margin from '../../components/Margin';
function ProductDetailsLayout() {
  // 이 state들은 실제로 데이터를 관리하는 예시입니다. 실제 애플리케이션에서는 API나 상태 관리 라이브러리를 통해 관리될 수 있습니다.
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [productStatus, setProductStatus] = useState(['active']);
  const [vendor, setVendor] = useState('');
  const [type, setType] = useState('');

  return (
    <Page
      backAction={{ content: "Products", url: "/products" }}
      title="Product"
      secondaryActions={[
        {
          content: "Duplicate",
          icon: DuplicateMinor,
          onAction: () => alert("Duplicate action"),
        },
        {
          content: "Archive",
          icon: ArchiveMinor,
          onAction: () => alert("Archive action"),
        },
        {
          content: "Delete",
          icon: DeleteMinor,
          destructive: true,
          onAction: () => alert("Delete action"),
        },
      ]}
      pagination={{
        hasPrevious: true,
        hasNext: true,
      }}
    >
      <Layout>
        <Layout.Section>
          <Card>
            <FormLayout>
              <TextField label="Title" value={title} onChange={setTitle} autoComplete='off'/>
              <TextField
                label="Description"
                value={description}
                onChange={setDescription}
                multiline={4}
                autoComplete='off'
              />
            </FormLayout>
          </Card>
          <Margin top={1} />
          <Card>
            <Thumbnail
              source="https://via.placeholder.com/100x100"
              alt="Black t-shirt front view"
            />
            <Button>Upload Image</Button>
          </Card>
        </Layout.Section>
        <Layout.Section secondary>
          <Card>
            <ChoiceList
              choices={[
                { label: 'Active', value: 'active' },
                { label: 'Draft', value: 'draft' },
                { label: 'Archived', value: 'archived' },
              ]}
              selected={productStatus}
              onChange={setProductStatus} title={undefined}            
            />
          </Card>
          <Margin top={1} />
          <Card>
            <TextField 
              label="Vendor" 
              value={vendor}
              onChange={setVendor}
              autoComplete='off'
            />
            <TextField 
              label="Product type" 
              value={type}
              onChange={setType}
              autoComplete='off'
            />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

export default ProductDetailsLayout;