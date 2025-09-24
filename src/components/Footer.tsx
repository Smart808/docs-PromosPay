// src/components/Footer.tsx
import React from 'react';
import { Layout, Space } from 'antd';
import { XOutlined, MessageOutlined } from '@ant-design/icons'; // XOutlined для Twitter, MessageOutlined как placeholder для Telegram

const { Footer } = Layout;

const AppFooter: React.FC = () => {
  return (
    <Footer style={{ textAlign: 'center', background: '#f0f2f5', padding: '16px 0' }}>
      <Space size="large">
        <a href="https://twitter.com/PromosPay" target="_blank" rel="noopener noreferrer">
          <XOutlined style={{ fontSize: '24px', color: '#1DA1F2' }} />
        </a>
        <a href="https://web.telegram.org/a/#-1002933508328" target="_blank" rel="noopener noreferrer">
          <MessageOutlined style={{ fontSize: '24px', color: '#0088cc' }} /> {/* Placeholder для Telegram */}
        </a>
      </Space>
      <div style={{ marginTop: '8px', color: '#888' }}>
        © {new Date().getFullYear()} PromosPay. All rights reserved.
      </div>
    </Footer>
  );
};

export default AppFooter;