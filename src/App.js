import React from "react";
import "./style.css";
import InvoiceTable from "./components/invoiceTable/invoiceTable.js";
import MarksTable from './components/marksTable/marksTable.js'

function App() {
  // Sample data for invoice
  const invoiceData = {
    invoiceNumber: "123456789",
    invoiceDate: "18 March 2024",
    payTo: {
      name: "Acme Billing Co.",
      address: "123 Main St.",
      city: "GUNTUR",
      pincode: "123456",
    },
    customer: {
      name: "Rama Raju",
      address: "321 Willow Way",
      city: "Southeast Urban",
      state: "MA",
      zip: "54321",
    },
    items: [
      { name: "Paperclips", quantity: 1000, unitPrice: 0.01, cost: 10.0 },
      { name: "Geometry Box", quantity: 100, unitPrice: 1.0, cost: 100.0 },
    ],
    subtotal: 110.0,
    taxRate: 0.08,
  };
  
  // Sample data for marks table
  const caption= [{"name":"John"}];
  const columns = ["S.No", "Subjects", "Max Marks", "Marks", "Results", "Remarks"];
  const data = [
    { "S.No": "1", "Subjects": "English", "Max Marks": "100", "Marks": "90", "Results": "Pass", "Remarks": "Good" },
    { "S.No": "2", "Subjects": "Telugu", "Max Marks": "100", "Marks": "91", "Results": "Pass", "Remarks": "Good" },
    { "S.No": "3", "Subjects": "Hindi", "Max Marks": "100", "Marks": "92", "Results": "Pass", "Remarks": "Good" },
    { "S.No": "4", "Subjects": "Maths", "Max Marks": "100", "Marks": "93", "Results": "Pass", "Remarks": "Good" },
    { "S.No": "5", "Subjects": "Science", "Max Marks": "100", "Marks": "94", "Results": "Pass", "Remarks": "Good" },
    { "S.No": "6", "Subjects": "Social", "Max Marks": "100", "Marks": "95", "Results": "Pass", "Remarks": "Good" }
  ];
  const footerData = ["Total", "6", "600", "555", "Pass", "Excellent"];

  return (
    <>
      {/* Invoice Table */}
      <div className="appContainer">
        <div className="tableConatiner">
          <h1>Invoice Table</h1>
          <hr/>
          <InvoiceTable data={invoiceData} />
        </div>
      </div>

      {/* Marks Table */}
      <div className="appContainer">
        <div className="tableConatiner">
          <h1> X Marks List Table</h1>
          <hr />
          <MarksTable 
             caption={caption}
             columns={columns} data={data}
             footerData={footerData} 
          ></MarksTable>
        </div>
      </div>
    </>
  );
}

export default App;
