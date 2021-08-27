const {artifacts, accounts} = require('hardhat');
const interfaces20 = require('../../../../src/interfaces/ERC165/ERC20');
const {constants, behaviors} = require('@animoca/ethereum-contracts-core');
const {ZeroAddress} = constants;

describe('DOSEReceiverMock', function () {
  const [deployer] = accounts;

  beforeEach(async function () {
    this.contract = await artifacts.require('DOSEReceiverMock').new(true, ZeroAddress, {from: deployer});
  });

  behaviors.shouldSupportInterfaces([interfaces20.ERC20Receiver]);
});
