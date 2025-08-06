// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Input, Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined, XOutlined } from '@ant-design/icons';
import { docsContent } from './Content'; // Импорт в начале файла

// Путь к логотипу — замени на свой
const logoPath = '/logo.png'; // Или URL: 'https://your-hosting.com/logo.png'

// Список страниц для поиска
const searchItems = [
  { key: 'about-promospay/mission', title: 'Mission' },
  { key: 'about-promospay/technical-overview', title: 'Technical Overview' },
  { key: 'onboarding/getting-started', title: 'Getting Started' },
  { key: 'onboarding/using-ai-scai', title: 'Using AI SCAI' },
  { key: 'onboarding/creating-forecasts', title: 'Creating Forecasts' },
  { key: 'onboarding/connect-mobile-qr', title: 'Connect Mobile via QR' },
  { key: 'onboarding/trending-analytics', title: 'Trending Analytics' },
  { key: 'scai-ai/model-capabilities', title: 'Model Capabilities' },
  { key: 'scai-ai/how-it-works', title: 'How It Works' },
  { key: 'crypto-miles/earning', title: 'Earning Crypto Miles' },
  { key: 'crypto-miles/redeeming', title: 'Redeeming Crypto Miles' },
  { key: 'promoplace/overview', title: 'Overview of Promoplace' },
  { key: 'promoplace/earning', title: 'Earning on Promoplace' },
  { key: 'promoplace/training-ai', title: 'Training AI on Promoplace' },
  { key: 'trade-ai/neurons-metrics', title: 'Neurons Metrics' },
  { key: 'trade-ai/ai-scanner', title: 'AI Scanner' },
  { key: 'trade-ai/trading-assets', title: 'Trading Assets' },
  { key: 'prpay/how-to-buy', title: 'How to Buy' },
  { key: 'prpay/fees-bonuses', title: 'Fees and Bonuses' },
  { key: 'referrals/sharing-referral', title: 'Sharing Referral' },
  { key: 'referrals/using-referral', title: 'Using Referral' },
  { key: 'for-developers/api-access', title: 'API Access' },
  { key: 'for-developers/integration-guide', title: 'Integration Guide' },
];

const Navbar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredItems = searchTerm
    ? searchItems.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        docsContent[item.key]?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : searchItems.slice(0, 5); // Показываем 5 популярных разделов при пустом запросе

  const searchMenu = (
    <Menu>
      {filteredItems.length > 0 ? (
        filteredItems.map(item => (
          <Menu.Item key={item.key}>
            <Link to={`/${item.key}`}>{item.title}</Link>
          </Menu.Item>
        ))
      ) : (
        <Menu.Item>No results found</Menu.Item>
      )}
    </Menu>
  );

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      padding: '16px', 
      background: '#fff', 
      borderBottom: '1px solid #f0f0f0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>
      <a href="https://www.promospay.ai" target="_blank" rel="noopener noreferrer">
        <img 
          src={logoPath} 
          alt="PromosPay Logo" 
          style={{ height: '40px', cursor: 'pointer' }} 
        />
      </a>
      <Dropdown overlay={searchMenu} trigger={['click']}>
        <Input
          placeholder="Search documentation..."
          prefix={<SearchOutlined />}
          style={{ width: 300, cursor: 'text' }}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </Dropdown>
    </div>
  );
};

export default Navbar;