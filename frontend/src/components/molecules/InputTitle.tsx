import { Input } from 'antd';
import FormItemAtom from '../atoms/FormItemAtom';

type Props = {
  placeholder?: string;
  disabled?: boolean;
  name?: string;
};

const InputTitle = ({ placeholder, name = 'title' }: Props) => (
  <FormItemAtom name={name} label="Title" required rules={[{ required: true, message: 'Please enter a title' }]}>
    <Input placeholder={placeholder} />
  </FormItemAtom>
);
export default InputTitle;
