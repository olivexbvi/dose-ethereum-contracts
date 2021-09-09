const {accountPrivateKey, rinkebyUrl, mainnetUrl, etherscanApiKey} = require('./hardhat.config.private.json');
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');

module.exports = {
  // place here any user configuration which will override any pre-loaded configuration items (via lodash deep-merge)
  etherscan: {
    apiKey: etherscanApiKey,
  },
  networks: {
    rinkeby: {
      url: `${rinkebyUrl}`,
      accounts: [`0x${accountPrivateKey}`],
      network_id: 4,
      gasPrice: 1e9,
      skipDryRun: false,
    },
    mainnet: {
      url: `${mainnetUrl}`,
      accounts: [`0x${accountPrivateKey}`],
      network_id: 1,
      gasPrice: 60e9,
      skipDryRun: false,
    },
  },
};
