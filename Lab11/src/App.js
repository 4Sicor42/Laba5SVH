import React, { useState } from 'react';
import GeneratePDF from './components/GeneratePDF';
import GenerateExcel from './components/GenerateExcel';
import GenerateDocx from './components/GenerateDocx';
import ReportForm from './components/ReportForm';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './App.css';

function App() {
  const [reportData, setReportData] = useState({
    title: '',
    content: '',
  });

  const handleReportData = (data) => {
    setReportData(data);
  };

  return (
    <div className="App">
      <AppBar position="static" className="App-header">
        <Toolbar>
          <Typography variant="h6">Report Generator</Typography>
        </Toolbar>
      </AppBar>
      <ReportForm onSubmit={handleReportData} />
      <div className="GenerateReport-container">
        <GeneratePDF data={reportData} />
        <GenerateExcel data={reportData} />
        <GenerateDocx data={reportData} />
      </div>
    </div>
  );
}

export default App;