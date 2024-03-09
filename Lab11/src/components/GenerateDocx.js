import React from 'react';
import { Document, Packer, Paragraph } from 'docx';
import { Button } from '@material-ui/core';
import { saveAs } from 'file-saver';

const GenerateDocx = ({ data }) => {
  const generateDocx = () => {
    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          new Paragraph({
            text: data.title,
            heading: 'Heading1',
          }),
          new Paragraph(data.content),
        ],
      }],
    });

    Packer.toBlob(doc).then(blob => {
      saveAs(blob, 'report.docx');
    }).catch(error => {
      console.error(error);
    });
  };

  return (
    <div>
      <h2>Generate Word Report</h2>
      <Button variant="contained" color="primary" onClick={generateDocx}>
        Generate Word
      </Button>
    </div>
  );
};

export default GenerateDocx;