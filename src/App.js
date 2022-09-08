import './App.css';
import React from "react";
import QuoteContainer from "./QuoteContainer";
import colors from "./data/colors.js"
import quotes from "./data/quotes.js"

function App() {
  const getRandomNumber = (limit) => Math.floor(Math.random() * limit)
  const [quote, setQuote] = React.useState(quotes[getRandomNumber(quotes.length)])
  let color = colors[getRandomNumber(colors.length)].hex;
  
  const addNewQuote = () => {
    setQuote(quotes[getRandomNumber(quotes.length)]);
  }

  return (
      <div style={{backgroundColor: `${color}`}} className = "app">
       <QuoteContainer quote={quote} addNewQuote={addNewQuote} color = {color} />
    </div>
  );
}

export default App;
