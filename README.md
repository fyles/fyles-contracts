## fyles-contracts

Smart contracts for Fyles, an IPFS-backed public filestore with support for Proof of Existence.

[![Build Status](https://travis-ci.org/fyles/fyles-contracts.svg?branch=master)](https://travis-ci.org/fyles/fyles-contracts)

## About
Fyles is a web3-powered dApp that allows you to easily upload files to [IPFS](https://ipfs.io), a distributed storage protocol. A reference to each file is then stored in a smart contract associated with your wallet address, giving you easy access to your files. This process allows for PoE, effectively proving the file existed at a certain point in time by attaching the file hash to a transaction on the Ethereum blockchain.

You can read more about Proof of Existence [here](https://www.newsbtc.com/proof-of-existence).

## Usage
Follow the README in the [fyles-web](https://github.com/fyles/fyles-web) repo to try it out.

Alternatively you can interact with the smart contract directly by using the following settings on https://www.myetherwallet.com/#contracts:
* Network: Rinkeby
* Contract Address: `0x`
* ABI: Contents of `abi` in [FileStorage.json](https://github.com/fyles/fyles-contracts/blob/master/build/contracts/FileStorage.json)

## Installation

### Dependencies
Install all dependencies.

`$ yarn install`

### Run locally
Start a local instance and navigate to http://localhost:3000.

`$ yarn start`

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
Smart contracts are located in `contracts/` and migration scripts can be found in `migrations/`.

#### Start local blockchain
`$ ganache-cli`

#### Compile contracts
`$ truffle compile`

#### Migrate contracts
This will deploy your contracts and generate ABI's in `build/contracts/`.

* Development: `$ truffle migrate`
* Rinkeby: `$ truffle migrate --network rinkeby`

Add `--reset` when switching between networks or to force a migration.

#### Test contracts
Tests are located in `test/`.

`$ truffle test`

## Issues
If you have any questions or problems please file a ticket.
