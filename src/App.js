import React, { useEffect, useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import Currency from './components/Currency';
import AmountInput from './components/AmountInput'
import TimeCheckbox from './components/TimeCheckbox'
import List from './components/List'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  wraper: {
    display: 'flex',
    flexDirection: 'row',  
    justifyContent: 'flex-start',   
  },
});

const App = () => {
  const [filters, setFilters] = useState({
    date: {
      today: false,
      sevenDays: false,
      thirtyDays: false,
      oneYear: false,
    },
    valcode: 'USD'
  });
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);

  const update = async () => {
    try {
      let response = [];
      if (filters.date.today) {
        const resp = await axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${filters.valcode}&json`);
        response = [...response, ...resp.data];
      }
      if (filters.date.sevenDays) {
        const resp = await axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${filters.valcode}&date=${moment().subtract(7, 'd').format('YYYYMMDD')}&json`);
        response = [...response, ...resp.data];
      }
      if (filters.date.thirtyDays) {
        const resp = await axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${filters.valcode}&date=${moment().subtract(30, 'd').format('YYYYMMDD')}&json`);
        response = [...response, ...resp.data];
      }
      if (filters.date.oneYear) {
        const resp = await axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${filters.valcode}&date=${moment().subtract(1, 'y').format('YYYYMMDD')}&json`);
        response = [...response, ...resp.data];
      }
      setData(response);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    update();
  }, [filters]);

  const changeInput = event => {
    setInput(event.target.value);
  }

  const classes = useStyles();

  return(
    <div className="App">
      <div className={classes.wraper}>
      <Currency setFilters={setFilters} filters={filters}/>
      <AmountInput changeInput={changeInput} value={input}/>
      </div>
      <div className={classes.wraper}>
      <TimeCheckbox  setFilters={setFilters} filters={filters}/>
      <List count={input} data={data}/>
      </div>
    </div>
  );  
};
  
export default App;