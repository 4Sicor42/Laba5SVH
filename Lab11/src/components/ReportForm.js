import React, { useState } from 'react';
import { TextField, Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  input: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
    maxWidth: 500,
  },
}));

const ReportForm = ({ onSubmit }) => {
  const classes = useStyles();
  const [reportData, setReportData] = useState({
    title: '',
    content: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReportData({ ...reportData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(reportData);
  };

  return (
    <Paper className={classes.form}>
      <form onSubmit={handleSubmit}>
        <TextField
          name="title"
          label="Title"
          className={classes.input}
          value={reportData.title}
          onChange={handleChange}
        />
        <TextField
          name="content"
          label="Content"
          multiline
          rows={4}
          className={classes.input}
          value={reportData.content}
          onChange={handleChange}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          className={classes.button}
        >
          Generate Report
        </Button>
      </form>
    </Paper>
  );
};

export default ReportForm;