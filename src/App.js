import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [quotes, setQuotes] = useState("")

  const getQuotes = () => {
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => setQuotes(data[Math.floor(Math.random() * data.length)]))
  }

  useEffect(() => {
    getQuotes()
  }, [])

  return (
    <div className="App">
      <div className='Text'>
        <h1>"{quotes.text}"</h1>
        <p>by {quotes.author}</p>
        <button onClick={getQuotes}>New Quotes</button>
      </div>
    </div>
  );
}

export default App;
