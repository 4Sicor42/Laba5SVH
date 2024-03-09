import React from 'react';
import * as XLSX from 'xlsx';
import { Button } from '@material-ui/core';

const GenerateExcel = ({ data }) => {
  const generateExcel = () => {
    const ws = XLSX.utils.json_to_sheet([data]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Report");
    XLSX.writeFile(wb, 'report.xlsx');
  };

  return (
    <div>
      <h2>Generate Excel Report</h2>
      <Button variant="contained" color="primary" onClick={generateExcel}>
        Generate Excel
      </Button>
    </div>
  );
};

export default GenerateExcel;