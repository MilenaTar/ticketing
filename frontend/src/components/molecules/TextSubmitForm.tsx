import React from 'react';
import { Input } from 'antd';
import { Rule } from 'antd/es/form';
import ButtonAtom from '../atoms/ButtonAtom';
import FormItemAtom from '../atoms/FormItemAtom';

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
      <FormItemAtom label="Description" name={name} rules={rules}>
        <Input.TextArea
          placeholder={placeHolder ?? 'Enter description'}
          disabled={disabled}
          rows={6}
        />
      </FormItemAtom>
      <FormItemAtom>
        <ButtonAtom label='Submit' htmlType="submit" type="primary" loading={loading} disabled={disabled} />
      </FormItemAtom>
    </>
  );
};

export default TextSubmitForm;
