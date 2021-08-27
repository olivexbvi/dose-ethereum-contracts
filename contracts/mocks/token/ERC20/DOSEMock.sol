// SPDX-License-Identifier: MIT

pragma solidity >=0.7.6 <0.8.0;

import {ManagedIdentity, Ownable, Recoverable} from "@animoca/ethereum-contracts-core-1.1.1/contracts/utils/Recoverable.sol";
import {IForwarderRegistry, UsingUniversalForwarding} from "ethereum-universal-forwarder/src/solc_0.7/ERC2771/UsingUniversalForwarding.sol";
import {DOSE} from "../../../token/ERC20/DOSE.sol";
import {ERC20Mock} from "@animoca/ethereum-contracts-assets/contracts/mocks/token/ERC20/ERC20Mock.sol";
import {IERC20Mintable} from "@animoca/ethereum-contracts-assets/contracts/token/ERC20/IERC20Mintable.sol";

contract DOSEMock is Recoverable, UsingUniversalForwarding, DOSE, IERC20Mintable {
    constructor(
        address[] memory recipients,
        uint256[] memory values,
        IForwarderRegistry forwarderRegistry,
        address universalForwarder
    ) DOSE(recipients, values, "urimock") Ownable(msg.sender) UsingUniversalForwarding(forwarderRegistry, universalForwarder) {}

    /// @dev See {IERC165-supportsInterface}.
    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
        return interfaceId == type(IERC20Mintable).interfaceId || super.supportsInterface(interfaceId);
    }

    function _msgSender() internal view virtual override(ManagedIdentity, UsingUniversalForwarding) returns (address payable) {
        return UsingUniversalForwarding._msgSender();
    }

    function _msgData() internal view virtual override(ManagedIdentity, UsingUniversalForwarding) returns (bytes memory ret) {
        return UsingUniversalForwarding._msgData();
    }

    function setTokenURI(string calldata tokenURI_) external {
        _requireOwnership(_msgSender());
        _tokenURI = tokenURI_;
    }

    /**
     * Mints `amount` tokens and assigns them to `account`, increasing the total supply.
     * @dev Reverts if `account` is the zero address.
     * @dev Emits a {IERC20-Transfer} event with `from` set to the zero address.
     * @param to the account to deliver the tokens to.
     * @param value the amount of tokens to mint.
     */
    function mint(address to, uint256 value) public virtual override {
        _requireOwnership(_msgSender());
        _mint(to, value);
    }

    /**
     * Mints `amounts` tokens and assigns them to `accounts`, increasing the total supply.
     * @dev Reverts if `accounts` and `amounts` have different lengths.
     * @dev Reverts if one of `accounts` is the zero address.
     * @dev Emits an {IERC20-Transfer} event for each transfer with `from` set to the zero address.
     * @param recipients the accounts to deliver the tokens to.
     * @param values the amounts of tokens to mint to each of `accounts`.
     */
    function batchMint(address[] memory recipients, uint256[] memory values) public virtual override {
        _requireOwnership(_msgSender());
        _batchMint(recipients, values);
    }
}
