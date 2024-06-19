require("@nomiclabs/hardhat-ethers");
require('dotenv').config({ path: './.env.local' });


const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;

module.exports = {
  defaultNetwork: "polygon",
  networks: {
    hardhat: {
    },
    polygon: {
      url: process.env.NEXT_PUBLIC_RPC_URL,
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.10",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
}


// 0xC70BB589700e378D49A679507026380C93305909
