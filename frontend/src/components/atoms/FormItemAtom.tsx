import React from 'react';
import { Form, FormItemProps } from 'antd';

type FormItemAtomProps = FormItemProps & {
  children: React.ReactNode;
};

const FormItemAtom: React.FC<FormItemAtomProps> = ({ children, ...props }) => {
  return <Form.Item {...props}>{children}</Form.Item>;
};

export default FormItemAtom;
