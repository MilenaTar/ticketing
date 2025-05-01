import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Typography, message } from 'antd';
import { ApiRequestMethod, customAxios } from '../services/custom-axios';
import { TicketStatus } from '../types/Ticket.type';
import InputTitle from '../components/molecules/InputTitle';
import TextSubmitForm from '../components/molecules/TextSubmitForm';

const { Title } = Typography;

const CreateTicketPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values: { title: string; description: string }) => {
    setLoading(true);
    try {
      await customAxios(`/tickets`, {
        method: ApiRequestMethod.POST,
        body: JSON.stringify({
          title: values.title,
          description: values.description,
          status: TicketStatus.OPEN,
        }),
      }).then(() => {
        message.success('Ticket created successfully!');
        navigate('/tickets');
      })
    } catch (err) {
      console.error(err);
      message.error('Failed to create ticket. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 24 }}>
      <Title level={2}>Create Ticket</Title>
      <Form layout="vertical" onFinish={handleSubmit} form={form}>
        <InputTitle name="title" />
        <TextSubmitForm
          name="description"
          placeHolder="Enter ticket description"
          rules={[{ required: true, message: 'Please enter a description' }]}
          loading={loading}
        />
      </Form>
    </div>
  );
};

export default CreateTicketPage;
