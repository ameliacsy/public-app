import React, { useState } from "react";
import './App.css';

function App() {
  // const [list, setList] = useState([]);
  const [randomWord, setRandomWord] = useState("");
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);
  const [isEmptyList, setisEmptyList] = useState(true);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItems = () => {
    const words = inputValue.split(',').map(word => word.trim());
    setList([...list, ...words]);
    setisEmptyList(false);
    setInputValue('');
  };

  const generateWord = () => {

    const randomIndex = Math.floor(Math.random() * list.length);

  // Return the random word
    setRandomWord(list[randomIndex]);
    console.log(randomWord)
    return randomWord;
  }

  const resetList = () => {
    setList([]);
    setisEmptyList(true)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Word Generator!</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter items"
        style={{ width: '300px', height: '40px', fontSize: '16px', padding: '8px' }}
      />
      <button onClick={handleAddItems} style={{ marginTop: '10px', width: '120px', height: '40px', fontSize: '16px' }}>Create List</button> 
      {/* <ul>
        {list.map((item, index) => (
          <li style={{ fontSize: '12px', marginTop: '10px' }} key={index}>{item}</li>
        ))}
      </ul> */}
      {isEmptyList === true ? <p>- Insert List -</p> : <p>- List has been inserted -</p>}

      <button onClick={generateWord} style={{ width: '350px', height: '90px', fontSize: '30px', marginTop: '20px', padding: '10px' }}>Select Random Word</button>
      <p style={{ fontSize: '60px', marginTop: '10px' }}>Random Word: {randomWord}</p>
        
      <button onClick={resetList} style={{ width: '200px', height: '40px', fontSize: '16px'}}>Reset List</button>

      </header>
    </div>
  );
}

export default App;
