import React from 'react';
import { Flex, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

type LoaderAtomProps = {};

const Loader: React.FC<LoaderAtomProps> = () => {
  return (
    <Flex
      align="center"
      gap="middle"
      justify="center"
      style={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
    </Flex>
  );
};

export default Loader;
