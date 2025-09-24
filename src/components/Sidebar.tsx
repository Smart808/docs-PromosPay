// src/components/Sidebar.tsx
import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const sidebarItems = [
  {
    key: 'about-promospay',
    label: 'About PromosPay',
    children: [
      { key: 'mission', label: <Link to="/about-promospay/mission">Mission</Link> },
      { key: 'technical-overview', label: <Link to="/about-promospay/technical-overview">Technical Overview</Link> },
    ],
  },
  {
    key: 'onboarding',
    label: 'Onboarding',
    children: [
      { key: 'getting-started', label: <Link to="/onboarding/getting-started">Getting Started</Link> },
      { key: 'using-ai-scai', label: <Link to="/onboarding/using-ai-scai">Using AI SCAI</Link> },
      { key: 'creating-forecasts', label: <Link to="/onboarding/creating-forecasts">Creating Forecasts</Link> },
      { key: 'connect-mobile-qr', label: <Link to="/onboarding/connect-mobile-qr">Connect Wallet</Link> },
      { key: 'trending-analytics', label: <Link to="/onboarding/trending-analytics">Trending Analytics</Link> },
    ],
  },
  {
    key: 'scai-ai',
    label: 'SCAI AI',
    children: [
      { key: 'model-capabilities', label: <Link to="/scai-ai/model-capabilities">Model Capabilities</Link> },
      { key: 'how-it-works', label: <Link to="/scai-ai/how-it-works">How It Works</Link> },
    ],
  },
  {
    key: 'crypto-miles',
    label: 'Crypto Miles',
    children: [
      { key: 'earning', label: <Link to="/crypto-miles/earning">Earning</Link> },
      { key: 'redeeming', label: <Link to="/crypto-miles/redeeming">Redeeming</Link> },
    ],
  },
  {
    key: 'promoplace',
    label: 'Promoplace',
    children: [
      { key: 'overview', label: <Link to="/promoplace/overview">Overview</Link> },
      { key: 'earning', label: <Link to="/promoplace/earning">Earning</Link> },
      { key: 'training-ai', label: <Link to="/promoplace/training-ai">Training AI</Link> },
    ],
  },
  {
    key: 'trade-ai',
    label: 'Trade AI',
    children: [
      { key: 'neurons-metrics', label: <Link to="/trade-ai/neurons-metrics">Neurons Metrics</Link> },
      { key: 'ai-scanner', label: <Link to="/trade-ai/ai-scanner">AI Scanner</Link> },
      { key: 'trading-assets', label: <Link to="/trade-ai/trading-assets">Trading Assets</Link> },
    ],
  },
  {
    key: 'stake',
    label: 'Stake',
    children: [
      { key: 'how-to-buy', label: <Link to="/stake/how-to-buy">How to Buy</Link> },
      { key: 'fees-bonuses', label: <Link to="/stake/fees-bonuses">Fees Bonuses</Link> },
    ],
  },
  {
    key: 'referrals',
    label: 'Referrals',
    children: [
      { key: 'sharing-referral', label: <Link to="/referrals/sharing-referral">Sharing Referral</Link> },
      { key: 'using-referral', label: <Link to="/referrals/using-referral">Using Referral</Link> },
    ],
  },
  {
    key: 'for-developers',
    label: 'For Developers',
    children: [
      { key: 'api-access', label: <Link to="/for-developers/api-access">API Access</Link> },
      { key: 'integration-guide', label: <Link to="/for-developers/integration-guide">Integration Guide</Link> },
    ],
  },
];

const Sidebar: React.FC = () => {
  return (
    <div style={{ width: 256, height: '100vh', background: '#f0f2f5', overflowY: 'auto' }}>
      <Menu
        mode="inline"
        defaultOpenKeys={['about-promospay']}
        style={{ height: '100%', borderRight: 0 }}
        items={sidebarItems}
      />
    </div>
  );
};

export default Sidebar;