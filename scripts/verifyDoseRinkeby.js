const {holder, value, uri, deployedAddress} = require('./deployDoseRinkeby.json');
const hre = require('hardhat');
const {BN} = hre.web3.utils;

async function main() {
  // prepare constructor values
  const payout = holder;
  const payoutValue = [];
  for (const i in value) {
    payoutValue.push(new BN(value[i]).toString());
  }

  // verify to network
  await hre.run('verify:verify', {
    address: deployedAddress,
    contract: 'contracts/token/ERC20/DOSE.sol:DOSE',
    constructorArguments: [payout, payoutValue, uri],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
