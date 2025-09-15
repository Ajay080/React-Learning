import { useState } from 'react'
import './App.css'
import Input from './components/Input'
function App() {

  let [amount, setAmount]= useState(0);
  let [convertedAmount, setConvertedAmount]= useState(0);
  let [fromCurrency, setFromCurrency]= useState("USD");
  let [toCurrency, setToCurrency]= useState("USD");

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

  let convert=()=>{
    if(fromCurrency==="USD" && toCurrency==="INR"){
      setConvertedAmount(amount*82)
    }
    else if(fromCurrency==="EUR" && toCurrency==="INR"){
      setConvertedAmount(amount*88)
    }
    else if(fromCurrency==="GBP" && toCurrency==="INR"){
      setConvertedAmount(amount*101)
    }
    else if(fromCurrency===toCurrency){
      setConvertedAmount(amount)
    }
  }

  return (
    <>
      <Input title="From" currency={fromCurrency} amount={amount} onCurrencyChange={()=>{FromCurrencyChange(fromCurrency)}} onAmountChange={() => {FromAmountChange(amount)}}/>
      <Input title="To" currency={toCurrency} amount={convertedAmount} onCurrencyChange={()=>{ToCurrencyChange(toCurrency)}} onAmountChange={()=>{ToAmountChange(convertedAmount)}}/>
      <button onClick={convert}>Convert</button>
    </>
  )
}

export default App
