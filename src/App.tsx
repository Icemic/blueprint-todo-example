import React, { useState } from 'react';
import Input from './components/input';
import List, { TodoEvent } from './components/list';
import './App.css';
import { ItemStruct } from './components/item';
import { H1 } from '@blueprintjs/core';

function App() {
  const [data, setData] = useState([] as ItemStruct[]);
  function handleInsert(value: string) {
    setData([
      {
        title: value,
        status: 'todo',
        // just for demo
        id: Math.random().toFixed(36).slice(2)
      },
      ...data,
    ]);
  }

  function handleEvent(event: TodoEvent, index: number, value: ItemStruct) {
    switch (event) {
      case 'edit':
      case 'done':
      case 'redo': {
        data.splice(index, 1, value);
        break;
      }
      case 'del': {
        data.splice(index, 1);
        break;
      }
    }
    setData([...data]);
  }

  return (
    <div className="App">
      <hr className="todo-spacing" />
      <H1 className="todo-head">todos</H1>
      <hr className="todo-spacing" />
      <Input onInsert={handleInsert}></Input>
      <hr className="todo-spacing" />
      <List data={data} onPendingEvent={handleEvent} />
    </div>
  );
}

export default App;
