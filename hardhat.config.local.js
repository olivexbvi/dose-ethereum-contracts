const {accountPrivateKey, rinkebyUrl, etherscanApiKey} = require('./hardhat.config.private.json');
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
      gasPrice: 10e9,
      skipDryRun: true,
    },
  },
};
