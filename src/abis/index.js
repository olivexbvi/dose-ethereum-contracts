const ERC20 = require('./ERC20/ERC20');
const ERC20Allowance = require('./ERC20/ERC20Allowance');
const ERC20Detailed = require('./ERC20/ERC20Detailed');
const ERC20Metadata = require('./ERC20/ERC20Metadata');
const ERC20Permit = require('./ERC20/ERC20Permit');
const ERC20BatchTransfers = require('./ERC20/ERC20BatchTransfers');
const ERC20SafeTransfers = require('./ERC20/ERC20SafeTransfers');
const ERC20Burnable = require('./ERC20/ERC20Burnable');
const ERC20Receiver = require('./ERC20/ERC20Receiver');

const ERC721 = require('./ERC721/ERC721');
const ERC721Metadata = require('./ERC721/ERC721Metadata');
const ERC721Enumerable = require('./ERC721/ERC721Enumerable');
const ERC721BatchTransfer = require('./ERC721/ERC721BatchTransfer');
const ERC721Exists = require('./ERC721/ERC721Exists');
const ERC721Burnable = require('./ERC721/ERC721Burnable');

const ERC1155 = require('./ERC1155/ERC1155');
const ERC1155MetadataURI = require('./ERC1155/ERC1155MetadataURI');
const ERC1155Inventory = require('./ERC1155/ERC1155Inventory');
const ERC1155InventoryCreator = require('./ERC1155/ERC1155InventoryCreator');
const ERC1155InventoryBurnable = require('./ERC1155/ERC1155InventoryBurnable');

const ERC1155721Inventory = require('./ERC1155721/ERC1155721Inventory');
const ERC1155721InventoryBurnable = require('./ERC1155721/ERC1155721InventoryBurnable');

module.exports = {
  ERC20,
  ERC20Allowance,
  ERC20Detailed,
  ERC20Metadata,
  ERC20Permit,
  ERC20BatchTransfers,
  ERC20SafeTransfers,
  ERC20Burnable,
  ERC20Receiver,

  ERC721,
  ERC721Metadata,
  ERC721Enumerable,
  ERC721BatchTransfer,
  ERC721Exists,
  ERC721Burnable,

  ERC1155,
  ERC1155MetadataURI,
  ERC1155Inventory,
  ERC1155InventoryCreator,
  ERC1155InventoryBurnable,

  ERC1155721Inventory,
  ERC1155721InventoryBurnable,
};
