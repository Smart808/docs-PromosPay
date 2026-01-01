// src/components/Content.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

// Object with all texts (exported for Navbar search)
export const docsContent: { [key: string]: string } = {
  'about-promospay/mission': `
# Mission

PromosPay is an AI-native prediction and streaming platform that connects live AI hosts, on-chain markets, and a reward economy in one place. Users watch AI-driven market streams, trade on yes/no prediction markets, and monetize their own analysis through tips, boosts, and on-chain rewards.

By combining decentralized finance (DeFi), machine learning, and community-driven data, PromosPay turns every forecast, trade, and viewer reaction into a signal for our ScAi models. This creates a self-reinforcing ecosystem where users can explore markets, launch and trade predictions, interact with AI models, and earn platform token rewards — all within a single, streamlined experience.

## Key Features

- **AI Streams & ScAi Models**: Watch AI-generated hosts (ScAi presenters) break down crypto, stocks, and macro events in real time. Each stream is powered by proprietary ScAi models that combine on-chain data, market feeds, and user behaviour.

- **On-Chain Prediction Markets**: Trade yes/no outcome tokens on events — from markets to macro and narratives. Users can open and close positions, speculate on scenarios, and see how AI-scored probabilities compare to market odds.

- **Creator-Driven Forecasts**: Users create their own predictions, attach theses and parameters, and publish them to the feed. High-quality and popular forecasts attract liquidity, tips, boosts, and become training signals for ScAi models.

- **PRO Token Rewards**: Use the platform actively — watch streams, place prediction trades, tip AI hosts and creators, boost markets, or purchase platform subscriptions — and earn rewards in the PRO token. PRO can be used for access to advanced features, boosts, and future governance mechanics.

- **Referral & Partner Campaigns**: Invite users via referral links and codes, participate in partner campaigns, and earn additional PRO rewards for activity across the ecosystem.


## How It Works

PromosPay operates on a blockchain foundation to ensure transparency, security, and decentralization. Users start by onboarding with a wallet connect, then explore AI tools for market insights. They can create and share Predictions on Promoplace, where community validation and AI learning occur. Successful contributions reward users with PRO token, which can be redeemed or used for premium features. The platform's AI evolves with user input, creating a self-improving loop that benefits everyone.

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
- **Market**: View real-time market insights, AI-driven predictions, and trending assets.
- **Promo**: Participate in promotions from the platform and partners to receive rewards.
- **ProLab**: Use AI modeling and predictions tools to promote your platform and monetize it.
- **PrPay**: Swap and Stake with low fees and exclusive bonuses.

### Step 3: Set Up Preferences
- Configure and select the markets you're interested in for analysis and trading..
- Enable notifications for AI-driven alerts and market updates.
- Join the referral program to share your unique code and earn rewards.

### Next Steps
- Learn how to use AI SCAI in [Using AI SCAI](/onboarding/using-ai-scai).
- Start creating Predictions in [Creating Forecasts](/onboarding/creating-forecasts).
- Connect your mobile device via [Connect Mobile QR](/onboarding/connect-mobile-qr).
  `,
  'onboarding/using-ai-scai': `
# Using AI SCAI

SCAI is PromosPay's proprietary AI model, developed to provide predictive analytics and market data on cryptocurrencies, stocks, global markets, and real-world assets (RWAs). Here's how to use SCAI for your trading and forecasting needs.

### Accessing SCAI
1. Navigate to the **Trade AI** section on the PromosPay dashboard.
2. Select an asset category (e.g., stocks, crypto, or RWA).
3. Use the AI Scanner to view real-time predictions and neuron metrics.

### Features
- **Predictive Analytics**: SCAI analyzes historical and real-time data to forecast price movements.
- **Neuron Metrics**: Visualize market trends through interactive model interactions, highlighting high-potential assets.
- **Custom Alerts**: Set up notifications for specific price thresholds or market events.

### Tips for Success
- Combine SCAI insights with your own research for informed trading decisions.
- Trade predictions  on PromoPay to improve SCAI's accuracy and earn rewards.
- Monitor trending analytics in [Trending Analytics](/onboarding/trending-analytics) to stay ahead of market trends.

For technical details, see [Model Capabilities](/scai-ai/model-capabilities).
  `,
  'onboarding/creating-predictions': `
# Creating Predictions

PromosPay allows users to create and submit market forecasts on Promoplace, contributing to AI training and earning Crypto Miles. Here's how to get started.

### Steps to Create a predictions
1. Go to your PromosPay dashboard.
2. Select a market, asset or other event, fill in the event settings and deposit funds into the pool.
3. Enter your price predictions, describe the technical analysis, fundamental, etc. and submit it for verification by the AI.
4. Track your predictions performance in the dashboard.

### Benefits
- **Earn Rewards**: Accurate predictions earn PRO, tips and a pool that can be used to gain platform benefits.
- **Train Ai**: Your predictions help improve SCAI's accuracy, benefiting all users.
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
1. Navigate to the **Market** section on the PromosPay dashboard.
2. Select the **Get Analytics** tab to view top-performing assets.
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
  'market/overview': `
# Overview of Market

The Market is the heart of PromosPay's community-driven prediction market platform. It allows users to trade market predictions, compete in accuracy, and earn cryptocurrency, all while participating in training the SCAI artificial intelligence model and accessing existing models. Here's how it works:

### Key Features
- **Prediction Trading**: Predict the price movements of stocks, cryptocurrencies, or other events.

- **AI Validation**: Predictions are assessed by the community and AI for accuracy.

- **Rewards**: Earn Rewards and tokens for trading predictions, which can be exchanged for platform benefits.

- **AI Training**: Your predictions help improve SCAI, making it smarter for all users.

### Getting Started
1. Go to your PromosPay dashboard.

2. Select Stream or Predictions and start trading.

3. Track the accuracy of AI forecasts and their podcasts and earn rewards for engaging with them.

For more details, see [Earning on Market](/market/earning) or [Training AI](/market/training-ai).
  `,
  'market/earning': `
# Earning on Market

The market offers a variety of ways to earn rewards and tokens for using AI hosts, trading forecasts, and participating in company promotions. Here's how you can maximize your earnings.

### How to Earn
1. **Buy a Subscription**: Purchase subscriptions to our hosts and receive market and asset data from them. The higher the accuracy, the greater the chances.

2. **Participate in Predictions**: Join prediction markets to profit from events and receive participation bonuses.

3. **Contribute to AI Training**: Your verified forecasts help improve SCAI, earning additional miles.

### Reward Structure
- **Base Rewards**: Earn for each accurate forecast, based on the accuracy and volatility of the asset, as well as for supporting and promoting our models.

- **Bonus Rewards**: Top performers on the leaderboard receive monthly rewards.

- **Referral Bonus**: Invite friends to PromosPay and receive a percentage of their rewards.

### Tips for Success
- Use SCAI analytics for forecasting ([AI Scanner](/trade-ai/ai-scanner)).

- Focus on assets with high trading volume for higher reward potential.

- Regularly monitor your performance on the PromosPay dashboard.

For more details, see [Overview of Market](/market/overview).
  `,
  'market/training-ai': `
# Training AI on PromosPay

The Market platform allows users to participate in training the SCAI artificial intelligence model, providing the opportunity to learn about market prediction trading. These predictions improve the platform's predictive capabilities, benefiting the entire community.

### How it works
1. **Submit Forecasts**: Trade forecasts of market movements and event outcome probabilities on PromosPay.

2. **Verification**: Forecasts are evaluated for accuracy by the community and the AI.

3. **Integration**: Accurate forecasts are fed into the SCAI training dataset, improving its models.

4. **Rewards**: Earn for participating in AI training.

### Benefits
- **Improved AI**: Your forecasts make SCAI smarter, resulting in improved market predictions for all users.

- **Community Impact**: Contribute to the collective effort to advance AI-powered trading.

- **Earnings**: Earn for interacting with our models used in training.

### Recommendations
- Provide successful prediction data with justifications to increase the chances of confirmation.

- Focus on different assets to provide diverse data for SCAI.

- Learn more about SCAI in [Model Capabilities](/scai-ai/model-capabilities).

For more details, see [Overview of Market](/market/overview).
  `,
  'scai-ai/model-capabilities': `
# Model Capabilities

SCAI is PromosPay's proprietary artificial intelligence model, designed to provide advanced market analysis and forecast data for cryptocurrencies, stocks, and other markets.

### Key Features
- **Predictive Modeling**: Forecasts price movements and events using historical and real-time data, as well as our clients' forecasts.

- **Neural Metrics**: Provides custom metrics and scanners for global markets and events.

- **Multi-Asset Analysis**: Covers cryptocurrencies (BTC, ETH), stocks (AAPL, MSFT), and RWA with customizable timeframes, as well as event-based forecasts for other global markets and trends.

- **Adaptive Learning**: Integrates user forecasts from PromoPay to continuously improve accuracy.

### Technical Specifications
- **Data Sources**: Integrates with APIs for real-time market data.

- **Learning**: Combines supervised learning with data collected from the PromosPay community.

- **Performance**: Optimized for low-latency forecasting, with database caching.

### Use Cases
- Traders: Identify trading opportunities with AI-powered signals.

- Forecasters: Improve forecasts with SCAI analytics.

- Developers: Integrate SCAI via API to create custom applications.

For more details, see [How It Works](/scai-ai/how-it-works).
  `,
  'scai-ai/how-it-works': `
# How It Works

SCAI (Smart Crypto AI) is a market analysis system from PromosPay that combines advanced machine learning techniques and user-generated data. Here's a quick overview of how it works.

### Workflow
1. **Data Collection**: SCAI collects real-time data from the data collection system, blockchain data, and user forecasts from PromosPay and other similar platforms.

2. **Analysis**: Processes historical and current data to create predictive models of price movements and events.

3. **Visualization**: Displays analytical data using neural network metrics and a data section.

4. **Learning**: Uses verified user forecasts to refine its algorithms.

### Integration with PromosPay
- **Market**: Access SCAI forecasts through the dashboard to make trading decisions.

- **ProLab**: Submit forecasts for SCAI training and earn crypto miles.

- **API Access**: Developers can integrate SCAI output into their custom applications ([API Access](/for-developers/api-access)).

### Benefits
- **Accuracy**: Continuously improved through community training and teamwork.

- **Speed**: Provides low-latency forecasts for real-time trading.

- **Accessibility**: User-friendly interface for traders and beginners.

For more details, see [Model Capabilities](/scai-ai/model-capabilities).
  `,
  'rewards/earning': `
# Earning Rewards

Rewards is PromosPay's reward system, allowing users to earn points for platform activity and redeem them for tokens.

### How to Earn Rewards
1. **Trade predictions**: Accurate predictions on PromosPay earn tokens PRO per predictions.
2. **Refer Friends**: Share your referral code to earn a percentage of their rewards ([Sharing Referral](/referrals/sharing-referral)).
3. **Participate in Promo*: Join trading or predictions competitions for bonus tokens.
4. **Engage Actively**: Buy subscriptions, get boosts, and tip models..

### Reward Structure
- **Base Earnings**: Per action, depending on its effectiveness (e.g., forecast accuracy).
- **Bonus Miles**: For top participants in monthly contests.
- **Referral Bonus**: 5–10% of the earnings of referred users.

### Tips for Maximizing Earnings
- Focus on high-accuracy forecasts using SCAI analytics.
- Invite active users to boost referral rewards.
- Check the dashboard for new challenges and tasks.

For more details, see [Redeeming Crypto Miles](/rewards/redeeming).
  `,
  'rewards/redeeming': `
# Redeeming 

Rewards can be redeemed for various benefits on PromosPay, enhancing your trading and platform experience.

### How to Redeem
1. Navigate to the **Rewards** section in the PromosPay dashboard.
2. View your available balance.
3. Choose from redemption options:
   - **Discounts**: Apply for a monthly subscription or premium features.
   - **Premium Features**: Unlock advanced SCAI analytics or extended API access.
   - **Staking**: Convert Rewards to staking tokens for passive income.
   - **Rewards**: Exchange for gift cards or partner offers.

### Redemption Process
1. Select a reward and confirm the token cost.
2. Complete the redemption transaction (blockchain-verified).
3. Receive your benefit instantly or within 24 hours (for external rewards).

### Tips for Success
- Check redemption options regularly for new offers.
- Prioritize high-value rewards like premium features for trading.
- Learn how to earn more Miles in [Earning Crypto Miles](/rewards/earning).

For more details, see [PRPay Fees and Bonuses](/prpay/fees-bonuses).
  `,
  'trade predictions/trading-basics': `
# Trading Basics

PromosPay lets you trade on future events by buying on-chain **YES/NO prediction tokens**.

Each market asks a simple question about the future, for example:

> “Will BTC close above 80,000 USDT on this date?”

Each possible outcome is represented by a separate token:

- **YES token** – pays out if the event happens  
- **NO token** – pays out if the event does not happen  

You do **not** trade the underlying asset directly.  
Instead, you trade **outcome tokens** that settle to **1** or **0** units of the settlement asset (for example, 1 USDC) when the event is resolved.

This makes each prediction market a **binary payoff**:

- Win → receive 1 unit of the settlement asset per token  
- Lose → receive 0  

Your maximum loss is always limited to the amount you spend when buying the tokens.

---

## Example: Basic Position

1. You buy **100 YES tokens** at a price of **0.40** each.  
   - You pay **40 USDC** in total.
2. If the event happens (YES wins):
   - Each YES token settles to **1 USDC**
   - You receive **100 USDC**
   - Your profit = 100 – 40 = **60 USDC** (before any fees or rewards)
3. If the event does not happen (NO wins):
   - Your YES tokens settle to **0**
   - Your loss is the **40 USDC** you initially paid

---

## Market Lifecycle (High-Level)

Every prediction market goes through several phases:

1. **Open** – trading is available, you can buy YES/NO tokens from the pool.  
2. **Locked** – trading is stopped a few days before resolution, you can only wait for the result.  
3. **Resolution** – the event outcome is determined by an oracle or the PromosPay team.  
4. **Settlement** – winning tokens are paid out, losing tokens become worthless.

The detailed rules for trading windows, lock period and settlement are described in:

- [Order Types & Execution](/trade predictions/order-types)  
- [Settlement, Lock & Fees](/trade predictions/settlement-and-fees)

---

_Last updated: {{update date here}}_

For more details on funding your account and buying, see [How to Buy](/stake/how-to-buy).
  `,

  /* ===================== 2. Order Types & Execution ===================== */
  'trade predictions/order-types': `
# Order Types & Execution

In the current version of the protocol, PromosPay uses a **single, simple order type**:

- **Instant Order (Pool Buy)** – similar to a market order, you buy YES or NO tokens directly from the on-chain liquidity pool at the current pool price.

There is:

- **no order book**,  
- **no limit orders**,  
- **no advanced routing** yet.

You always see the current price from the pool and decide how much to buy.

Future versions of the trading engine may introduce more sophisticated order types, but this document describes the **live implementation**.

---

## Instant Orders (Pool Buy)

An Instant Order is a request to **immediately buy** a specific amount of YES or NO tokens from the market’s liquidity pool at the best price currently available in that pool.

Orders are executed **without delay**, as long as:

- the market is still **Open for trading**, and  
- the **pool has enough liquidity** for your size.

Because pricing is handled by an automated pool curve, **large orders** can move the price inside the pool while your trade is being executed.

---

## How Instant Orders Work

1. **Choose a market**  
   Open the **Prediction Markets / Trade Predictions** section and select the event you want to trade.

2. **Select your side**  
   - Buy **YES** if you think the event will happen.  
   - Buy **NO** if you think the event will not happen.

3. **Enter size**  
   Depending on the interface, you can specify:
   - how much you want to spend (e.g. 50 USDC), or  
   - how many outcome tokens you want to receive (e.g. 100 YES tokens).

4. **Review price and max payout**  
   Before confirming, you see:
   - the **current pool price** (between 0 and 1 unit of the settlement asset),  
   - your **maximum possible payout** at settlement,  
   - your **maximum possible loss** (never more than what you pay now).

5. **Confirm in your wallet**  
   Sign the transaction and receive your YES or NO tokens in your wallet. From this moment you hold an on-chain position in that prediction market.

---

## Price Impact and Slippage

The price you see is determined by the **current state of the pool**. When you place a bigger order:

- the pool’s **YES/NO balance changes**,  
- the **price moves** along the curve,  
- your effective average price can be slightly worse than the initial quote.

The interface can show:

- **estimated average price**, and  
- **expected slippage** for your order size.

If the trade would exceed configured limits (for example, too extreme price move or insufficient liquidity), the transaction may be **reverted** by the smart contract.

---

## No Limit Orders (Yet)

PromosPay **does not support**:

- limit orders,  
- resting orders on an order book,  
- partial fills over time.

Every trade is an **immediate interaction** with the pool at its current price.

Advanced order types may be added in future versions of the protocol. When this happens, a separate section will be added to the documentation.

---

For lock rules, settlement and fees, see  
[Settlement, Lock & Fees](/trade predictions/settlement-and-fees).

---

_Last updated: {{update date here}}_
  `,

  /* ===================== 3. Settlement, Lock & Fees ===================== */
  'trade predictions/settlement-and-fees': `
# Settlement, Lock & Fees

This section explains:

- when trading is **available** or **blocked**,  
- how events are **resolved**,  
- how payouts are **calculated**,  
- how and when **fees** are applied.

---

## Trading Window and Lock Period

Each prediction market has a **fixed event time** (resolution time) and a **trading cut-off rule**:

- Trading is available **up until 5 days before** the scheduled event resolution time.  
- When there are **5 days or less** remaining until resolution, the market switches to **Locked**:
  - You **can no longer buy** additional YES/NO tokens.  
  - You **cannot sell or exit** your existing position early.  
  - You simply hold your tokens and wait for the final outcome.

In the UI you see:

- the **event end time**,  
- the **remaining time until the 5-day lock**, and  
- the current **status** of the market (Open / Locked / Settling).

This design keeps PromosPay markets closer to **fixed-horizon binary bets** with a clear and transparent timeline.

---

## Settlement and Payouts

When the real-world event resolves, the market moves to the **Resolution** phase.

### 1. Determining the outcome

The event result is determined by:

- a **Chainlink oracle**, or  
- the **PromosPay team**, according to published rules for that specific market.

The resolution source and conditions are described in the **market description** in the interface.

### 2. Settling outcome tokens

After the result is confirmed:

- Tokens for the **winning outcome** (YES or NO) settle to **1 unit** of the settlement asset (e.g. 1 USDC per token).  
- Tokens for the **losing outcome** settle to **0**.

### 3. Distributing winnings

- If you held the **winning side**, you receive the payout directly in the settlement asset to your wallet or platform balance.  
- If you held the **losing side**, you do not receive anything at settlement — your full risk was already paid up-front when buying the tokens.

### 4. Example

- You buy **100 YES tokens** at **0.40** each → you spend **40 USDC**.  
- The event happens → YES is the winning outcome.  
- At settlement you receive **100 USDC**.  
- Your **profit** = 100 – 40 = **60 USDC** (before any fees or rewards).  

If the event does **not** happen, YES loses:

- Your YES tokens settle to **0**.  
- Your **loss** is the **40 USDC** you spent initially.

---

## Closing or Selling Positions

In the current version of PromosPay:

- There is **no secondary market**, and  
- You **cannot sell your YES/NO tokens before resolution**.

Once you enter a market:

- You may add more exposure while the market is **Open** (more than 5 days before resolution).  
- After the market becomes **Locked**, you **hold until settlement**.

This means:

- Your **maximum loss** is known and limited at entry (the amount you spent on tokens).  
- Your **maximum payout** is known (number of tokens × 1 unit of the settlement asset).

Early exit, peer-to-peer trading, and advanced liquidity mechanisms are planned for later versions but are **not part of the current live protocol**.

---

## Fees

PromosPay charges a fee on trades in prediction markets.  
The exact fee parameters can vary by **market category**, **campaign**, or **partner program** and are displayed in the trading interface before confirmation.

General principles:

- Fees are applied when you **buy YES/NO tokens from the pool**.  
- There are **no extra protocol fees at settlement** – you receive your winning payout according to the market result.  
- Certain promotional or partner markets may use a different fee structure, which is explicitly shown in the market description.

Always check the **fee line** in the trading panel before confirming the transaction.

---

## Who Are You Trading Against?

On PromosPay, you are **not** trading against the platform itself.

All trades are executed against an **on-chain liquidity pool** that aggregates capital from:

- other users,  
- potential liquidity providers,  
- partner campaigns and programs.

When you:

- **buy YES tokens**, you take risk on the event happening and shift the pool’s exposure toward NO,  
- **buy NO tokens**, you take risk on the event not happening and shift the pool’s exposure toward YES.

The pool updates prices automatically according to its **pricing curve** and the current balance between YES and NO. This means:

- Prices are determined **algorithmically**, not by a central dealer.  
- Everyone interacts with the **same pool**, under the same rules.  
- Larger trades can move the price more than smaller ones.

---

## Trading Hours

Prediction markets on PromosPay are generally available **24/7**, as long as:

- the blockchain and oracle infrastructure are functioning normally, and  
- the market is in **Open** state (i.e. more than 5 days remain until event resolution).

Trading may be temporarily paused for:

- protocol upgrades and maintenance,  
- issues with external data feeds or oracles,  
- security or risk management reasons.

If a specific market is paused, locked, or under maintenance, this status is displayed in the UI, and new trades will not be accepted until it reopens.

---

_Last updated: {{update date here}}_
  `,

 'promo/activity in promotions': `
# Activity in Promotions

Promotional campaigns on PromosPay let you **earn rewards from companies and projects** by performing real actions: from social media posts and articles to placing prediction trades, inviting friends, or promoting AI presenters and models.

Brands, protocols, and communities launch promo campaigns on the platform, and users complete tasks to:

- get visibility for their forecasts and AI streams,  
- help projects grow their audience,  
- earn rewards in the PromosPay ecosystem token and other campaign prizes.

Everything is tied to your **wallet** and **PromosPay profile**, so your activity, progress, and rewards are fully trackable.

---

## What Is a Promotion?

A **promotion** (promo campaign) is a set of tasks launched by a company or project with a **reward pool** and clear **conditions**.

Typical examples:

- publish a post or thread about a project on social media,  
- write a review or article,  
- place a prediction on a specific market,  
- invite friends to the platform,  
- subscribe or join project social channels,  
- create an AI presenter/model and use it in content.

Companies set:

- **goals** (traffic, engagement, predictions, AI models, etc.),  
- **period** of the campaign,  
- **requirements** and allowed platforms,  
- **reward logic** (fixed per task, share of the pool, bonuses for top performers).

You, as a user, complete tasks and get rewarded after **verification**.

---

## Types of Promo Tasks

Promotions can include one or several types of actions. Typical task categories:

### 1. Social Media Actions

- Publish a post, thread, video, or story about the project.  
- Share a link to a stream, prediction market, or AI presenter.  
- Tag official accounts and use required hashtags.  

Examples:

- “Post a thread on X about our BTC prediction campaign and include your PromosPay forecast link.”  
- “Share a clip from an AI stream host and tag the project.”

You will need to provide **links** to your posts as proof.

---

### 2. Content & Articles

- Long-form content: blog post, Medium article, Substack, or review.  
- Analytical breakdown of a project, token, or prediction market.  
- Video reviews or tutorials about using PromosPay features.

Example:

- “Publish a Medium article explaining how to use our prediction market and include at least one example trade made through PromosPay.”

Such tasks usually have **higher rewards**, but stricter quality requirements.

---

### 3. Prediction & Trading Activity

- Place a prediction on a specific market (YES/NO position).  
- Participate in a series of markets (e.g. 3 or more predictions during campaign).  
- Use boosts or tips for your forecasts promoted in the campaign.

Examples:

- “Place at least one YES/NO position on the campaign market above the minimum stake.”  
- “Make 3 different predictions on our sponsored markets during the week.”

Most of these tasks are **tracked on-chain** automatically – no manual proof needed, but you must use the **correct markets** and **wallet**.

---

### 4. Referrals & Community Growth

- Invite a friend or community to join PromosPay.  
- Get others to follow project channels or join Discord/Telegram.  
- Bring new traders to a sponsored market or AI stream.

Examples:

- “Invite a friend who connects a wallet and makes their first prediction.”  
- “Bring new active members to the campaign’s community channel.”

To count, referrals typically need to:

- use your **referral link** or code, and  
- complete **minimum required activity** (e.g. connect wallet + trade).

---

### 5. AI Models & AI Hosts

- Create an AI model or AI presenter on PromosPay (when the feature is active).  
- Use this model in predictions, streams, or promo content.  
- Promote your AI host together with the partner brand.

Examples:

- “Create an AI presenter for crypto market commentary and record a short video explaining the partner protocol.”  
- “Use your AI model to generate predictions and share the results as a campaign case study.”

These are more advanced tasks and often come with **higher-tier rewards** and **selection** by the project team.

---

## How to Join a Promotion

1. **Open the Promotions section**  
   Go to the **Promotions / Promo Campaigns** tab in the PromosPay app.

2. **Select a campaign**  
   - Review title, description, reward pool, and end date.  
   - Check required actions and minimum conditions.

3. **Read the rules**  
   Each campaign has its own rules, including:
   - supported platforms (X, Telegram, Discord, YouTube, etc.),  
   - content format and language,  
   - on-chain actions (predictions, boosts, subscriptions),  
   - deadlines and geo/eligibility restrictions (if any).

4. **Connect your wallet & profile**  
   Make sure you are logged in with the wallet and account that will be used for:
   - on-chain actions (predictions, tips, trades),  
   - linking your social accounts (if required).

5. **Complete tasks**  
   Perform the requested actions:
   - publish content,  
   - place predictions,  
   - invite users,  
   - use AI models and streams.

6. **Submit proof (if needed)**  
   For off-chain tasks you may need to:
   - paste links to posts, articles, or videos,  
   - confirm your social accounts,  
   - provide short description or notes.

7. **Wait for moderation and rewards**  
   Tasks are checked by **SCAI (AI moderation)** and/or the **PromosPay team / campaign owner**.  
   If accepted, your reward is credited to your account according to the campaign rules.

---

## Proof & Verification

To keep promotions fair and useful for companies, activities must be **verifiable**.

### On-chain actions

The following are usually tracked automatically:

- placing predictions in specific markets,  
- using boosts and tips,  
- buying subscriptions or access tiers,  
- using partner products on-chain via PromosPay.

You just need to ensure you:

- use the **correct wallet**, and  
- interact with the **campaign-linked markets or contracts**.

### Off-chain actions

For social and content tasks you typically:

- submit a **URL link** to the post, article, or video,  
- ensure the content is **public and accessible**,  
- follow all required tags, mentions, hashtags, and links.

The AI and moderators can decline content that is:

- low-effort or spam,  
- irrelevant to the campaign,  
- misleading or violating platform rules.

In case of doubt, campaigns can request additional verification or manual review.

---

## Rewards and Payouts

Campaigns can reward users in different ways, depending on the sponsor:

- **Platform token** (e.g. PromosPay native token / PRO-type rewards),  
- **Stablecoins** or other on-chain assets,  
- **Boosts**, fee discounts, or subscription access,  
- Additional **exposure** for your forecasts, streams, or AI models.

Basic models:

- **Fixed reward per completed task** – you receive a set amount for each approved activity.  
- **Pool shared between participants** – total reward pool is split by contribution (e.g. views, clicks, quality score, number of valid referrals).  
- **Tiered rewards** – top N participants receive bonus tiers.

Your rewards and status are shown in:

- the **campaign page**, and  
- your **PromosPay profile / rewards section**.

---

## Quality, Fair Use & Rules

To keep promotions effective for companies and fair for users, the following rules apply:

- **No spam**: mass posting low-quality content or irrelevant comments may lead to rejection or banning from promotions.  
- **Original content**: direct copy-paste from other users or AI spam without value can be rejected.  
- **Correct tags & links**: if the required hashtags, mentions, or URLs are missing, the task may not be counted.  
- **One user – one identity**: attempts to game campaigns through fake accounts, bots, or sybil patterns can result in loss of rewards and restriction from future campaigns.  
- **Respect local law and platform policies**: your content must comply with legal requirements and social network rules.

PromosPay and campaign owners reserve the right to:

- reject fraudulent or manipulative activity,  
- change or adjust rules for active campaigns when abuse is detected,  
- pause or cancel a campaign if needed for security or compliance reasons.

---

## Tips to Maximize Your Promo Rewards

- Choose campaigns aligned with your **interests** (crypto, DeFi, trading, AI, etc.) – your content will be more natural and engaging.  
- Combine **on-chain activity** (predictions, boosts, subscriptions) with **off-chain content** to earn from both sides.  
- Use your **AI presenters and models** to create more unique and memorable promo content.  
- Focus on **quality over quantity** – high-quality posts and articles have a higher chance to be approved and featured.  
- Track deadlines – campaigns have **end dates**; tasks after that point will not be counted.

---

_Last updated: {{update date here}}_
  `,


'prolab/сreating models and predictions': `
# Creating Models and Predictions (ProLab)

**ProLab** is PromosPay’s builder for creating:

- **AI host models** (AI presenters),
- **prediction templates** (forecast and market templates),

which are then used in streams, promo campaigns, and YES/NO prediction trading.

> Important: ProLab is being rolled out in stages.  
> This documentation describes the intended behavior and may differ from early production versions.

---

## What You Can Build in ProLab

Within ProLab, users and companies will be able to create two core types of entities:

### 1. AI Host Models (ScAi Presenters)

An AI host model is an AI presenter that acts as a digital analyst / host:

- runs **AI streams** and market podcasts,
- comments on **crypto, stocks, and macro events**,
- explains **predictions and risk profiles**,
- can be used in **partner promo campaigns**.

Core parameters of an AI host:

- **Persona & Style** – communication tone (analyst, day trader, macro commentator, meme host, etc.).  
- **Market Focus** – what the host focuses on: crypto, DeFi, stocks, RWAs, politics, sports, etc.  
- **Data Sources** – what signals and models are taken into account (SCAI signals, user forecasts, on-chain data, etc.).  
- **Use Cases**:
  - host of a live or recorded stream,
  - voice/text commentator for prediction markets,
  - brand or campaign face in promos.

Over time, AI hosts will be connectable to:

- **Streams & Podcasts**,  
- **prediction markets**,  
- **promo promotions** (see *Activity in Promotions*).

---

### 2. Prediction Templates

Prediction templates are blueprints for future markets and forecasts. They:

- define the **structure of the question** (YES/NO or other binary formats),
- specify **resolution conditions** (date, data source / oracle),
- describe **metrics and context** for AI hosts and users,
- are used when launching new promo markets and campaigns.

Example templates:

- *“Will BTC close above X on date Y?”*  
- *“Will total TVL of protocol Z exceed N by the end of the quarter?”*  
- *“Will candidate A win the election in region B?”*

Templates make it possible to:

- quickly spin up standard markets,
- reuse question structures across multiple campaigns,
- link user forecasts directly to AI analysis.

---

## Basic Flow: Creating an AI Host Model

Planned basic flow in ProLab:

1. **Open ProLab**  
   Go to **ProLab / Models** inside the PromosPay platform.

2. **Select a base persona**  
   Choose the host type:
   - Crypto / DeFi analyst,  
   - Macro & rates commentator,  
   - Meme / community host,  
   - Sports & events commentator,  
   - custom brand persona.

3. **Configure behaviour**  
   Configure:
   - target markets and event categories,  
   - risk profile (conservative vs. aggressive style),  
   - priority of data sources (AI signals, on-chain data, user forecasts).

4. **Attach to use cases**  
   Link the model to:
   - streams (AI Streams),  
   - prediction markets,  
   - promo campaigns (for example: “our AI host leads this partner campaign”).

5. **Save & (optionally) submit for review**  
   Some public models or branded AI hosts may require moderation before they become available to other users or campaigns.

---

## Basic Flow: Creating Prediction Templates

The second part of ProLab is the prediction / market template builder:

1. **Open ProLab / Predictions**  
   Navigate to **ProLab / Predictions & Markets**.

2. **Define the question**  
   Formulate a binary question in a structured format, for example:
   - *“Will BTC close above 80,000 USDT on {{date}}?”*  
   - *“Will protocol TVL reach {{value}} by {{date}}?”*

3. **Choose market type**  
   Specify the market configuration:
   - **YES/NO prediction market** (standard binary),  
   - event category (crypto, macro, sports, politics, etc.),  
   - settlement asset (for example, USDC on an EVM chain).

4. **Set resolution rules**  
   Configure:
   - **resolution time** (date and time of the event),  
   - data source for the result:
     - **Chainlink oracle** (where available), or  
     - **PromosPay team resolution** according to documented rules.

5. **Attach AI models (optional)**  
   Choose which AI hosts and models:
   - will comment on this market,  
   - will provide probability hints,  
   - will use it in their streams and promo campaigns.

6. **Save & use in products**  
   A saved template can be:
   - used to create a **live trading market** in [Trade Predictions](/trade predictions/trading-basics),  
   - attached to a **promo campaign** (for example: “make a prediction on this market and earn rewards”),  
   - used to **train AI models** via user activity and forecast performance.

---

## Moderation and Access Levels

Some ProLab actions may require moderation, especially:

- public AI hosts available to other users,  
- branded models linked to companies,  
- market templates that may become public trading markets.

Planned access levels:

- **Private** – only for the owner / team.  
- **Shared** – available to a limited group or campaign.  
- **Public** – available to all PromosPay users (after moderation).

---

## Current Status

In the early ProLab rollout:

- parts of the functionality may be **limited** or invite-only,  
- creation of markets from templates may initially go **through the PromosPay team** (by request),  
- the visual builder for AI hosts and models will evolve over time.

The actual feature set and instructions will be updated as new releases go live.

---

_Last updated: {{update date here}}_

For trading details, see:

- [Trading Basics](/trade predictions/trading-basics)  
- [Settlement, Lock & Fees](/trade predictions/settlement-and-fees)
  `,



'prpay/how-to-work': `
# How PrPay Works

**PrPay** is PromosPay’s payment, swap and on-ramp module for the platform’s utility token **PRO**.

With PrPay you can:

- swap stablecoins into the **PRO** token,
- use PRO for subscriptions, boosts, tips and rewards,
- stake or provide liquidity to earn a share of platform fees,
- buy crypto via third-party on-ramp partners (e.g. MoonPay, Binance Pay, etc.).

---

## Supported Assets and Networks

PrPay currently supports stablecoins on EVM networks:

- **Ethereum / EVM chains**: USDT, USDC, USDE, USD1  
- **BNB Chain**: selected stablecoin pairs (e.g. USDT, USDC equivalents on BNB)

Stablecoins are swapped into the platform token **PRO**, which is used inside the PromosPay ecosystem.

---

## Swapping Stablecoins to PRO

You can convert supported stablecoins into **PRO** in a few steps:

1. **Open PrPay**
   - Go to the **PrPay** section in the PromosPay dashboard.

2. **Choose Swap**
   - Select **Swap to PRO** and choose the input asset (USDT, USDC, USDE, USD1, etc.).
   - Make sure you are on a supported network (Ethereum / BNB).

3. **Connect your wallet**
   - Connect via WalletConnect or other supported wallet providers  
     (for example: [Connect Mobile via QR](/onboarding/connect-mobile-qr)).

4. **Enter the amount**
   - Specify how much stablecoin you want to swap into PRO.
   - The interface will display:
     - estimated **PRO amount**,
     - **rate** and **fee**,
     - required **network gas**.

5. **Confirm the transaction**
   - Approve the token (if required) and confirm the swap in your wallet.
   - After confirmation, you receive **PRO** tokens in your wallet or platform balance.

---

## Using PRO in the Ecosystem

The **PRO** token is the core utility token of PromosPay. It can be used for:

- **Subscriptions and premium features**
  - Pay for access to AI models, advanced analytics, or premium prediction tools.

- **Tips and Boosts**
  - Tip AI hosts or creators.
  - Boost your predictions, promo campaigns, or content visibility.

- **Rewards and payouts**
  - Receive **rewards** in PRO for platform activity, campaigns, and partner promotions.

- **Burning and other mechanics**
  - Part of fees or platform flows may be used for **burning** PRO or other tokenomic actions (subject to protocol design and updates).

The exact mechanics can differ between product releases and campaigns, but PRO remains the main internal currency.

---

## Staking and Providing Liquidity

PrPay also allows users to participate in the platform’s liquidity and fee streams:

### 1. Staking PRO

You will be able to:

- **Stake PRO** to earn a share of:
  - trading fees from prediction markets,
  - payment / routing fees in PrPay,
  - other protocol-level rewards (where applicable).

Key points (planned behavior):

- You lock PRO for a period or in a staking pool.
- You receive **periodic rewards** in PRO or supported assets.
- APY is **variable** and depends on:
  - platform volume,
  - fees collected,
  - reward allocation for the current epoch.

### 2. Providing Liquidity

Advanced users can:

- Provide **liquidity** to pools used by PrPay and/or prediction markets.
- Earn a share of:
  - swap fees,
  - trading fees,
  - partner campaign incentives (if enabled).

> Note: Staking and LP products may have different risk profiles and lockups.  
> Always review the pool parameters and risks before committing capital.

---

## Buying Crypto via On-Ramp Partners

If you do not yet hold stablecoins, you can buy them directly through integrated **on-ramp providers**, such as:

- MoonPay,
- Binance Pay,
- and other supported partners (where available).

Typical flow:

1. Open **PrPay → Buy Crypto / On-Ramp**.
2. Select:
   - region / country,
   - fiat currency (e.g. USD, EUR),
   - target asset (USDT, USDC, etc. on Ethereum or BNB).
3. Choose your preferred **provider** (MoonPay, Binance Pay, etc.).
4. Complete KYC / payment on the provider’s side.
5. Receive the purchased stablecoins to your wallet.
6. Optionally, use **Swap to PRO** to convert part of this balance into the PRO token.

On-ramp terms (fees, limits, KYC) are defined by the external provider and may vary by region.

---

## Benefits of Using PrPay

- **Unified entry point**  
  Swap stablecoins, get PRO, stake, and provide liquidity from one interface.

- **Deep ecosystem integration**  
  PRO is directly tied to subscriptions, boosts, tips, rewards and tokenomics of PromosPay.

- **Flexible earning options**  
  Use staking and liquidity provision for passive income from platform activity.

- **Multiple payment paths**  
  Use both on-chain swaps and off-ramp/on-ramp partners to move between fiat and crypto.

---

For details on costs and incentives, see  
[Fees and Bonuses](/prpay/fees-bonuses).

---
`,

  'prpay/fees-bonuses': `
# Fees and Bonuses

PrPay offers transparent fees and protocol-driven incentives for swaps, staking and liquidity operations around the **PRO** token.

Fee levels and rewards may vary by network, pool, and campaign, but are always displayed in the interface before confirmation.

---

## Fee Structure

### 1. Swaps to PRO

- **Stablecoin → PRO swaps**
  - A small percentage fee is charged on each swap (for example, in a range similar to 0.1–0.5% depending on pool and network conditions).
  - Exact fee and effective rate are shown in the **PrPay** panel before you confirm the transaction.
- **Network gas**
  - You also pay the underlying network gas fee (Ethereum, BNB, etc.) required to process the transaction.

### 2. Staking and Liquidity

- **Staking PRO**
  - Usually no direct “entry fee” for staking, but:
    - rewards depend on protocol parameters,
    - early withdrawal (if applicable) may incur penalties or reduced rewards (as specified per pool).

- **Providing Liquidity**
  - No fee to deposit liquidity (unless configured otherwise in a specific campaign),
  - You earn a share of **swap and/or trading fees** generated by the pool,
  - Impermanent loss and other market risks may apply.

### 3. On-Ramp / Off-Ramp

- On-ramp partners (e.g. MoonPay, Binance Pay, etc.) have **their own fee structure**:
  - card payment fees,
  - FX spreads,
  - minimums/maximums.
- These fees are shown on the provider’s side before you confirm the purchase.

PrPay itself focuses on **on-chain fees and protocol-level charges**, which are visible in the app.

---

## Bonuses and Incentives

The legacy **Crypto Miles** program has been replaced by the **PRO token–based** incentive system.

Current and planned bonus mechanisms include:

### 1. PRO-Based Rewards

- Earn **PRO** for:
  - participating in promo campaigns,
  - trading in selected prediction markets,
  - completing activity tasks (see *Activity in Promotions*),
  - contributing to the ecosystem (e.g. forecasts, content, referrals where applicable).

Rewards can be distributed:
- directly in **PRO**, or  
- via boosted APY in staking / LP pools.

### 2. Volume and Loyalty Tiers

PrPay and PromosPay can introduce **fee discounts** or **boosted rewards** for:

- high-volume users (based on swap/trading volume),
- long-term stakers or liquidity providers,
- power users of AI models and prediction markets.

Examples (for illustration; actual tiers will be defined in product updates):

- lower swap fee for users who hold or stake a minimum amount of PRO,
- extra reward multipliers for specific campaigns or epochs.

### 3. Partner and Promo Campaigns

In cooperation with partners and sponsors, some pools and campaigns may offer:

- additional **PRO rewards**,
- reduced protocol fees for specific markets or time periods,
- one-time bonuses for first-time users or specific geographies.

All such promotions will be clearly marked in the interface and/or campaign description.

---

## Tips for Reducing Costs and Maximizing Rewards

- **Check fees before confirming**  
  Always review the swap and network fee line in the PrPay panel.

- **Use PRO strategically**  
  Holding and/or staking PRO during campaigns can unlock fee discounts or increased rewards where available.

- **Monitor promo campaigns**  
  Follow PromosPay announcements and the **Activity / Promotions** sections to:
  - join tasks that pay in PRO,
  - gain multipliers for your current usage.

- **Leverage on-chain timing**  
  Executing larger on-chain transactions when gas fees are lower can significantly reduce total costs.

---

For more details on workflow, see:

- [How PrPay Works](/prpay/how-to-work)  
- [Trading Basics](/trade predictions/trading-basics)

---
`,

  'referrals/using-referral': `
# Using the Referral Program

Join PromosPay using a referral code to earn bonus rewards and enhance your platform experience.

### How to use a referral code
1. Go to the [PromosPay.ai](https://promospay.ai) website and click "Get Started."

2. When registering, enter the referral code in the appropriate field.

3. Connect your wallet and complete registration ([Getting Started](/onboarding/getting-started)).

4. Start using platform features (e.g., AI analysis or trades).

### Benefits
- **Bonus**: Earn platform tokens for using a valid referral code.

- **Community Access**: Join a network of traders and AI creators.

- **Increased Bonuses**: Combine referral bonuses with other rewards (Earnings Pro).

### Tips for Success
- Ask friends or community members for their referral codes.

- Exchange PRO for discounts or premium features .

- Share your code after registration ([Share Referral Link](/referrals/sharing-referral)).

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
- **SCAI Predictions**: Retrieve AI-driven predictions and neuron metrics.
- **Trading**: Execute trades or swaps via PRPay endpoints.
- **Prediction**: Submit and retrieve user predictions  from Promospay

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
- **POST /forecasts**: Submit user predictions to PromosPay
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