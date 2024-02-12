// import React, { useState, useMemo, ReactNode } from 'react';

// interface TableProps<T> {
//   columns: {
//     title: string;
//     dataIndex: keyof T;
//     render?: (value: any, record: T) => ReactNode;
//   }[];
//   dataSource: T[];
//   rowKey: keyof T;
//   pagination?: {
//     currentPage: number;
//     pageSize: number;
//     onPaginationChange: (page: number) => void;
//   };
//   onSearch?: (query: string) => void;
// }

// function Table<T>({ columns, dataSource, rowKey, pagination, onSearch }: TableProps<T>) {
//   const [searchQuery, setSearchQuery] = useState('');

//   const filteredData = useMemo(() => {
//     if (!onSearch || searchQuery === '') {
//       return dataSource;
//     }
//     return dataSource.filter((data) => {
//       return columns.some(({ dataIndex }) => {
//         const value = data[dataIndex];
//         return value.toString().toLowerCase().includes(searchQuery.toLowerCase());
//       });
//     });
//   }, [dataSource, searchQuery, onSearch, columns]);

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { value } = event.target;
//     setSearchQuery(value);
//     onSearch?.(value);
//   };

//   const renderCell = (record: T, column: typeof columns[number]) => {
//     if (column.render) {
//       return column.render(record[column.dataIndex], record);
//     }
//     return record[column.dataIndex];
//   };

//   return (
//     <div>
//       {onSearch && (
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchQuery}
//           onChange={handleSearchChange}
//         />
//       )}
//       <table>
//         <thead>
//           <tr>
//             {columns.map((column) => (
//               <th key={column.title}>{column.title}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.slice(
//             (pagination?.currentPage - 1) * pagination?.pageSize || 0,
//             pagination?.currentPage * pagination?.pageSize
//           ).map((record) => (
//             <tr key={record[rowKey] as unknown as React.Key}>
//               {columns.map((column) => (
//                 <td key={column.dataIndex.toString()}>{renderCell(record, column)}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {pagination && (
//         <div>
//           <button disabled={pagination.currentPage <= 1} onClick={() => pagination.onPaginationChange(pagination.currentPage - 1)}>
//             Previous
//           </button>
//           <button onClick={() => pagination.onPaginationChange(pagination.currentPage + 1)}>
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Table;