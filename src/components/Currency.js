import React from 'react';
import { Currencies } from '../constants'
import { makeStyles } from '@material-ui/core/styles';
import {
  Radio,
  RadioGroup,
  FormControlLabel, 
  FormControl, 
  FormLabel
  } from '@material-ui/core';


const useStyles = makeStyles({
  radios: {
    display: 'flex',
    flexDirection: 'row',
  },
});

const Currency = ({ setFilters, filters }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('usd');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleChangeCheckboxes = valcode => event => {
    const newFilter = {
      date: filters.date,
      valcode: valcode
    }
    console.log(newFilter);
    setFilters({...newFilter})
  }

  const renderCheckboxes = () => Currencies.map((item, index) => (
    <FormControlLabel
      control={<Radio />}
      key={`id-checkbox-${index}`}
      onChange={handleChangeCheckboxes(item.label)}
      {...item}/>
  ));

  return (
    <FormControl component="fieldset" className={classes.formControl}>
    <FormLabel component="legend">Currency</FormLabel>
    <RadioGroup aria-label="currency" name="currency" value={value} onChange={handleChange} className={classes.radios} >
      {renderCheckboxes()}
    </RadioGroup>
    </FormControl>
  );
}

export default Currency;