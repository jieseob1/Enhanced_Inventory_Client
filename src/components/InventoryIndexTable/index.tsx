import React, { useCallback, useState, useMemo } from 'react';
import { Button, IndexTable, Pagination, TextField, useIndexResourceState, Select } from '@shopify/polaris';
import { IndexTableHeading } from '@shopify/polaris/build/ts/src/components/IndexTable';
import { NonEmptyArray } from '@shopify/polaris/build/ts/src/types';
import LegacyCard from '../LegacyCard';
import { Box } from '@shopify/polaris';
import { BulkActionsProps } from '@shopify/polaris/build/ts/src/components/BulkActions';
import EmptyState from '../EmptyState';

interface TableColumn<T> {
  key: keyof T;
  header: string;
  render?: (item: T) => React.ReactNode;
  alignment?: 'start' | 'center' | 'end';
}
interface TableProps<T> {
  title: string;
  searchLabel: string;
  data: T[];
  columns: TableColumn<T>[];
  actions?: string[];
  onSearch: (searchText: string) => void;
  onPreviousPage: () => void;
  onNextPage: () => void;
  selectedItemsCount?: number | "All" | undefined;
  promotedBulkActions?: BulkActionsProps['promotedActions'];
  bulkActions?: BulkActionsProps['actions'];
  emptyStateTitle: string;
  emptyStateDescrpition: string;
  filters?: { label: string; value: string }[];
  onFilterChange?: (filterValue: string) => void;
}

const InventoryIndexTable = <T extends Record<string, any>>({
  title,
  searchLabel,
  data,
  columns,
  actions,
  onSearch,
  onPreviousPage,
  onNextPage,
  promotedBulkActions,
  bulkActions,
  emptyStateTitle,
  emptyStateDescrpition,
  filters,
  onFilterChange
}: TableProps<T>) => {
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSearchChange = useCallback(
    (value: string) => {
      setSearchText(value);
      onSearch(value);
    },
    [onSearch]
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (page < currentPage) {
      onPreviousPage();
    } else {
      onNextPage();
    }
  };

  const handleFilterChange = (value: string) => {
    if (onFilterChange) {
      onFilterChange(value);
    }
  };

  const filteredData = useMemo(() => {
    if (!filters || !filters.length) return data;
    return data.filter(item => {
      // filtering logic here if needed
      return true;
    });
  }, [data, filters]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, currentPage]);

  const rows = paginatedData.map((row, index) => {
    const rowData: (string | React.ReactNode)[] = columns.map((column) => {
      if (column.render) {
        return column.render(row);
      }
      return row[column.key];
    });

    if (actions) {
      rowData.push(
        <div style={{ display: 'flex', gap: '8px' }}>
          {actions.map((action, actionIndex) => (
            <Button key={actionIndex}>{action}</Button>
          ))}
        </div>
      );
    }

    return {
      id: `row-${index}`,
      position: index,
      cells: rowData,
    };
  });

  const indexTableHeadings: NonEmptyArray<IndexTableHeading> = columns.map((column) => ({
    title: column.header,
    alignment: column.alignment || 'start',
    new: false,
  })) as NonEmptyArray<IndexTableHeading>;

  if (actions) {
    indexTableHeadings.push({ title: 'Actions' });
  }

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(rows);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <Box>
      <LegacyCard>
        <LegacyCard.Section>
          <h2>{title}</h2>
        </LegacyCard.Section>
        <LegacyCard.Section>
          <TextField
            label={searchLabel}
            value={searchText}
            onChange={handleSearchChange}
            autoComplete="off"
          />
          {filters && filters.length > 0 && (
            <Select
              label="Filter"
              options={filters}
              onChange={handleFilterChange}
            />
          )}
        </LegacyCard.Section>
        <IndexTable
          headings={indexTableHeadings}
          itemCount={rows.length}
          selectedItemsCount={allResourcesSelected ? 'All' : selectedResources.length}
          promotedBulkActions={promotedBulkActions}
          bulkActions={bulkActions}
          onSelectionChange={handleSelectionChange}
          emptyState={<EmptyState title={emptyStateTitle} description={emptyStateDescrpition} />}
        >
          {rows.map((row, index) => (
            <IndexTable.Row
              key={row.id}
              id={row.id}
              position={index}
              selected={selectedResources.includes(row.id)}
            >
              {row.cells.map((cell, cellIndex) => (
                <IndexTable.Cell key={cellIndex}>{cell}</IndexTable.Cell>
              ))}
            </IndexTable.Row>
          ))}
        </IndexTable>
        {rows.length > 0 && (
          <LegacyCard.Section>
            <Pagination
              hasPrevious={currentPage > 1}
              hasNext={currentPage < totalPages}
              onPrevious={() => handlePageChange(currentPage - 1)}
              onNext={() => handlePageChange(currentPage + 1)}
            />
            <p>Page {currentPage} of {totalPages}</p>
          </LegacyCard.Section>
        )}
      </LegacyCard>
    </Box>
  );
};

export default InventoryIndexTable;
