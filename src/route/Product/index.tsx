import React, { useState, useEffect, useCallback } from "react";

import axios from "axios";
import Card from '../../components/Card';
import Page from '../../components/Page';
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import InventoryIndexTable from "../../components/InventoryIndexTable";
import { DeleteMinor } from "@shopify/polaris-icons";
import { sleep } from "../../utils/tableUtil";



interface ProductItem {
  id: string
  name: string;
  description: string;
  price: number; // bigdecimal
  status: string; // 추후 enum값
  type: string;
  SKU: string;
  stockQuantity: number;
  barcode: string;
  weight: string;
  color: string;
  material: string;
  vendor: string;
}

// const fetchProductItems = () => {
//   return axios.get( //Todo: change Later
//     "http://localhost:8080/inventories"
//   )
// };

// promotedBulkActions 함수화
// bulkActions 함수화

const promotedBulkActions = [
  {
    title: 'Export',
    actions: [
      {
        content: 'Export as PDF',
        onAction: () => console.log('Todo: implement PDF exporting'),
      },
      {
        content: 'Export as CSV',
        onAction: () => console.log('Todo: implement CSV exporting'),
      },
    ]
  }
];

const bulkActions = [
  {
    icon: DeleteMinor,
    destructive: true,
    content: 'Delete customers',
    onAction: () => console.log('Todo: implement bulk delete'),
  }
];


