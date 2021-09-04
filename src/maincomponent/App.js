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
    <div>App</div>
  );
}

export default App;