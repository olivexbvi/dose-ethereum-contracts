#!/usr/bin/env node

const fs = require('fs');

function createFromDefault(path, dictString) {
  if (!fs.existsSync(path)) {
    fs.writeFile(path, dictString, function (err) {
      if (err) throw err;
    });
  }
}

const hardhatConfigPrivateData = {
  accountPrivateKey: '0000000000000000000000000000000000000000000000000000000000000000',
  rinkebyUrl: 'https://eth-rinkeby.alchemyapi.io/v2/123abc123abc123abc123abc123abcde',
  mainnetUrl: 'https://eth-mainnet.alchemyapi.io/v2/123abc123abc123abc123abc123abcde',
  etherscanApiKey: '',
};
const sampleDeployData = {
  deployer: '0x0000000000000000000000000000000000000000',
  holder: ['0x0000000000000000000000000000000000000000'],
  value: ['0'],
  uri: 'sampleuri',
  deployedAddress: '0x0000000000000000000000000000000000000000',
};
[
  ['hardhat.config.private.json', JSON.stringify(hardhatConfigPrivateData)],
  ['scripts/deployDoseRinkeby.json', JSON.stringify(sampleDeployData)],
  ['scripts/deployDoseMainnet.json', JSON.stringify(sampleDeployData)],
].map((n) => {
  [file, value] = n;
  createFromDefault(file, value);
});
