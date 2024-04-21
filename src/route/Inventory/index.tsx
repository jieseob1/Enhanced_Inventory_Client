import React, { useState, useEffect, useCallback } from "react";

import axios from "axios";
import Card from '../../components/Card';
import Page from '../../components/Page';
import { useNavigate } from "react-router-dom";
import Table from "../../components/InventoryTable";
import { useQuery } from "react-query";
import InventoryIndexTable from "../../components/InventoryIndexTable";


interface InventoryItem {
  id: string;
  product: {
    name: string;
  };
  quantity: number;
  location: string;
}

function disambiguateLabel(key: any, value: any) {
  switch (key) {
    case "type":
      return value.map((val: any) => `type: ${val}`).join(", ");
    case "status":
      return value.map((val: any) => `status: ${val}`).join(", ");
    default:
      return value;
  }
}
// const fetchInventoryItems = () => {
//   return axios.get( //Todo: change Later
//     "http://localhost:8080/inventories"
//   )
// };

function isEmpty(value: any) {
  if (Array.isArray(value)) {
    return value.length === 0;
  } else {
    return value === "" || value == null;
  }
}
const sleep = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

const Inventory = () => {
  const navigate = useNavigate();

  // const { isLoading, data, isError, error } = useQuery("get-inventories", fetchInventoryItems);
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

  const inventoryItems = [
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
      product: {
        name: "hello3"
      },
      quantity: 300,
      location: "us-3"
    },
    {
      id: "1015",
      product: {
        name: "hello2"
      },
      quantity: 200,
      location: "us-2"
    },
    {
      id: "1014",
      product: {
        name: "hello1"
      },
      quantity: 100,
      location: "us-1"
    },
  ];
  const resourceName = {
    singular: "product",
    plural: "products",
  };

  const [searchText, setSearchText] = useState('');

  const filteredData = inventoryItems.filter((item) =>
    item.product.name.toLowerCase().includes(searchText.toLowerCase())
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
  // const { selectedResources, allResourcesSelected, handleSelectionChange } =
  //   useIndexResourceState(products);


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
        <InventoryIndexTable<InventoryItem>
          title="Inventory"
          searchLabel="Search by product name"
          data={filteredData}
          columns={[
            { key: 'id', header: 'ID' },
            { key: 'product', header: 'Product', render: (item) => item.product.name },
            { key: 'quantity', header: 'Quantity' },
            { key: 'location', header: 'Location' },
          ]}
          // actions={['Edit', 'Delete']}
          onSearch={handleSearch}
          onPreviousPage={handlePreviousPage}
          onNextPage={handleNextPage}
        />
      </Card>
    </Page>
  );
};

export default Inventory;