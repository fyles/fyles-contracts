## Fyles

IPFS-backed smart contract filestore with support for Proof of Existence.

[![Build Status](https://travis-ci.org/fyles/fyles-contracts.svg?branch=master)](https://travis-ci.org/fyles/fyles-contracts)

## About
Fyles is a simple Web3-powered dApp that allows you to easily upload files to [IPFS](https://ipfs.io), a distributed storage protocol. A reference to each file is then stored in a smart contract associated with your wallet address, allowing you to reference your files anytime. This process allows for PoE, effectively proving the file existed at a certain point in time via the Ethereum blockchain.

You can read more about Proof of Existence [here](https://www.newsbtc.com/proof-of-existence).

## Usage
Follow the README in the [fyles-web](https://github.com/fyles/fyles-web) repo to try it out. 

## Installation

### Node
Make sure you have Node >= 8.3 installed by running `node --version`. If not, install the latest [here](https://nodejs.org/en/download).

### Dependencies
Install all dependencies.

`$ npm install`

### Run locally
Start a local instance and navigate to http://localhost:3000.

`$ npm start`

## Development

### Configure env variables

```
$ cp env.sample .env
$ vim .env
```

We use [Infura](https://infura.io) to connect to `geth` and `ipfs` nodes. Sign up for a free account at https://infura.io, create an API key and add to `INFURA_API_KEY`.

Copy your wallet mnemonic and add to `WALLET_MNENOMIC`.

### Truffle Framework
Install [Truffle](https://truffleframework.com/truffle) and [Ganache](https://truffleframework.com/ganache).

```
$ npm install -g truffle
$ npm install -g ganache-cli
```

### Solidity development
Smart contracts are included in `contracts/` and migration scripts are located in `migrations/`.

#### Start local blockchain
`$ ganache-cli`

#### Compile contracts
`$ truffle compile`

#### Migrate contracts
This will deploy your contracts and generate ABI's in `build/contracts/`.

development: `$ truffle migrate --reset`

rinkeby: `$ truffle migrate --reset --network rinkeby`

#### Test contracts
`$ truffle test`

### Deploy static files
`$ npm run build`

## Issues
If you have any questions or problems please file a ticket!
