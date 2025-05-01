import { Card, Col } from 'antd';

type Props = {
  title: string;
  value?: number;
};

export const CardWithTitle = ({ title, value }: Props) => {
  return (
    <Col xs={24} sm={8}>
      <Card title={title}>{value && <h2>{value}</h2>}</Card>
    </Col>
  );
};
