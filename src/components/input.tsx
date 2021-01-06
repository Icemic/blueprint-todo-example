import React, { useState } from 'react';
import { InputGroup, Tag } from '@blueprintjs/core';
import './input.css';

export interface InputProps {
  onInsert: (value: string) => void;
}

export default function Input({ onInsert }: InputProps) {
  const [value, setValue] = useState('');
  const [wordCount, setWordCount] = useState(0);

  function handleChange(evt: React.FormEvent<HTMLInputElement>) {
    evt.preventDefault();
    let value = evt.currentTarget.value;

    if (value?.length > 20) {
      value = value.substr(0, 20);
    }

    setWordCount(value.length);
    setValue(value);
  }

  function handleKeyDown(evt: React.KeyboardEvent<HTMLInputElement>) {
    if (evt.key === 'Enter') {
      onInsert?.(value);
    }
  }

  return (
    <InputGroup
      fill
      large
      leftIcon="document"
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      rightElement={
        <Tag className="todo-words-count" minimal>
          {wordCount}/20
        </Tag>
      }
      value={value}
    />
  );
}
