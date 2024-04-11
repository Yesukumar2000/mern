import React from "react";
import "./invoiceTable.css";

function InvoiceTable({ data }) {
  // Calculating tax and grand total
  const tax = data.subtotal * data.taxRate;
  const grandTotal = data.subtotal + tax;

  return (
    <table className="invoiceTable">
      {/* Table caption */}
      <caption>Invoice #{data.invoiceNumber}</caption>

      {/* Table header */}
      <thead>
        <tr>
          {/* First row of header */}
          <th colSpan="3">Invoice #{data.invoiceNumber}</th>
          <th>{data.invoiceDate}</th>
        </tr>
        {/* Second row of header */}
        <tr>
          <td colSpan="2">
            <strong>Pay to:</strong>
            <br />
            {data.payTo.name}
            <br />
            {data.payTo.address}
            <br />
            {data.payTo.city}, PINCODE: {data.payTo.pincode}
          </td>
          <td colSpan="2">
            <strong>Customer:</strong>
            <br />
            {data.customer.name}
            <br />
            {data.customer.address}
            <br />
            {data.customer.city}, {data.customer.state} {data.customer.zip}
          </td>
        </tr>
      </thead>

      {/* Table body */}
      <tbody>
        <tr>
          <th>Name of the Item</th>
          <th>Qty.</th>
          <th>@</th>
          <th>Cost</th>
        </tr>
        {/* Mapping over items to create table rows */}
        {data.items.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.unitPrice}</td>
            <td>{item.cost}</td>
          </tr>
        ))}
      </tbody>

      {/* Table footer */}
      <tfoot>
        <tr>
          <th colSpan="3">Subtotal</th>
          <td>{data.subtotal.toFixed(2)}</td>
        </tr>
        <tr>
          <th colSpan="2">Tax</th>
          <td>8%</td>
          <td>{tax.toFixed(2)}</td>
        </tr>
        <tr>
          <th colSpan="3">Grand Total</th>
          <td>$ {grandTotal.toFixed(2)}</td>
        </tr>
      </tfoot>
    </table>
  );
}

export default InvoiceTable;
