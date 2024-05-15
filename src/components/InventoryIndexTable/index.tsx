import React, { useCallback, useState } from 'react';
import { Button, IndexTable, Pagination, TextField, useIndexResourceState } from '@shopify/polaris';
import { IndexTableHeading } from '@shopify/polaris/build/ts/src/components/IndexTable';
import { NonEmptyArray } from '@shopify/polaris/build/ts/src/types';
import LegacyCard from '../LegacyCard';
import { Box } from '@shopify/polaris';
import { BulkActionsProps } from '@shopify/polaris/build/ts/src/components/BulkActions';

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
}: TableProps<T>) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = useCallback(
    (value: string) => {
      setSearchText(value);
      onSearch(value);
    },
    [onSearch]
  );

  const rows = data.map((row, index) => {
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

  return (
    <Box paddingBlockEnd="400">
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
        </LegacyCard.Section>
        <IndexTable
          headings={indexTableHeadings}
          itemCount={rows.length}
          selectedItemsCount={allResourcesSelected ? 'All' : selectedResources.length}
          promotedBulkActions={promotedBulkActions}
          onSelectionChange={handleSelectionChange}
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
        <LegacyCard.Section>
          <Pagination
            hasPrevious
            hasNext
            onPrevious={onPreviousPage}
            onNext={onNextPage}
          />
        </LegacyCard.Section>
      </LegacyCard>
    </Box>
  );
};

export default InventoryIndexTable;