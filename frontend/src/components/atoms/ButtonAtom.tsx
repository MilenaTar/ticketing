import React from 'react';
import { Button, ButtonProps } from 'antd';

type ButtonAtomProps = ButtonProps & {
  label: string;
};

const ButtonAtom: React.FC<ButtonAtomProps> = ({ label, ...props }) => {
  return (
    <Button {...props}>
      {label}
    </Button>
  );
};

export default ButtonAtom;
