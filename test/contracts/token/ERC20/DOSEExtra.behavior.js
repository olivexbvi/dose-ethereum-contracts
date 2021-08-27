const {artifacts, accounts, web3} = require('hardhat');
const {createFixtureLoader} = require('@animoca/ethereum-contracts-core/test/utils/fixture');
const {expectEventWithParamsOverride} = require('@animoca/ethereum-contracts-core/test/utils/events');
const {BN, expectEvent, expectRevert} = require('@openzeppelin/test-helpers');
const interfaces20 = require('../../../../src/interfaces/ERC165/ERC20');
const {behaviors, constants, interfaces: interfaces165} = require('@animoca/ethereum-contracts-core');
const {Zero, One, MaxUInt256, ZeroAddress} = constants;

function extraBehavior(implementation) {
  const {features, interfaces, revertMessages, eventParamsOverrides, deploy} = implementation;
  const [deployer, owner, recipient, spender, maxSpender] = accounts;

  describe('extra behavior', function () {
    describe('setTokenURI(string)', function () {
      const initialSupply = new BN('100');
      const changeUri = `newuri`;

      beforeEach(async function () {
        this.token = await deploy([owner], [initialSupply], deployer);
      });

      it('set token URI by deployer', async function () {
        await this.token.setTokenURI(changeUri, {from: deployer});
        (await this.token.tokenURI()).should.be.equal(changeUri);
      });

      it('reverts if set token URI by none deployer', async function () {
        const originalUri = await this.token.tokenURI();
        await expectRevert(this.token.setTokenURI(changeUri, {from: owner}), revertMessages.NonMinter);
        (await this.token.tokenURI()).should.be.equal(originalUri);
      });
    });
  });
}

module.exports = {
  extraBehavior,
};
