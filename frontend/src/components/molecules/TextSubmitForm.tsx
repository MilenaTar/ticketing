import React from 'react';
import { Form, Input } from 'antd';
import { Rule } from 'antd/es/form';
import ButtonAtom from '../atoms/ButtonAtom';

interface Props {
  name: string;
  loading?: boolean;
  disabled?: boolean;
  placeHolder?: string;
  rules?: Rule[];
}

const TextSubmitForm: React.FC<Props> = ({ name, loading, disabled, placeHolder, rules }) => {
  return (
    <>
      <Form.Item label="Description" name={name} rules={rules}>
        <Input.TextArea
          placeholder={placeHolder ?? 'Enter description'}
          disabled={disabled}
          rows={6}
        />
      </Form.Item>
      <Form.Item>
        <ButtonAtom label='Submit' htmlType="submit" type="primary" loading={loading} disabled={disabled} />
      </Form.Item>
    </>
  );
};

export default TextSubmitForm;
