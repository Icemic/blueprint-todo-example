import React from 'react';
import { Card, Elevation, UL } from '@blueprintjs/core';
import Item, { ItemStruct } from './item';
import './list.css';

export type TodoEvent = 'edit' | 'done' | 'redo' | 'del';

export interface ListProps {
  data: ItemStruct[];
  onPendingEvent: (event: TodoEvent, index: number, value: ItemStruct) => void;
}

export default function List({ data, onPendingEvent }: ListProps) {
  return (
    <UL className="todo-list">
      {data.map((item, i) => (
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
      ))}
    </UL>
  );
}
