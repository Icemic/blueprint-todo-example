import React, { useState } from 'react';
import { UL } from '@blueprintjs/core';

import Item, { ItemStruct } from './item';
import './list.css';

export type TodoEvent = 'edit' | 'done' | 'redo' | 'del';

export interface ListProps {
  data: ItemStruct[];
  onPendingEvent: (event: TodoEvent, index: number, value: ItemStruct) => void;
}

export default function List({ data, onPendingEvent }: ListProps) {
  const [filter, setFilter] = useState('all');

  function handleSelect(evt: React.ChangeEvent<HTMLSelectElement>) {
    const value = evt.currentTarget.value;
    setFilter(value);
  }

  let count = 0;
  let list = data.map((item, i) => {
    if (filter === 'all' || item.status === filter) {
      count += 1;
      return (
        <Item
          title={item.title}
          status={item.status}
          key={item.title}
          onEdit={(value) =>
            onPendingEvent('edit', i, {
              ...item,
              title: value,
            })
          }
          onDone={() =>
            onPendingEvent('done', i, {
              ...item,
              status: 'done',
            })
          }
          onRedo={() =>
            onPendingEvent('redo', i, {
              ...item,
              status: 'todo',
            })
          }
          onDelete={() => onPendingEvent('del', i, item)}
        />
      );
    }
  });

  return (
    <div className="todo-content">
      <section>
        <p>
          {count} showed, in total of {data.length}
        </p>
        <div>
          <label>Filter </label>
          <select onChange={handleSelect}>
            <option value="all">All</option>
            <option value="todo">Todo</option>
            <option value="done">Done</option>
          </select>
        </div>
      </section>
      <UL className="todo-list">{list}</UL>
    </div>
  );
}
