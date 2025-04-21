import React from 'react';
import { List, Card, Divider } from 'antd';
import ReplyItem from '../molecules/ReplyItem';

interface Reply {
  id: string;
  message: string;
  createdAt: string;
}

export const RepliesList: React.FC<{ replies: Reply[] }> = ({ replies }) => (
  <Card>
    <Divider>Replies</Divider>
    <List dataSource={replies} renderItem={(reply) => <ReplyItem reply={reply} key={reply.id} />} />
  </Card>
);
