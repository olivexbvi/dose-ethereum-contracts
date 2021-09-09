const {deployer, holder, value, uri} = require('./deployDoseMainnet.json');
const {web3} = require('hardhat');
const {toWei} = web3.utils;
const provider = require('eth-provider');
const frame = provider('frame');

async function main() {
  // prepare mint values
  const payout = holder;
  const payoutValue = [];
  for (const i in value) {
    payoutValue.push(toWei(value[i], 'ether'));
  }
  // confirm signer in the wallet
  if (deployer) {
  } else {
    throw 'no deployer decided';
  }
  const allAddress = await frame.request({method: 'eth_requestAccounts'});
  const signer = allAddress.find((address) => address == deployer);
  if (signer) {
  } else {
    throw 'decided signer not find';
  }

  // deploy to network
  const DOSE = await ethers.getContractFactory('DOSE');
  const tx = await DOSE.getDeployTransaction(payout, payoutValue, uri);
  // change signer
  tx.from = signer;
  const transactionHash = await frame.request({method: 'eth_sendTransaction', params: [tx]});

  console.log('Process with transactionHash: ' + transactionHash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
