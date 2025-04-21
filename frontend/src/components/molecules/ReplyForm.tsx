import React from 'react';
import { Form } from 'antd';
import { ApiRequestMethod, customAxios } from '../../services/custom-axios';
import TextSubmitForm from './TextSubmitForm';

interface Props {
  ticketId: string;
  onReply: () => void;
}

const ReplyForm: React.FC<Props> = ({ ticketId, onReply }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (values: { reply: string }) => {
    setLoading(true);
    try {
      await customAxios(`/replies`, {
        method: ApiRequestMethod.POST,
        requiresToken: false,
        body: JSON.stringify({
          ticketId,
          message: values.reply, // ✅ Access value here
        }),
      });
      onReply();
      form.resetFields();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form form={form} onFinish={handleSubmit} layout="vertical">
      <TextSubmitForm
        name="reply"
        placeHolder="Type your reply here..."
        rules={[{ required: true, message: 'Please enter your reply' }]}
        loading={loading}
      />
    </Form>
  );
};

export default ReplyForm;
