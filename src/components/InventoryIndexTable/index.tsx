import React, { useCallback, useState } from 'react';
import { Button, IndexTable, Pagination, TextField } from '@shopify/polaris';
import { IndexTableHeading } from '@shopify/polaris/build/ts/src/components/IndexTable';
import { NonEmptyArray } from '@shopify/polaris/build/ts/src/types';
import LegacyCard from '../LegacyCard';

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

  return (
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
        selectable={true}
      >
        {rows.map((row) => (
          <IndexTable.Row key={row.id} id={row.id} position={row.position}>
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
  );
};

export default InventoryIndexTable;