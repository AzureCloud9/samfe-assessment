import React, { useState } from "react";
import "./Comparison.css"

export default function Comparison () {
    const [currencyOne, setCurrencyOne] = useState("");
    const [currencyTwo, setCurrencyTwo] = useState("");
    const [amountOne, setAmountOne] = useState(0);
    const [amountTwo, setAmountTwo] = useState(0);
  
    const handleCurrencyOneChange = (event) => {
      setCurrencyOne(event.target.value);
    };
  
    const handleCurrencyTwoChange = (event) => {
      setCurrencyTwo(event.target.value);
    };
  
    const handleAmountOneChange = (event) => {
      setAmountOne(event.target.value);
      setAmountTwo(event.target.value * exchangeRate);
    };
  
    const handleAmountTwoChange = (event) => {
      setAmountTwo(event.target.value);
      setAmountOne(event.target.value / exchangeRate);
    };
  
    const exchangeRate = 1.5; // random exchange rate for demo purposes
  
    return (
      <div className="comparisonContainer">
        <h1 className="comparisonTitle">Exchange Rate Comparison</h1>
        <div className="conversionContainer">
          <div className="conversionInputContainer">
            <input type="number" className="conversionInput" value={amountOne} onChange={handleAmountOneChange} />
            <select className="currencySelect" value={currencyOne} onChange={handleCurrencyOneChange}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
          <div className="conversionEquals">&#61;</div>
          <div className="conversionInputContainer">
            <input type="number" className="conversionInput" value={amountTwo} onChange={handleAmountTwoChange} />
            <select className="currencySelect" value={currencyTwo} onChange={handleCurrencyTwoChange}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>
        <p className="exchangeRateText">Exchange rate: 1 {currencyOne} = {exchangeRate} {currencyTwo}</p>
      </div>
    );
  };


