require('dotenv').config();
const HDWalletProvider = require("truffle-hdwallet-provider-privkey")
const privateKeys = process.env.PRIVATE_KEYS || ""
const etherscan = process.env.ETHERSCAN_API_KEY
module.exports = {
  networks: {
     ganache: {
      host: "127.0.0.1",   
      port: 7545,            
      network_id: "*",       
     },
     kovan: {
       provider: function() {
         return new HDWalletProvider(
            privateKeys.split(','), // Array of account private keys
            `https://eth-kovan.alchemyapi.io/v2/${process.env.KOVAN_ALCHEMY_API_KEY}` // URL to an Ethereum Node - Alchemy
         )
       },
       gas: 5000000,
       gasPrice: 25000000000,
       network_id: 42
     },
     rinkeby: {
      provider: function() {
        return new HDWalletProvider(
           privateKeys.split(','), // Array of account private keys
           `https://eth-rinkeby.alchemyapi.io/v2/${process.env.RINKEBY_ALCHEMY_API_KEY}` // URL to an Ethereum Node - Alchemy
        )
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 4
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY 
  },
  compilers: {
    solc: {
      version : "0.8.4",
      optimizer: {
        enabled: false,
        runs: 200
      }
    }
  }
};