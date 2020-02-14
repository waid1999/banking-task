import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
        FormLabel,
        FormControl,
        FormGroup,
        FormControlLabel,
        Checkbox
    } from '@material-ui/core';

import { Checkboxes } from '../constants';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const TimeCheckbox = ({ setFilters, filters }) => {
  const classes = useStyles();

  const handleChange = name => event => {
    setFilters({
        ...filters, date: {
            ...filters.date,
            [name]: event.target.checked
    }});
  };

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Time point</FormLabel>
        <FormGroup>
            {Checkboxes.map((item, index) =>
                <FormControlLabel
                    control={<Checkbox checked={filters.date[item.value]} onChange={handleChange(item.value)} value={item.value} />}
                    key={`id-time-checkboxes-${index}`}
                    label={item.label}
                />
            )}
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default TimeCheckbox;