const Product = () => {
  const navigate = useNavigate();

  // const { isLoading, data, isError, error } = useQuery("get-inventories", fetchProductItems);
  // console.log("data =>", data)
  const [itemStrings, setItemStrings] = useState([
    "All",
    "Active",
    "Draft",
    "Archived",
  ]);
  const deleteView = (index: any) => {
    const newItemStrings = [...itemStrings];
    newItemStrings.splice(index, 1);
    setItemStrings(newItemStrings);
    setSelected(0);
  };
  const duplicateView = async (name: any) => {
    setItemStrings([...itemStrings, name]);
    setSelected(itemStrings.length);
    await sleep(1);
    return true;
  };
  const tabs = itemStrings.map((item, index) => ({
    content: item,
    index,
    onAction: () => { },
    id: `${item}-${index}`,
    isLocked: index === 0,
    actions:
      index === 0
        ? []
        : [
          {
            type: "rename",
            onAction: () => { },
            // onPrimaryAction: async (value:any) => {
            //   const newItemsStrings = tabs.map((item, idx) => {
            //     if (idx === index) {
            //       return value;
            //     }
            //     return item.content;
            //   });
            //   await sleep(1);
            //   setItemStrings(newItemsStrings);
            //   return true;
            // },
          },
          {
            type: "duplicate",
            onPrimaryAction: async (name: any) => {
              await sleep(1);
              duplicateView(name);
              return true;
            },
          },
          {
            type: "edit",
          },
          {
            type: "delete",
            onPrimaryAction: async () => {
              await sleep(1);
              deleteView(index);
              return true;
            },
          },
        ],
  }));
  const [selected, setSelected] = useState(0);
  const onCreateNewView = async (value: any) => {
    await sleep(500);
    setItemStrings([...itemStrings, value]);
    setSelected(itemStrings.length);
    return true;
  };

  const [sortSelected, setSortSelected] = useState(["product asc"]);
  const [mode, setMode] = useState('');
  const onHandleCancel = () => { };
  const onHandleSave = async () => {
    await sleep(1);
    return true;
  };
  const primaryAction =
    selected === 0
      ? {
        type: "save-as",
        onAction: onCreateNewView,
        disabled: false,
        loading: false,
      }
      : {
        type: "save",
        onAction: onHandleSave,
        disabled: false,
        loading: false,
      };
  const [status, setStatus] = useState(undefined);
  const [type, setType] = useState(undefined);
  const [queryValue, setQueryValue] = useState("");
  const handleStatusChange = useCallback((value: any) => setStatus(value), []);
  const handleTypeChange = useCallback((value: any) => setType(value), []);
  const handleFiltersQueryChange = useCallback(
    (value: any) => setQueryValue(value),
    []
  );
  const handleStatusRemove = useCallback(() => setStatus(undefined), []);
  const handleTypeRemove = useCallback(() => setType(undefined), []);
  const handleQueryValueRemove = useCallback(() => setQueryValue(""), []);
  const handleFiltersClearAll = useCallback(() => {
    handleStatusRemove();
    handleTypeRemove();
    handleQueryValueRemove();
  }, [handleStatusRemove, handleQueryValueRemove, handleTypeRemove]);

  const ProductItems: ProductItem[] = [
    // {
    //   id: "1020",
    //   price: "$200",
    //   product: "1ZPRESSO | J-MAX Manual Coffee Grinder",
    //   status: <Badge status="success">Active</Badge>,
    //   inventory: "20 in stock",
    //   type: "Brew Gear",
    //   vendor: "Espresso Shot Coffee",
    // },
    {
      id: "1016",
      name: "hello1",
      description: "hello1",
      price: 100,
      status: "Active",
      type: "Brew Gear",
      SKU: "SKU-1",
      stockQuantity: 300,
      barcode: "barcode-1",
      weight: "weight-1",
      color: "color-1",
      material: "material-1",
      vendor: "Espresso Shot Coffee",
    },
    {
      id: "1017",
      name: "hello2",
      description: "hello2",
      price: 200,
      status: "Active",
      type: "Brew Gear-2",
      SKU: "SKU-2",
      stockQuantity: 200,
      barcode: "barcode-2",
      weight: "weight-2",
      color: "color-2",
      material: "material-2",
      vendor: "Espresso Shot Coffee",
    },
    {
      id: "1018",
      name: "hello3",
      description: "hello3",
      price: 300,
      status: "Active",
      type: "Brew Gear-3",
      SKU: "SKU-3",
      stockQuantity: 300,
      barcode: "barcode-3",
      weight: "weight-3",
      color: "color-3",
      material: "material-3",
      vendor: "Espresso Shot Coffee",
    },
  ];
  const resourceName = {
    singular: "product",
    plural: "products",
  };

  const [searchText, setSearchText] = useState('');

  const filteredData = ProductItems.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  const handlePreviousPage = () => {
    // 이전 페이지로 이동하는 로직 구현
  };

  const handleNextPage = () => {
    // 다음 페이지로 이동하는 로직 구현
  };


  return (
    <Page
      fullWidth
      title={"Invenotry Management"}
      // primaryAction={{
      //   content: "Add product",
      //   onAction: () => handleAddProduct()
      // }}
      secondaryActions={[
        {
          content: "Export",
          accessibilityLabel: "Export product list",
          onAction: () => alert("Export action"),
        },
        {
          content: "Import",
          accessibilityLabel: "Import product list",
          onAction: () => alert("Import action"),
        },
      ]}
    >
      <Card padding="0">
        <InventoryIndexTable<ProductItem>
          title="Inventory"
          searchLabel="Search by product name"
          data={filteredData}
          columns={[
            { key: 'id', header: 'ID' },
            { key: 'name', header: 'Name' },
            { key: 'description', header: 'Description' },
            { key: 'price', header: 'Price' },
            { key: 'status', header: 'Status' },
            { key: 'type', header: 'Type' },
            { key: 'SKU', header: 'SKU' },
            { key: 'stockQuantity', header: 'Stock Quantity' },
            { key: 'barcode', header: 'Barcode' },
            { key: 'weight', header: 'Weight' },
            { key: 'color', header: 'Color' },
            { key: 'material', header: 'Material' },
            // { key: 'product', header: 'Product', render: (item) => item.product.name },
          ]}
          // actions={['Edit', 'Delete']}
          onSearch={handleSearch}
          onPreviousPage={handlePreviousPage}
          onNextPage={handleNextPage}
          promotedBulkActions={promotedBulkActions}
          bulkActions={bulkActions}
          emptyStateTitle="No Inventory Yet"
          emptyStateDescrpition="Try changing the filters or search term"
        />
      </Card>
    </Page>
  );
};

export default Product;