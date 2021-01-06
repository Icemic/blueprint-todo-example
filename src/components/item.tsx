import React from 'react';
import { Button, Card, EditableText, Elevation, H3, Icon } from '@blueprintjs/core';
import './item.css';

export interface ItemStruct {
  title: string;
  status: 'todo' | 'done';
  id: string;
}

export interface ItemProps extends Pick<ItemStruct, 'title' | 'status'> {
  onEdit?: (value: string) => void;
  onDone?: () => void;
  onRedo?: () => void;
  onDelete?: () => void;
}

export default function Item({ title, status, onEdit, onRedo, onDone, onDelete }: ItemProps) {
  function handleEdit(value: string) {
    onEdit?.(value);
  }

  const content = (
    <H3 className="todo-item-text">
      <EditableText
        defaultValue={title}
        maxLength={20}
        placeholder="You must input something..."
        onConfirm={handleEdit}
      />
    </H3>
  );

  return (
    <li className="todo-item">
      <Icon className="todo-item-dot" icon="dot" />
      {status === 'todo' ? content : <del className="todo-item-del">{content}</del>}
      <div className="todo-actions">
        {status === 'todo' && <Button icon="tick" intent="success" text="Done" onClick={onDone} />}
        {status === 'done' && <Button icon="undo" intent="warning" text="Redo" onClick={onRedo} />}
        <Button icon="cross" intent="danger" onClick={onDelete} />
      </div>
    </li>
  );
}
