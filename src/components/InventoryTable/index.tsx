import React, { useState, useMemo } from "react";

import IndexTable from '../IndexTable';
import LegacyCard from "../LegacyCard";
import { useIndexResourceState } from "../../utils/useIndexResourceState";
import { Product } from "../../route/InsertProducts";
import Link from '../Link';
import Text from "../Text";
import TextField from "../TextField";
import Pagination from "../Pagination";

// 재고 수준 보기: 각 제품의 현재 재고 수준을 확인할 수 있습니다.
// 재고 위치 확인: 제품이 어디에 위치해 있는지 보여줍니다.
// 재고 업데이트: 입고, 출고 및 재고 수준 조정과 같은 작업을 수행할 수 있습니다.
// 재고 이력 및 로그 조회: 재고 변경 이력과 관련 로그를 확인할 수 있습니다.
// 알림 설정: 재고 수준이 특정 기준 이하로 떨어질 때 알림을 설정할 수 있습니다.

interface InventoryItem {
  id: string;
  product: Product;
  quantity: number;
  location: string;

}
const InventoryTable = (inventoryItems: InventoryItem[]) => {
  //product,quantity,location
  //inventory 정보를 받아온다.
  // 괄호에  받아온 정보 넣는다.
  const { selectedResources, allResourcesSelected, handleSelectionChange } = useIndexResourceState(inventoryItems);
  const [query, setQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10); // 페이지당 항목 수 설정

  // 검색 필터 적용
  const filteredItems = useMemo(() => {
    return inventoryItems.filter((item) => {
      return item.product.name.toLowerCase().includes(query.toLowerCase()) || item.location.toLowerCase().includes(query.toLowerCase());
    });
  }, [query, inventoryItems]);

  // 페이지네이션을 위한 항목 분할
  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredItems.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, itemsPerPage, filteredItems]);

  // 페이지네이션을 위한 핸들러
  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const rowMarkup = paginatedItems.map(
    ({ id, product, quantity, location }, index) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>
          <Link
            dataPrimaryLink
            // url={}
            onClick={() => console.log(`clicked ${product.name}`)}
          />
          <Text fontWeight="bold" as="span">
            {location}
          </Text>
          <Text as="span" alignment="end" numeric>
            {quantity}
          </Text>
        </IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  return (
    <>
      <TextField
        value={query}
        onChange={(newValue) => setQuery(newValue)}
        label="Search" // 여기에 label 속성을 추가
        placeholder="Search"
        clearButton
        onClearButtonClick={() => setQuery('')}
        autoComplete="off" // 필요한 경우 autoComplete 속성 추가
      />
      {rowMarkup}
      <Pagination
        hasPrevious={currentPage > 1}
        onPrevious={handlePreviousPage}
        hasNext={currentPage * itemsPerPage < filteredItems.length}
        onNext={handleNextPage}
      />
    </>
  )



};

export default InventoryTable;