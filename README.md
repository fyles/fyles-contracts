![fyles](https://gateway.ipfs.io/ipfs/Qmaj9MshzTireTPM4DFdfjEFjvqBnuRBL8SAqC3fb4igsT)

Smart contracts for fyles, an IPFS-backed public filestore with support for Proof of Existence.

[![Build Status](https://travis-ci.org/marcdown/fyles-contracts.svg?branch=master)](https://travis-ci.org/marcdown/fyles-contracts)
[![Coverage Status](https://coveralls.io/repos/github/marcdown/fyles-contracts/badge.svg?branch=master)](https://coveralls.io/github/marcdown/fyles-contracts?branch=master)

## About
fyles is a web3-powered dApp that allows you to easily upload files to [IPFS](https://ipfs.io), a p2p distributed file system. The file hash is then stored in a smart contract associated with your wallet address, providing access to all of your files. This process allows for Proof of Existence, effectively proving the file existed at a certain point in time by attaching the same file hash to a transaction on the Ethereum blockchain.

You can read more about IPFS [here](https://hackernoon.com/a-beginners-guide-to-ipfs-20673fedd3f) and the concept of PoE [here](https://www.newsbtc.com/proof-of-existence).

## Usage
Follow the README in the [fyles](https://github.com/marcdown/fyles) repo to try it out locally.

Alternatively you can interact with the smart contract directly by using the following settings on https://www.myetherwallet.com/#contracts:
* Network: Rinkeby
* Contract Address: `0xf5469167c78f298387e3dba27198cebc4d90b81a`
* ABI: Contents of `abi` in [FileStorage.json](/build/contracts/FileStorage.json)

## Setup

### Dependencies
Install all dependencies.

`$ yarn`

*Note: [Truffle](https://truffleframework.com/truffle) and [Ganache](https://truffleframework.com/ganache) will be automatically installed as dev dependencies.*

### Configure env variables

```
$ cp env.sample .env
$ vim .env
```

We use [Infura](https://infura.io) to connect to `geth` and `ipfs` nodes. Sign up for a free account at https://infura.io, create an API key and add to `INFURA_API_KEY`.

Copy your wallet mnemonic and add to `WALLET_MNENOMIC`.

## Development
Smart contracts are located in `contracts/` and migration scripts can be found in `migrations/`.

### Start local blockchain
`$ ganache-cli`

### Compile contracts
`$ truffle compile`

### Migrate contracts
This will deploy your contracts and generate ABI's in `build/contracts/`.

* Development: `$ truffle migrate`
* Rinkeby: `$ truffle migrate --network rinkeby`

Add `--reset` when switching between networks or to force a migration.

### Test contracts
Tests are located in `test/`.

`$ truffle test`

## Issues
If you have any questions or problems please file a ticket.
