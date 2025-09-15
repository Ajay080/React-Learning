import { useEffect, useState } from 'react'
import './App.css'
import Input from './components/Input'
import GetCurrency from './components/GetCurrency';
function App() {

  let [amount, setAmount]= useState(0);
  let [convertedAmount, setConvertedAmount]= useState(0);
  let [fromCurrency, setFromCurrency]= useState("inr");
  let [toCurrency, setToCurrency]= useState("inr");

  let FromCurrencyChange=(newFromCurrency)=>{
    setFromCurrency(newFromCurrency)
  }

  let ToCurrencyChange=(newToCurrency)=>{
    setToCurrency(newToCurrency)
  }

  let FromAmountChange=(newAmount)=>{
    setAmount(newAmount)
  }

  let ToAmountChange=(newConvertedAmount)=>{
    setConvertedAmount(newConvertedAmount)
  }

  let currencyData = GetCurrency(fromCurrency);

  let convert=()=>{
    let rate= currencyData[toCurrency];
    console.log("Rate", rate)
    setConvertedAmount(rate * amount);
  }

  return (
    <>
      <Input title="From" currency={fromCurrency} amount={amount} onCurrencyChange={FromCurrencyChange} onAmountChange={FromAmountChange}/>
      <Input title="To" currency={toCurrency} amount={convertedAmount} onCurrencyChange={ToCurrencyChange} onAmountChange={ToAmountChange}/>
      <button onClick={convert}>Convert</button>
    </>
  )
}

export default App
