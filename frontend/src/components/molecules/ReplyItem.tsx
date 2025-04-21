import React from 'react';
import { Card, List } from 'antd';
import { Reply } from '../../types/Reply.type';
import { FormattedCreationDate } from '../atoms/FormattedCreationDate';

interface Props {
  reply: Reply;
}

const ReplyItem: React.FC<Props> = ({ reply }) => {
  return (
    <List.Item key={reply.id}>
      <Card style={{ width: '100%' }}>
        <p>{reply.message}</p>
        <FormattedCreationDate date={reply.createdAt} />
      </Card>
    </List.Item>
  );
};

export default ReplyItem;
