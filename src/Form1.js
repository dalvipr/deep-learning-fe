import React from 'react';
import { 
  Button, 
  TextareaAutosize, 
  Container, 
  FormControl, 
  InputLabel, 
  Select,
  MenuItem 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Form1.css';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Form1() {
  const classes = useStyles();
  const [model, setModel, operation, setOperation] = React.useState('');

  const handleChange = (event) => {
    // setAge(event.target.value);
    console.warn(event.target.value);
  };
  return (
    <Container fixed className="formContainer">
      <form className="form1" noValidate autoComplete="off">
        <div>
          <TextareaAutosize aria-label="empty textarea" placeholder="Empty" />
        </div>
        <div>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel>Select Model</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={model}
              onChange={handleChange}
              label="Model"
            >
              <MenuItem value="Spacy">Spacy</MenuItem>
              <MenuItem value="Transformer">Transformer</MenuItem>
          </Select>
        </FormControl>
        </div>
        <div>
        <FormControl variant="filled" className={classes.formControl}>
            <InputLabel>Select Operation here</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={operation}
              onChange={handleChange}
              label="Operation"
            >
              <MenuItem value="Translate">Translate</MenuItem>
              <MenuItem value="Lemmatize">Lemmatize</MenuItem>
              <MenuItem value="Recognize NE">Recognize NE</MenuItem>
              <MenuItem value="Dependancy Diagram">Dependancy Diagram</MenuItem>
              <MenuItem value="Detect Keywords">Detect Keywords</MenuItem>
              <MenuItem value="Detect Language">Detect Language</MenuItem>
              <MenuItem value="POS Tagging">POS Tagging</MenuItem>
          </Select>
        </FormControl>
        </div>
        <div>
        <Button variant="contained" color="primary">
          Submit
        </Button>
        </div>
      </form>
    </Container>
  );
}

export default Form1;