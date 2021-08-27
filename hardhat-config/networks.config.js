module.exports = {
  networks: {
    localhost: {
      accounts: {
        initialIndex: 0,
        count: 20,
        path: "m/44'/60'/0'/0",
        mnemonic: 'test test test test test test test test test test test junk',
        accountsBalance: '10000000000000000000000',
      },
    },
  },
};
