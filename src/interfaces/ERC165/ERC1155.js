const {makeInterfaceId} = require('@openzeppelin/test-helpers');

const ERC1155_Functions = [
  'safeTransferFrom(address,address,uint256,uint256,bytes)',
  'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)',
  'balanceOf(address,uint256)',
  'balanceOfBatch(address[],uint256[])',
  'setApprovalForAll(address,bool)',
  'isApprovedForAll(address,address)',
];

// const ERC1155AssetCollections_Functions = ['isFungible(uint256)', 'collectionOf(uint256)', 'ownerOf(uint256)', 'exists(uint256)'];

const ERC1155MetadataURI_Functions = ['uri(uint256)'];

const ERC1155Inventory_Functions = ['isFungible(uint256)', 'collectionOf(uint256)', 'ownerOf(uint256)'];

const ERC1155InventoryCreator_Functions = ['creator(uint256)'];

const ERC1155InventoryTotalSupply_Functions = ['totalSupply(uint256)'];

const ERC1155InventoryBurnable_Functions = ['burnFrom(address,uint256,uint256)', 'batchBurnFrom(address,uint256[],uint256[])'];

const ERC1155TokenReceiver_Functions = [
  'onERC1155Received(address,address,uint256,uint256,bytes)',
  'onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)',
];

module.exports = {
  ERC1155: {
    name: 'ERC1155',
    functions: ERC1155_Functions,
    id: makeInterfaceId.ERC165(ERC1155_Functions),
  }, // 0xd9b67a26

  ERC1155MetadataURI: {
    name: 'ERC1155MetadataURI',
    functions: ERC1155MetadataURI_Functions,
    id: makeInterfaceId.ERC165(ERC1155MetadataURI_Functions),
  }, // 0x0e89341c

  ERC1155Inventory: {
    name: 'ERC1155Inventory',
    functions: ERC1155Inventory_Functions,
    id: makeInterfaceId.ERC165(ERC1155Inventory_Functions),
  }, // 0xTODO

  ERC1155InventoryTotalSupply: {
    name: 'ERC1155InventoryTotalSupply',
    functions: ERC1155InventoryTotalSupply_Functions,
    id: makeInterfaceId.ERC165(ERC1155InventoryTotalSupply_Functions),
  }, // 0xTODO

  ERC1155InventoryCreator: {
    name: 'ERC1155InventoryCreator',
    functions: ERC1155InventoryCreator_Functions,
    id: makeInterfaceId.ERC165(ERC1155InventoryCreator_Functions),
  }, // 0xTODO

  ERC1155InventoryBurnable: {
    name: 'ERC1155InventoryBurnable',
    functions: ERC1155InventoryBurnable_Functions,
    id: makeInterfaceId.ERC165(ERC1155InventoryBurnable_Functions),
  }, // 0xTODO

  ERC1155TokenReceiver: {
    name: 'ERC1155TokenReceiver',
    functions: ERC1155TokenReceiver_Functions,
    id: makeInterfaceId.ERC165(ERC1155TokenReceiver_Functions),
  }, // 0x4e2312e0
};
