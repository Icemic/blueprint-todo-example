import React from 'react';
import Input from './components/input';
import './App.css';

function App() {
  function handleInsert(value: string) {}

  return (
    <div className="App">
      <h1 className="head">todos</h1>
      <Input onInsert={handleInsert}></Input>
    </div>
  );
}

export default App;
