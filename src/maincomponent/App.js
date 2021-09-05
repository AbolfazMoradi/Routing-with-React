import React, { useState } from 'react';
import Nav from '../components/Nav';
import Prices from '../components/Prices';
import ShowPrice from '../components/ShowPrice';
import './App.css';

const App = () => {

  let appName = "React Converter";
  let [usdValue, setUsdValue] = useState(0);
  let [rialValue, setRialValue] = useState(0);
  let [usdValueInput, setUsdValueInput] = useState('');

  const sendSetUsdValueInput = () => {
    setUsdValueInput();
  }
  const fetchPrice = () => {
    fetch('https://api.tgju.online/v1/data/sana/json')
    .then(result => {
      return result.json();
    })
    .then(data => {
      let usdItem = data.sana.data.find(i => i.slug === 'sana_buy_usd');
      let usd = parseInt(usdItem.p);

      setUsdValue(usd);
      setRialValue(parseInt(usdValueInput | 0) * usd);
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div className="App">
      <Nav appName={appName} />

    <div className="container">
        <Prices rialValue={rialValue} usdValue={usdValue} />
        <ShowPrice usdValueInput={usdValueInput} setterValue={sendSetUsdValueInput} />
      <button className="btn-convert" onClick={fetchPrice}>Convert</button>
    </div>
  </div>
  );
}

export default App;