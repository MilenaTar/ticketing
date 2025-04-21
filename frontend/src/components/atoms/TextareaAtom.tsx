import { Input } from 'antd';
import React from 'react';

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  rows?: number;
};

const TextareaAtom = ({ value, onChange, placeholder, disabled, rows = 4 }: Props) => (
  <Input.TextArea
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    disabled={disabled}
    rows={rows}
  />
);

export default TextareaAtom;
