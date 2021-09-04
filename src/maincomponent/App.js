import React, { useState } from 'react';
import './App.css';

const App = () => {

  let appName = "React Converter";
  let [usdValue, setUsdValue] = useState(0);
  let [rialValue, setRialValue] = useState(0);
  let [usdValueInput, setUsdValueInput] = useState('');

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
    <nav className="toolbar" role="banner">
      <span>{appName}</span>
    </nav>

    <div className="container">
      <div className="output-container">
        <div className="rial-price-output">Price: <strong>{rialValue}</strong> <small> rial</small></div>
        <div className="usd-price-output">USD: <strong>{usdValue}</strong> <small> USD</small></div>
      </div>
      <input 
        type="number"
        className="usd-price-input" 
        value={usdValueInput} 
        onChange={e=>{SetUsdValueInput(e.target.value)}} 
        placeholder="Enter USD price..." 
      />
      <button className="btn-convert" onClick={fetchPrice}>Convert</button>
    </div>
  </div>
  );
}

export default App;