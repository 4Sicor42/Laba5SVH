import React from 'react';
import jsPDF from 'jspdf';
import { Button } from '@material-ui/core';

const GeneratePDF = ({ data }) => {
  const generatePdf = () => {
    const doc = new jsPDF();
    doc.text(data.title, 10, 10);
    doc.text(data.content, 10, 20);
    doc.save('report.pdf');
  };

  return (
    <div>
      <h2>Generate PDF Report</h2>
      <Button variant="contained" color="primary" onClick={generatePdf}>
        Generate PDF
      </Button>
    </div>
  );
};
export default GeneratePDF;