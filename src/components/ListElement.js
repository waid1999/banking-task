import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  wraper: {
    margin: '10px',
    padding: '10px',
    minWidth: '500px',
    display: 'flex',
    flexDirection: 'row',  
    justifyContent: 'space-around',   
    border: '1px solid black',
    borderRadius: '4px',
    boxShadow: '3px 2px 6px 2px rgba(0,0,0,0.75)'
  },
});

const ListElement = ({
    data,
    count
}) => {

  const classes = useStyles();
    return(
      <div className={classes.wraper}>
        <div>
            date: {data.exchangedate}
        </div>
        <div>
            rate: {data.rate}
        </div>
        <div>
            {data.rate * count} UAH
        </div>
      </div>
);}

export default ListElement;