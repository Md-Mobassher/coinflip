# Coin Flip Game

This project is a decentralized coin flip game built on the Ethereum blockchain. Users can connect their wallet, place bets using cryptocurrencies like ETH, and flip a coin. If the coin lands on the side they chose, they win double their bet. If not, they lose their bet.

## Live Demo

[Coin Flip Game - Live Link](https://coinflip-cyan-alpha.vercel.app)

## Features

- **Connect Wallet**: Users can connect their Ethereum wallet using MetaMask.
- **Place Bets**: Users can select the amount of tokens (ETH) they want to bet and choose a side (heads or tails).
- **Flip Coin**: The coin flip is animated on the screen, and the result determines whether the user wins or loses.
- **Smart Contract**: The bets are handled through a smart contract deployed on the Ethereum blockchain.
- **Transaction Tracking**: Users can view the transaction details on Etherscan after the bet is placed.

## Technology Stack

### Frontend

- **React**: For building the user interface.
- **Tailwind CSS**: For styling the application.
- **Ethers.js**: For interacting with the Ethereum blockchain.

### Backend / Smart Contract

- **Solidity**: The programming language used to write the smart contract.
- **Hardhat**: A development environment for Ethereum software.
- **Infura**: For connecting to the Ethereum network.

### Deployment

- **Vercel**: For deploying the frontend application.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MetaMask installed in your browser.
- An Infura account for connecting to the Ethereum network.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Md-Mobassher/coinflip.git
   cd coinflip
   ```

````

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Compile the smart contract**:

   ```bash
   npx hardhat compile
   ```

4. **Deploy the smart contract**:

   Update the `scripts/deploy.js` with your contract details, and then run:

   ```bash
   npx hardhat run scripts/deploy.js --network rinkeby
   ```

   Note the contract address that is output after deployment.

5. **Start the development server**:

   ```bash
   npm run dev
   ```

6. **Access the application**:

   Open your browser and navigate to `http://localhost:3000`.

### Usage

1. **Connect your wallet**: Click the "Connect Wallet" button to connect your MetaMask wallet.
2. **Place your bet**: Enter the amount of ETH you want to bet and choose heads or tails.
3. **Flip the coin**: Watch the coin flip animation and see if you've won.

### Testing with Testnet Tokens

You can get testnet ETH from a faucet to use in this game:

- [Rinkeby Faucet](https://faucet.rinkeby.io/)


### Future Enhancements

- Add support for more cryptocurrencies like SOL and BTC.
- Improve the UI/UX design.
- Implement more features like a leaderboard or historical game data.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Ethers.js](https://docs.ethers.io/v5/) - A library for interacting with Ethereum.
- [Hardhat](https://hardhat.org/) - Ethereum development environment.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.

---

Happy flipping!

````
