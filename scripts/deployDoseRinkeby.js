const {holder, value, uri} = require('./deployDoseRinkeby.json');
const {web3} = require('hardhat');
const {BN} = web3.utils;

async function main() {
  // prepare mint values
  const payout = holder;
  const payoutValue = [];
  for (const i in value) {
    payoutValue.push(new BN(value[i]).toString());
  }

  // deploy to network
  const DOSE = await ethers.getContractFactory('DOSE');
  const deployedDose = await DOSE.deploy(payout, payoutValue, uri);
  console.log('DOSE deployed to: ' + deployedDose.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
