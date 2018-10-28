require('babel-register')
require('babel-polyfill')
require('dotenv').config();

const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*"
        },
        rinkeby: {
            provider: function() {
                return new HDWalletProvider(process.env.WALLET_MNENOMIC, "https://rinkeby.infura.io/v3/" + process.env.INFURA_API_KEY, 0)
            },
            network_id: 4
        }
      }
};
