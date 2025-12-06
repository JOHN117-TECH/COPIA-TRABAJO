"use client";

import clsx from "clsx";
import React, { useState, ReactNode } from "react";

type TableProps = {
  title: string;
  columnBackgrounds?: string[];
  children: ReactNode;
  isOpen?: boolean;             
  onToggle?: (open: boolean) => void; 
};

type RowProps = {
  label: string;
  children: ReactNode;
};

type CellProps = {
  value?: string | null;
  href?: string;
  bgClass?: string;
};


// Usage example:

// <div className='container mx-auto'>
//   <button
//     className="mb-4 px-3 py-1 bg-blue-500 text-white rounded"
//     onClick={() => setOpen(!open)}
//   >
//     Toggle desde afuera
//   </button>
    
//   <Table 
//     title="General"
//     isOpen={open}
//     onToggle={setOpen}
//     columnBackgrounds={["bg-(--gray-10)", "bg-(--gray-20)", "bg-(--gray-10)", "bg-(--gray-20)"]}>
//     <Table.Row label="Application">
//       <Table.Cell value="Upholstery" />
//       <Table.Cell value="Upholstery" />
//       <Table.Cell value="Upholstery" />
//       <Table.Cell value="Upholstery" />
//     </Table.Row>

//     <Table.Row label="Topcoat">
//       <Table.Cell value="Permablok®" href="https://example.com" />
//       <Table.Cell value="PGB+" href="https://example.com" />
//       <Table.Cell value="Permablok®" href="https://example.com" />
//       <Table.Cell value="Permablok®" href="https://example.com" />
//     </Table.Row>

//     <Table.Row label="Design">
//       <Table.Cell value="-" />
//       <Table.Cell value="Textile look" />
//       <Table.Cell value="Textile look" />
//       <Table.Cell />
//     </Table.Row>

//   </Table>
// </div>

export const Table = ({
  title,
  columnBackgrounds = [],
  children,
  isOpen,
  onToggle,
}: TableProps) => {
  const [internalOpen, setInternalOpen] = useState(true);
  const open = isOpen !== undefined ? isOpen : internalOpen;

  const handleToggle = () => {
    if (isOpen === undefined) {
      setInternalOpen(!internalOpen);
    }
    onToggle?.(!open);
  };

  return (
    <div className="border overflow-hidden rounded-xl">
      {/* Header colapsable */}
      <button
        onClick={handleToggle}
        className="w-full text-left px-4 py-2 font-medium bg-white flex items-center justify-between text-(--gray-70)"
      >
        {title}
        <i className={open ? "icon-chevron-up" : "icon-chevron-down"}/>
      </button>

      {open && (
        <table className="w-full border-collapse">
          <tbody>
            {/* se inyectan backgrounds a las celdas */}
            {React.Children.map(children, (child) =>
              React.isValidElement(child)
                ? React.cloneElement(child as React.ReactElement<any>, {
                    columnBackgrounds,
                  })
                : child
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

const Row = ({
  label,
  children,
  columnBackgrounds = [],
}: RowProps & { columnBackgrounds?: string[] }) => {
  return (
    <tr className=" ">
      {/* Primera columna fija */}
      <td className="px-4 py-2 font-medium bg-white text-(--black) border-t border-t-(--gray-30)">{label}</td>

      {/* Agregar backgrounds por columna */}
      {React.Children.map(children, (child, colIdx) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, {
              bgClass: columnBackgrounds[colIdx] || "bg-white",
            })
          : child
      )}
    </tr>
  );
};

const Cell = ({ value, href, bgClass }: CellProps) => {
  let content: ReactNode = "-";

  if (href && value) {
    content = (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-(--aqua-dark) flex items-center gap-1 no-underline font-medium"
      >
        <span className="underline text-sm!">{value}</span>
        <i className="icon-arrow-outward" />
      </a>
    );
  } else if (value) {
    content = value;
  }

  return <td className={clsx("px-4 py-2 text-base text-(--gray-80) border-t border-l border-(--gray-30)", bgClass)}>{content}</td>;
};

Table.Row = Row;
Table.Cell = Cell;
