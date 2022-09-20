import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=';
// const API_KEY = 'SLGTzSPOfUS8qgf50KJdyzrmxTHmNLUv'
const API_KEY = '911b3806a1cbe40dacf96b52c007b3f3'

function App() {
  const [eur,setEur] = useState(0);
  const [gbp, setGbp] = useState(0);
  const [rate, setRate] = useState(0);

  return (
   <div id="container">
    <form onSubmit={convert}>
      <div>
        <label>Eur</label>&nbsp;
        <input type="number" step="0.01"
        value={eur} onChange={e => setEur(e.target.value)}></input>
        <output>{rate}</output>
      </div>
      <div>
        <label>Gbp </label>
        <outpu>{gbp.toFixed(2)} €</outpu>
      </div>
      <div>
        <button>Calculate </button>
      </div>
    </form>
   </div>
  );

  async function convert(e) {
    e.preventDefault();
    try {
      const address = URL + API_KEY;
      const response = await fetch(address);

      if (response.ok) {
        const json = await response.json();
        console.log(json.rates.GBP);
        setRate(json.rates.GBP);

        setGbp(eur * json.rates.GBP);
      } else {
        alert('Error retrieving exchange rate.');
        console.log(response);
      }
    } catch (err) {
      alert(err);
    }
  }
}

export default App;
