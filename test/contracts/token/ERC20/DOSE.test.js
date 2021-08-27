const {artifacts, accounts, web3} = require('hardhat');
const {BN, expectRevert} = require('@openzeppelin/test-helpers');
const {constants} = require('@animoca/ethereum-contracts-core');
const {One, Two, ZeroAddress} = constants;
const {createFixtureLoader} = require('@animoca/ethereum-contracts-core/test/utils/fixture');
const {shouldBehaveLikeERC20} = require('@animoca/ethereum-contracts-assets/test/contracts/token/ERC20/behaviors/ERC20.behavior');
const {extraBehavior} = require('./DOSEExtra.behavior');

const implementation = {
  contractName: 'DOSEMock',
  name: 'DOSE',
  symbol: 'DOSE',
  decimals: new BN(18),
  tokenURI: 'urimock',
  revertMessages: {
    ApproveToZero: 'ERC20: zero address spender',
    TransferExceedsBalance: 'ERC20: insufficient balance',
    TransferToZero: 'ERC20: to zero address',
    TransferExceedsAllowance: 'ERC20: insufficient allowance',
    TransferFromZero: 'ERC20: insufficient balance',
    BatchTransferValuesOverflow: 'ERC20: values overflow',
    BatchTransferFromZero: 'ERC20: insufficient balance',
    AllowanceUnderflow: 'ERC20: insufficient allowance',
    AllowanceOverflow: 'ERC20: allowance overflow',
    InconsistentArrays: 'ERC20: inconsistent arrays',
    TransferRefused: 'ERC20: transfer refused',
    MintToZero: 'ERC20: zero address',
    BatchMintValuesOverflow: 'ERC20: values overflow',
    SupplyOverflow: 'ERC20: supply overflow',
    PermitFromZero: 'ERC20: zero address owner',
    PermitExpired: 'ERC20: expired permit',
    PermitInvalid: 'ERC20: invalid permit',
    NonMinter: 'Ownable: not the owner',
  },
  features: {
    ERC165: true,
    EIP717: true, // unlimited approval
    AllowanceTracking: true,
  },
  interfaces: {
    ERC20: true,
    ERC20Detailed: true,
    ERC20Metadata: true,
    ERC20Allowance: true,
    ERC20BatchTransfer: true,
    ERC20Safe: true,
    ERC20Permit: true,
  },
  methods: {
    // ERC20Mintable
    'mint(address,uint256)': async (contract, account, value, overrides) => {
      return contract.mint(account, value, overrides);
    },
    'batchMint(address[],uint256[])': async (contract, accounts, values, overrides) => {
      return contract.batchMint(accounts, values, overrides);
    },
  },
  deploy: async function (initialHolders, initialBalances, deployer) {
    const registry = await artifacts.require('ForwarderRegistry').new({from: deployer});
    const forwarder = await artifacts.require('UniversalForwarder').new({from: deployer});
    return artifacts.require('DOSEMock').new(initialHolders, initialBalances, registry.address, forwarder.address, {from: deployer});
  },
};

describe('DOSEMock', function () {
  this.timeout(0);

  const [deployer, other] = accounts;

  context('constructor', function () {
    it('it reverts with inconsistent arrays', async function () {
      await expectRevert(implementation.deploy([], [Two], deployer), implementation.revertMessages.InconsistentArrays);
      await expectRevert(implementation.deploy([other, other], [Two], deployer), implementation.revertMessages.InconsistentArrays);
    });
  });

  context('minting', function () {
    const fixtureLoader = createFixtureLoader(accounts, web3.eth.currentProvider);

    const fixture = async function () {
      this.token = await implementation.deploy([], [], deployer);
    };

    beforeEach(async function () {
      await fixtureLoader(fixture, this);
    });
    context('mint(address,uint256)', function () {
      it('reverts if the sender is not a minter', async function () {
        await expectRevert(
          implementation.methods['mint(address,uint256)'](this.token, other, One, {from: other}),
          implementation.revertMessages.NonMinter
        );
      });
    });

    context('batchMint(address[],uint256[]', function () {
      it('reverts if the sender is not a minter', async function () {
        await expectRevert(
          implementation.methods['batchMint(address[],uint256[])'](this.token, [], [], {from: other}),
          implementation.revertMessages.NonMinter
        );
      });
    });
  });

  shouldBehaveLikeERC20(implementation);
  extraBehavior(implementation);
});
