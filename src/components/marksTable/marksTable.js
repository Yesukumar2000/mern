import React from "react";
import "./marksTable.css";

function MarksTable({ caption, columns, data, footerData }) {
  return (
    <table className="marksTable">
      {/* Table caption */}
      <caption>Name: MR {caption[0].name}</caption>

      {/* Table header */}
      <thead>
        <tr>
          {/* Mapping over columns array to create table header */}
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>

      {/* Table body */}
      <tbody>
        {/* Mapping over data array to create table rows */}
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {/* Mapping over columns array to populate table cells */}
            {columns.map((column, colIndex) => (
              <td key={colIndex}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>

      {/* Table footer */}
      <tfoot>
        <tr>
          {/* Mapping over footerData array to create table footer */}
          {footerData.map((data, index) => (
            <td key={index}>{data}</td>
          ))}
        </tr>
      </tfoot>
    </table>
  );
}

export default MarksTable;
