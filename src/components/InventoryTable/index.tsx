import React, { useCallback, useState } from 'react';
import { Button, DataTable, Pagination, TextField } from '@shopify/polaris';
import LegacyCard from '../LegacyCard';

interface TableColumn<T> {
  key: keyof T;
  header: string;
  render?: (item: T) => React.ReactNode;
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

type TableData<T> = (T[keyof T] | React.ReactNode)[];

const Table = <T extends Record<string, any>>({
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

  // const rows: TableData<T>[] = data.map((row) => [
  //   ...columns.map((column) => row[column.key]),
  //   actions.map((action, index) => (
  //     <Button key={index}>{action}</Button>
  //   )),
  // ]);
  const rows: TableData<T>[] = data.map((row) => [
    ...columns.map((column) => {
      if (column.render) {
        return column.render(row);
      }
      return row[column.key];
    }),
    actions?.map((action, index) => (
      <Button key={index}>{action}</Button>
    )),
  ]);

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
      <DataTable
        columnContentTypes={[...Array(columns.length).fill('text'), 'text']}
        headings={[...columns.map((column) => column.header), 'Actions']}
        rows={rows}
      />
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

export default Table;