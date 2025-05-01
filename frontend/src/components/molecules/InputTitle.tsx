import { Form, Input } from 'antd';
import React from 'react';

type Props = {
  placeholder?: string;
  disabled?: boolean;
  name?: string;
};

const InputTitle = ({ placeholder, name = 'title' }: Props) => (
  <Form.Item name={name} label="Title" required rules={[{ required: true, message: 'Please enter a title' }]}>
    <Input placeholder={placeholder} />
  </Form.Item>
);
export default InputTitle;
