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
      { key: 'creating-predictions', label: <Link to="/onboarding/creating-predictions">Creating predictions</Link> },
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
    key: 'rewards',
    label: 'Rewards',
    children: [
      { key: 'earning', label: <Link to="/rewards/earning">Earning</Link> },
      { key: 'redeeming', label: <Link to="/rewards/redeeming">Redeeming</Link> },
    ],
  },
  {
    key: 'market',
    label: 'Market',
    children: [
      { key: 'overview', label: <Link to="/market/overview">Overview</Link> },
      { key: 'earning', label: <Link to="/market/earning">Earning</Link> },
      { key: 'training-ai', label: <Link to="/market/training-ai">Training AI</Link> },
    ],
  },
  {
  key: 'trade predictions',
  label: 'Trade Predictions',
  children: [
    {
      key: 'trading-basics',
      label: (
        <Link to="/trade predictions/trading-basics">
          Trading Basics
        </Link>
      ),
    },
    {
      key: 'order-types',
      label: (
        <Link to="/trade predictions/order-types">
          Order Types & Execution
        </Link>
      ),
    },
    {
      key: 'settlement-and-fees',
      label: (
        <Link to="/trade predictions/settlement-and-fees">
          Settlement, Lock & Fees
        </Link>
      ),
    },
  ],
},

{
    key: 'promo',
    label: 'Promo',
    children: [
      { key: 'activity in promotions', label: <Link to="/promo/activity in promotions">Activity in promotions</Link> },
      
    ],
  },


{
    key: 'prolab',
    label: 'ProLab',
    children: [
      { key: 'сreating models and predictions', label: <Link to="/prolab/сreating models and predictions">Creating models and predictions</Link> },
      
    ],
  },

  {
    key: 'prpay',
    label: 'PrPay',
    children: [
      { key: 'how-to-work', label: <Link to="/prpay/how-to-work">How to Work</Link> },
      { key: 'fees-bonuses', label: <Link to="/prpay/fees-bonuses">Fees Bonuses</Link> },
    ],
  },
  {
    key: 'referrals',
    label: 'Referrals',
    children: [
     
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