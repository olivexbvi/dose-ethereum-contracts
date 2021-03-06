const interfaces = require('./interfaces/ERC165');

// ERC165 Interface Ids, Bytes4
const ERC20_InterfaceId = interfaces.ERC20.id;
const ERC20Name_InterfaceId = interfaces.ERC20Name.id;
const ERC20Symbol_InterfaceId = interfaces.ERC20Symbol.id;
const ERC20Decimals_InterfaceId = interfaces.ERC20Decimals.id;
const ERC20Detailed_InterfaceId_Experimental = interfaces.ERC20Detailed_Experimental.id;

const Withdrawn_EventSig = '0x7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5';

module.exports = {
  // Bytes4
  ERC20_InterfaceId,
  ERC20Name_InterfaceId,
  ERC20Symbol_InterfaceId,
  ERC20Detailed_InterfaceId_Experimental,
  Withdrawn_EventSig,
  Bytes4: {
    ERC20_InterfaceId,
    ERC20Name_InterfaceId,
    ERC20Symbol_InterfaceId,
    ERC20Decimals_InterfaceId,
    ERC20Detailed_InterfaceId_Experimental,
  },
};
