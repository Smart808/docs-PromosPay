// src/components/Content.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

// Object with all texts (exported for Navbar search)
export const docsContent: { [key: string]: string } = {
  'about-promospay/mission': `
# Mission

PromosPay is an innovative blockchain-powered platform that combines advanced AI-driven market analysis, trading tools, user-generated forecasting, and earning opportunities. Designed for crypto enthusiasts, traders, and developers, it leverages artificial intelligence to provide real-time insights, while empowering users to contribute to the system's growth through their own predictions. By integrating elements of decentralized finance (DeFi), machine learning, and community-driven economics, PromosPay creates an ecosystem where users can analyze markets, trade assets, train AI models, and earn rewards—all in one seamless experience.

## Key Features

- **AI-Powered Market Analysis**: Utilize SCAI, our proprietary AI model, to scan and predict trends in crypto, stocks, and RWA (Real World Assets). Get actionable forecasts, neuron metrics, and scanners for optimal trading decisions.
- **User-Driven AI Training**: Submit your own market forecasts on Promoplace, the platform's marketplace. Accurate predictions not only earn you Crypto Miles (rewards) but also help train and improve the AI model, making it smarter over time.
- **Trading and liquid Tools**: Trade AI-recommended assets directly on the platform. Use stake and swap for easy crypto on-ramp and swaps with low fees, bonuses, and seamless integration .
- **Earning Opportunities**: Accumulate Crypto Miles through referrals, accurate forecasts, and platform activity. Redeem them for real rewards, discounts, or staking benefits in the ecosystem.
- **Referral System**: Invite friends with unique codes to earn bonuses and build your network, boosting collective earnings.

## How It Works

PromosPay operates on a blockchain foundation to ensure transparency, security, and decentralization. Users start by onboarding with a wallet connect, then explore AI tools for market insights. They can create and share forecasts on Promoplace, where community validation and AI learning occur. Successful contributions reward users with Crypto Miles, which can be redeemed or used for premium features. The platform's AI evolves with user input, creating a self-improving loop that benefits everyone.

## Benefits for Users

- **Traders**: Gain edge with AI-driven signals, historical data, and real-time analytics to make informed decisions.
- **Forecast Creators**: Earn from your market knowledge by training the AI and competing in prediction accuracy.
- **Developers**: Access API for custom integrations, building on PromosPay's blockchain and AI infrastructure.
- **Newcomers**: Easy entry, low barriers, and educational resources to learn trading and blockchain.

PromosPay is more than a trading tool—it's a community-driven economy where analysis meets earnings. Join us to shape the future of AI in finance! For more details, explore our [Mission and Goals](/about-promospay/mission) or [Technical Overview](/about-promospay/technical-overview).
  `,
  'about-promospay/technical-overview': `
# Technical Overview

PromosPay leverages a robust technical architecture to deliver a seamless and secure experience for traders, forecast creators, and developers. Built on a decentralized blockchain framework, the platform ensures transparency, immutability, and security for all transactions and data exchanges. The core components include:

### Blockchain Infrastructure
- **Decentralized Ledger**: Utilizes Ethereum-based smart contracts for secure wallet connections, reward distribution (Crypto Miles), and transaction processing and trading.
- **Interoperability**: Supports cross-chain interactions for seamless asset swaps and stake.

### AI and Machine Learning
- **SCAI Model**: This is an AI model trained on historical market data, user forecasts, and data from a variety of financial analytics platforms and on-chain data, in real time. SCAI provides predictive analytics, neural metrics, and market scanners.
- **User-Driven Training**: Through Promoplace, user-submitted forecasts are validated and integrated into SCAI's training dataset, improving prediction accuracy over time.

### Data Integration
- **Real-Time Market Data**: Integrated with multiple analytics APIs to get up-to-date information on prices, volumes and trends of stocks, cryptocurrencies and RWA assets, as well as a huge data set collected by the team of traders, analysts, developers.
- **Caching Mechanism**: Uses Databases to quickly retrieve data, minimizing API calls and providing offline access.

### User Interface
- **Frontend**: Developed in React and TypeScript, includes dynamic visualizations such as crypto neuron graphs for market analysis, and an intuitive dashboard for quick navigation of top assets and AI agents for quick data analysis and time saving.
- **Mobile Integration**: A mobile version of the platform has been created for easy registration and secure access, and a mobile application for the AI model is also being prepared.

### Security
- **WalletConnect**: Ensures secure wallet integration with end-to-end encryption.
- **Data Privacy**: User data is anonymized and stored securely, with blockchain ensuring transparent reward tracking.

For developers, PromosPay offers a comprehensive API for building custom integrations, detailed in the [For Developers](/for-developers/api-access) section.
  `,
  'onboarding/getting-started': `
# Getting Started

To begin using PromosPay, follow these simple steps to set up your account and start exploring the platform's powerful AI-driven trading and forecasting tools.

### Step 1: Sign Up
1. Visit [PromosPay.ai](https://promospay.ai) and click "Get Started."
2. Connect your crypto wallet using WalletConnect (supports MetaMask, Trust Wallet, and others).
3. Verify your wallet via QR code or browser extension for secure access.

### Step 2: Explore the Platform
- **Dashboard**: View real-time market insights, AI-driven forecasts, and trending assets.
- **Earn**: Submit your own market predictions to earn Crypto Miles and train the AI.
- **Trade AI**: Use AI scanners and neuron metrics to identify trading opportunities.
- **Stake**: Swap and Stake with low fees and exclusive bonuses.

### Step 3: Set Up Preferences
- Customize your dashboard with preferred assets (stocks, crypto, RWA).
- Enable notifications for AI-driven alerts and market updates.
- Join the referral program to share your unique code and earn rewards.

### Next Steps
- Learn how to use AI SCAI in [Using AI SCAI](/onboarding/using-ai-scai).
- Start creating forecasts in [Creating Forecasts](/onboarding/creating-forecasts).
- Connect your mobile device via [Connect Mobile QR](/onboarding/connect-mobile-qr).
  `,
  'onboarding/using-ai-scai': `
# Using AI SCAI

SCAI is PromosPay's proprietary AI model designed to provide predictive analytics and market insights for crypto, stocks, and Real World Assets (RWA). Here's how to leverage SCAI for your trading and forecasting needs.

### Accessing SCAI
1. Navigate to the **Trade AI** section on the PromosPay dashboard.
2. Select an asset category (e.g., stocks, crypto, or RWA).
3. Use the AI Scanner to view real-time predictions and neuron metrics.

### Features
- **Predictive Analytics**: SCAI analyzes historical and real-time data to forecast price movements.
- **Neuron Metrics**: Visualize market trends through interactive bubble charts, highlighting high-potential assets.
- **Custom Alerts**: Set up notifications for specific price thresholds or market events.

### Tips for Success
- Combine SCAI insights with your own research for informed trading decisions.
- Contribute forecasts on Promoplace to improve SCAI's accuracy and earn rewards.
- Monitor trending analytics in [Trending Analytics](/onboarding/trending-analytics) to stay ahead of market trends.

For technical details, see [Model Capabilities](/scai-ai/model-capabilities).
  `,
  'onboarding/creating-forecasts': `
# Creating Forecasts

PromosPay allows users to create and submit market forecasts on Promoplace, contributing to AI training and earning Crypto Miles. Here's how to get started.

### Steps to Create a Forecast
1. Go to your PromosPay dashboard.
2. Choose an asset (e.g., BTC, AAPL) and select a timeframe (1h, 1d, 7d, 30d).
3. Enter your price forecast, describe the technical analysis, fundamental, etc. and submit it for verification by the AI.
4. Track your forecast's performance in the dashboard.

### Benefits
- **Earn Rewards**: Accurate forecasts earn crypto miles, tips, and a pool that can be used to gain platform benefits.
- **Train AI**: Your predictions help improve SCAI's accuracy, benefiting all users.
- **Compete**: Climb the leaderboard by submitting consistently accurate forecasts.

### Best Practices
- Use SCAI's analytics to inform your forecasts.
- Monitor market trends via [Trending Analytics](/onboarding/trending-analytics).
- Learn more about training AI in [Training AI](/promoplace/training-ai).

For more details, see [Overview of Promoplace](/promoplace/overview).
  `,
  'onboarding/connect-mobile-qr': `
# Connect Wallet

Connect your crypto wallet. This will allow you to easily interact with the platform - communicate with AI, earn crypto coins, trade, make transfers and bet on forecasts - and all this from your mobile device.

### How to Connect
1. Open the PromosPay app or website on your mobile device.
2. Navigate to the **Wallet Connect** section in the dashboard.
3. Scan the QR code displayed on your computer or other device or select another connection.
4. Confirm the connection in your wallet app (e.g., MetaMask, Trust Wallet).

### Benefits
- **Secure Access**: End-to-end encryption ensures safe wallet connections.
- **Convenience**: Manage your account, trade, and submit forecasts from anywhere.
- **Cross-Device Sync**: Seamlessly switch between desktop and mobile.

### Troubleshooting
- Ensure your wallet app supports WalletConnect.
- Check your internet connection if the QR code fails to scan.
- Contact support at [support@promospay.ai](mailto:support@promospay.ai) for assistance.

For more onboarding steps, see [Getting Started](/onboarding/getting-started).
  `,
  'onboarding/trending-analytics': `
# Trending Analytics

PromosPay's trending analytics feature provides real-time insights into market movements across crypto, stocks, and Real World Assets (RWA). This tool helps users identify high-potential opportunities and make informed decisions.

### Accessing Trending Analytics
1. Navigate to the **Trade AI** section on the PromosPay dashboard.
2. Select the **Trending Analytics** tab to view top-performing assets.
3. Filter by timeframe (1h, 1d, 7d, 30d) or asset category.

### Features
- **Market Trends**: Visualize price movements and volume spikes using interactive charts.
- **AI Signals**: Receive SCAI-generated recommendations for trending assets.
- **Custom Filters**: Narrow down analytics by sector, market cap, or volatility.

### Tips for Success
- Combine trending analytics with SCAI predictions for optimal trading strategies.
- Regularly check for updates to stay ahead of market shifts.
- Use insights to create forecasts on [Promoplace](/promoplace/overview).

For more details, see [AI Scanner](/trade-ai/ai-scanner).
  `,
  'promoplace/overview': `
# Overview of Promoplace

Promoplace is the heart of PromosPay's community-driven forecasting marketplace. It allows users to submit market predictions, compete for accuracy, and earn Crypto Miles while contributing to the training of the SCAI AI model. Here's how it works:

### Key Features
- **Submit Forecasts**: Predict price movements for stocks, crypto, or RWA.
- **Community Validation**: Forecasts are evaluated by the community and AI for accuracy.
- **Rewards**: Earn Crypto Miles and tokens for accurate predictions, redeemable for platform benefits.
- **AI Training**: Your forecasts help improve SCAI, making it smarter for all users.

### Getting Started
1. Go to your PromosPay dashboard.
2. Select an asset (e.g., AAPL, BTC) and submit your price prediction for a specific timeframe.
3. Monitor your forecast's performance and earn rewards based on accuracy.

For more details, see [Earning on Promoplace](/promoplace/earning) or [Training AI](/promoplace/training-ai).
  `,
  'promoplace/earning': `
# Earning on Promoplace

Promoplace offers multiple ways to earn Crypto Miles and tokens through accurate market forecasts and community participation. Here's how you can maximize your earnings.

### How to Earn
1. **Submit Accurate Forecasts**: Predict price movements for assets like BTC, AAPL, or RWA. Higher accuracy yields more Crypto Miles.
2. **Participate in Challenges**: Join weekly or monthly forecasting competitions to earn bonus rewards.
3. **Contribute to AI Training**: Your validated predictions help improve SCAI, earning additional Miles.

### Reward Structure
- **Base Rewards**: Earn 10–100 Crypto Miles per accurate forecast, based on accuracy and asset volatility.
- **Bonus Rewards**: Top performers on the leaderboard receive up to 500 Miles monthly.
- **Referral Boost**: Invite friends to Promoplace and earn a percentage of their rewards.

### Tips for Success
- Use SCAI analytics to inform your predictions ([AI Scanner](/trade-ai/ai-scanner)).
- Focus on high-volume assets for higher reward potential.
- Check your performance regularly in the Promoplace dashboard.

For more details, see [Overview of Promoplace](/promoplace/overview).
  `,
  'promoplace/training-ai': `
# Training AI on Promoplace

Promoplace allows users to contribute to the training of the SCAI AI model by submitting market forecasts. These predictions enhance the platform's predictive capabilities, benefiting the entire community.

### How It Works
1. **Submit Forecasts**: Predict price movements for selected assets on Promoplace.
2. **Validation**: Forecasts are evaluated by the community and AI for accuracy.
3. **Integration**: Accurate predictions are fed into SCAI's training dataset, improving its models.
4. **Rewards**: Earn Crypto Miles for contributing to AI training.

### Benefits
- **Improved AI**: Your forecasts make SCAI smarter, leading to better market predictions for all users.
- **Community Impact**: Contribute to a collective effort to advance AI-driven trading.
- **Earnings**: Gain Crypto Miles for each validated forecast used in training.

### Best Practices
- Submit detailed predictions with justifications to increase validation chances.
- Focus on diverse assets to provide varied data for SCAI.
- Learn more about SCAI in [Model Capabilities](/scai-ai/model-capabilities).

For more details, see [Overview of Promoplace](/promoplace/overview).
  `,
  'scai-ai/model-capabilities': `
# Model Capabilities

SCAI is PromosPay's proprietary AI model, designed to deliver cutting-edge market analysis and predictive insights for crypto, stocks, and Real World Assets (RWA).

### Core Capabilities
- **Predictive Modeling**: Forecasts price movements using historical data, real-time feeds, and user-generated predictions.
- **Neuron Metrics**: Visualizes market trends through dynamic bubble charts, highlighting high-potential assets.
- **Multi-Asset Analysis**: Covers crypto (BTC, ETH), stocks (AAPL, MSFT), and RWA with customizable timeframes (1h, 1d, 7d, 30d).
- **Adaptive Learning**: Integrates user forecasts from Promoplace to continuously improve accuracy.

### Technical Details
- **Data Sources**: Integrates with  API for real-time market data.
- **Training**: Combines supervised learning with community-driven data from Promoplace.
- **Performance**: Optimized for low-latency predictions, with database caching.

### Use Cases
- Traders: Identify trading opportunities with AI-driven signals.
- Forecast Creators: Enhance predictions with SCAI insights.
- Developers: Integrate SCAI via API for custom applications.

For more details, see [How It Works](/scai-ai/how-it-works).
  `,
  'scai-ai/how-it-works': `
# How It Works

SCAI (Smart Crypto AI) powers PromosPay's market analysis by combining advanced machine learning with user-driven data. Here's an overview of its operation.

### Workflow
1. **Data Collection**: SCAI aggregates real-time data from data collection, on-chain data and user forecasts from Promoplace.
2. **Analysis**: Processes historical and live data to generate predictive models for price movements.
3. **Visualization**: Displays insights through neuron metrics and bubble charts in the Trade AI section.
4. **Learning**: Incorporates validated user forecasts to refine its algorithms.

### Integration with PromosPay
- **Trade AI**: Access SCAI predictions via the dashboard for trading decisions.
- **Promoplace**: Submit forecasts to train SCAI and earn Crypto Miles.
- **API Access**: Developers can integrate SCAI outputs into custom applications ([API Access](/for-developers/api-access)).

### Benefits
- **Accuracy**: Continuously improves through community-driven training and teams.
- **Speed**: Delivers low-latency predictions for real-time trading.
- **Accessibility**: User-friendly interface for traders and newcomers.

For more details, see [Model Capabilities](/scai-ai/model-capabilities).
  `,
  'crypto-miles/earning': `
# Earning Crypto Miles

Crypto Miles is PromosPay's reward system, allowing users to earn points for platform activity and redeem them for tokens.

### How to Earn Crypto Miles
1. **Submit Forecasts**: Accurate predictions on Promoplace earn 10–100 Miles per forecast.
2. **Refer Friends**: Share your referral code to earn a percentage of their rewards ([Sharing Referral](/referrals/sharing-referral)).
3. **Participate in Challenges**: Join trading or forecasting competitions for bonus Miles.
4. **Engage Actively**: Complete tasks like connecting a wallet or setting preferences.

### Reward Structure
- **Base Earnings**: 10–100 Miles per action, based on impact (e.g., forecast accuracy).
- **Bonus Miles**: Up to 500 Miles for top performers in monthly challenges.
- **Referral Bonus**: 5–10% of referred users' earnings.

### Tips for Maximizing Earnings
- Focus on high-accuracy forecasts using SCAI analytics.
- Invite active users to boost referral rewards.
- Check the dashboard for new challenges and tasks.

For more details, see [Redeeming Crypto Miles](/crypto-miles/redeeming).
  `,
  'crypto-miles/redeeming': `
# Redeeming Crypto Miles

Crypto Miles can be redeemed for various benefits on PromosPay, enhancing your trading and platform experience.

### How to Redeem
1. Navigate to the **Crypto Miles** section in the PromosPay dashboard.
2. View your available Miles balance.
3. Choose from redemption options:
   - **Discounts**: Reduce fees on PRPay swaps.
   - **Premium Features**: Unlock advanced SCAI analytics or extended API access.
   - **Staking**: Convert Miles to staking tokens for passive income.
   - **Rewards**: Exchange for gift cards or partner offers.

### Redemption Process
1. Select a reward and confirm the Miles cost.
2. Complete the redemption transaction (blockchain-verified).
3. Receive your benefit instantly or within 24 hours (for external rewards).

### Tips for Success
- Check redemption options regularly for new offers.
- Prioritize high-value rewards like premium features for trading.
- Learn how to earn more Miles in [Earning Crypto Miles](/crypto-miles/earning).

For more details, see [PRPay Fees and Bonuses](/prpay/fees-bonuses).
  `,
  'trade-ai/neurons-metrics': `
# Neurons Metrics

Neural Metrics is a key tool in PromosPay's AI Trading section, providing a visual representation of market trends by optimizing large amounts of data for fast and accurate decision-making. This tool helps traders identify promising assets based on AI-powered analysis.

### How It Works
1. **Visualization**: Our AI receives asset data from multiple platforms, exchanges, and on-chain scans, and uses its own trained model to generate a concise analysis.
2. **Metrics**: Displays key indicators such as volume, volatility, custom metrics, and SCAI forecasts.
3. **Interactivity**: Click on the quick AI analysis in the terminal to view detailed analytics for the asset.

### Accessing Neurons Metrics
1. Go to the **Trade AI** section on the PromosPay dashboard.
2. Select an asset on the dashboard and click "AI Analysis" or start trading with AI.
3. Filter by timeframe (1h, 1d, 7d, 30d) or asset type (crypto, stocks, RWA).

### Benefits
- **Intuitive Insights**: Quickly identify trending assets with visual cues.
- **AI-Driven**: Powered by SCAI for accurate and timely data.
- **Customizable**: Adjust filters to focus on specific markets or metrics.

For more details, see [AI Scanner](/trade-ai/ai-scanner).
  `,
  'trade-ai/ai-scanner': `
# AI Scanner

The AI Scanner is a powerful tool in PromosPay's Trade AI section, designed to identify trading opportunities using SCAI's predictive analytics.

### How It Works
1. **Data Analysis**: SCAI scans real-time market data  and user forecasts.
2. **Opportunity Detection**: Identifies assets with high potential based on price trends, volume, and volatility.
3. **Recommendations**: Provides actionable trading signals with confidence scores.

### Accessing the AI Scanner
1. Navigate to the **Trade AI** section on the PromosPay dashboard.
2. Select the **AI Scanner** tab to view recommended assets.
3. Filter by sector, market cap, or timeframe for tailored results.

### Benefits
- **Precision**: Leverages SCAI's advanced algorithms for accurate predictions.
- **Speed**: Delivers real-time signals for fast decision-making.
- **Accessibility**: User-friendly interface for traders of all levels.

For more details, see [Neurons Metrics](/trade-ai/neurons-metrics).
  `,
  'trade-ai/trading-assets': `
# Trading Assets

PromosPay's Trade AI section enables users to trade a wide range of assets, including cryptocurrencies, stocks, and Real World Assets (RWA), with AI-driven insights.

### Supported Assets
- **Cryptocurrencies**: BTC, ETH, and major altcoins.
- **Stocks**: Leading companies like AAPL, MSFT, NVDA.
- **RWA**: Tokenized real-world assets like real estate or commodities.

### How to Trade
1. Navigate to the **Trade AI** section on the PromosPay dashboard.
2. Select an asset on the dashboard and click "AI Analysis" or start trading with AI..
3. Use Stake to execute trades with low fees and bonuses.
4. Monitor performance with real-time analytics.

### Benefits
- **AI Support**: SCAI provides predictions to guide trading decisions.
- **Low Fees**: Competitive rates via Stake and Trade.
- **Seamless Execution**: Fast and secure transactions with blockchain integration.

For more details, see [How to Buy](/stake/how-to-buy).
  `,
  'stake/how-to-buy': `
# How to STAKE

Stake is PromosPay's crypto stake and swap service, allowing users to purchase cryptocurrencies and swap assets with ease.

### Steps to Stake and Swap
1. Go to the **Stake** section on the PromosPay dashboard.
2. Select "Stake or swap" and choose the desired asset (e.g., Usdt, Usde).
3. Connect your wallet via WalletConnect ([Connect Mobile via QR](/onboarding/connect-mobile-qr)).
4. Enter the amount and select "Verify all details."
5. Confirm the transaction and receive assets in your wallet.

### Supported Payment Methods
- **Fiat**: Credit/debit cards, bank transfers.
- **Crypto**: Swap existing tokens (e.g., Usdt to prUSD).
- **Crypto Miles**: Use Miles to reduce fees ([Redeeming Crypto Miles](/crypto-miles/redeeming)).

### Benefits
- **Low Fees**: Competitive rates with bonuses for active users.
- **Fast Transactions**: Instant processing for most purchases.
- **Secure**: Blockchain-verified transactions with WalletConnect.

For more details, see [Fees and Bonuses](/prpay/fees-bonuses).
  `,
  'stake/fees-bonuses': `
# Fees and Bonuses

PRPay offers competitive fees and exclusive bonuses for crypto purchases and swaps on PromosPay.

### Fee Structure
- **Crypto Purchases**: 0.5–2% depending on payment method (credit card, bank transfer).
- **Crypto Swaps**: 0.1–0.5% per transaction.
- **No Hidden Fees**: Transparent pricing displayed before confirmation.

### Bonuses
- **Crypto Miles Discount**: Redeem Miles to reduce fees by up to 50% ([Redeeming Crypto Miles](/crypto-miles/redeeming)).
- **Referral Bonus**: Invite friends to earn fee-free transactions ([Sharing Referral](/referrals/sharing-referral)).
- **High-Volume Bonus**: Reduced fees for users with high trading volume.

### Tips for Saving
- Use Crypto Miles to lower fees.
- Trade during promotional periods for additional bonuses.
- Monitor the PRPay dashboard for new offers.

For more details, see [How to Buy](/prpay/how-to-buy).
  `,
  'referrals/sharing-referral': `
# Sharing Referral

PromosPay's referral program allows users to earn Crypto Miles by inviting friends to the platform.

### How to Share Your Referral Code
1. Navigate to the **Referrals** section on the PromosPay dashboard.
2. Copy your unique referral code or link.
3. Share it via email, social media, or messaging apps (e.g., Telegram, Twitter).

### Benefits
- **Earn Miles**: Receive 5–10% of referred users' Crypto Miles earnings.
- **Bonus Rewards**: Unlock additional Miles for reaching referral milestones (e.g., 10 invited users).
- **Community Growth**: Build a network of active traders and forecast creators.

### Tips for Success
- Share your code in crypto and trading communities.
- Use SCAI analytics to attract users with accurate predictions ([Using AI SCAI](/onboarding/using-ai-scai)).
- Track your referrals in the dashboard.

For more details, see [Using Referral](/referrals/using-referral).
  `,
  'referrals/using-referral': `
# Using Referral

Join PromosPay with a referral code to earn bonus Crypto Miles and enhance your platform experience.

### How to Use a Referral Code
1. Visit [PromosPay.ai](https://promospay.ai) and click "Get Started."
2. During signup, enter the referral code in the provided field.
3. Connect your wallet and complete onboarding ([Getting Started](/onboarding/getting-started)).
4. Receive bonus Crypto Miles after your first platform activity (e.g., forecast or trade).

### Benefits
- **Bonus Miles**: Earn 50–100 Miles for using a valid referral code.
- **Community Access**: Join a network of traders and forecast creators.
- **Enhanced Earnings**: Combine referral bonuses with other rewards ([Earning Crypto Miles](/crypto-miles/earning)).

### Tips for Success
- Ask friends or community members for their referral codes.
- Redeem Miles for discounts or premium features ([Redeeming Crypto Miles](/crypto-miles/redeeming)).
- Share your own code after signup ([Sharing Referral](/referrals/sharing-referral)).

For more details, see [Getting Started](/onboarding/getting-started).
  `,
  'for-developers/api-access': `
# API Access

PromosPay provides a robust API for developers to integrate SCAI analytics, market data, and trading functionalities into their applications.

### Getting Started
1. Visit the **For Developers** section on the PromosPay dashboard.
2. Request an API key by submitting a developer application.
3. Receive your key via email within 24–48 hours.

### API Features
- **Market Data**: Access real-time prices, volumes, and trends for crypto, stocks, and RWA.
- **SCAI Predictions**: Retrieve AI-driven forecasts and neuron metrics.
- **Trading**: Execute trades or swaps via PRPay endpoints.
- **Forecasts**: Submit and retrieve user forecasts from Promoplace.

### Requirements
- Valid PromosPay account with wallet connection.
- Compliance with API usage limits (500 requests/month on free tier).
- Secure handling of API keys (do not expose in client-side code).

### Next Steps
- Review the [Integration Guide](/for-developers/integration-guide) for setup instructions.
- Contact [support@promospay.ai](mailto:support@promospay.ai) for enterprise API plans.

For more details, see [Technical Overview](/about-promospay/technical-overview).
  `,
  'for-developers/integration-guide': `
# Integration Guide

The PromosPay API allows developers to build custom applications using the platform's blockchain and AI capabilities. This guide covers setup, authentication, and example use cases.

### Setup
1. Obtain an API key from [API Access](/for-developers/api-access).
2. Configure your application to use the PromosPay API endpoint: https://api.promospay.ai/v1.
3. Authenticate requests with your API key in the header: X-API-Key: your_key.

### Endpoints
- **GET /market/data**: Retrieve real-time market data for specified assets.
- **POST /forecasts**: Submit user forecasts to Promoplace.
- **GET /scai/predictions**: Access SCAI predictions for trading.
- **POST /trade**: Execute trades via PRPay.

### Example (Node.js)
\\\`\\\`\\\`javascript
const axios = require('axios');
const response = await axios.get('https://api.promospay.ai/v1/market/data?symbol=BTC', {
  headers: { 'X-API-Key': 'your_key' }
});
console.log(response.data);
\\\`\\\`\\\`

### Best Practices
- Use rate limiting to stay within API quotas.
- Cache responses to reduce API calls ([Technical Overview](/about-promospay/technical-overview)).
- Securely store API keys using environment variables.

For more details, see [API Access](/for-developers/api-access).
  `,
};

const Content: React.FC = () => {
  const { category, file } = useParams<{ category: string; file: string }>();
  const key = `${category}/${file}`;
  const content = docsContent[key] || '# Page Not Found\nPlease check the URL.';

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Content;