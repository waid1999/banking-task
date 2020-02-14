import React from 'react';
import TextField from '@material-ui/core/TextField';

const AmountInput = ({ changeInput, input }) => (
  <>
    <TextField id="outlined-basic" label="Input Amount" value={input} variant="outlined" onChange={changeInput} type='number' />
  </>  
);
export default AmountInput;