# DOSE Solidity Contracts

## Table of Contents

* [Setting Up](#setting-up)
* [Getting Start](#getting-start)
* [Test](#test)
* [Wallet Connection](#wallet-connection)
* [Deploy](#deploy)
    * [Preparation](#preparation)
    * [Deploy to network](#deploy-to-network)
* [Verify](#verify)

## Setting Up

You may set up the project by executing the following command into the terminal

> make sure you are under the root folder

```
yarn
```

## Getting Start

Execute the following command to generate artifacts, run test cases and coverage and generate docs

```
yarn run run-all
```

## Test

Execute the following command to perform all test cases

```
yarn run test

```

## Wallet Connection

[frame](https://frame.sh/) is used as the wallet.  For instruction, please refer to [README_COLDWALLET.md](./README_COLDWALLET.md)

## Deploy

> These instructions are focusing on Rinkeby network

> Changing the **name** and **symbol** before deploy to testnet is a good idea

### Preparation

`hardhat.config.private.json`

```
{
    "accountPrivateKey": "string",
    "rinkebyUrl": "string",
    "etherscanApiKey": "string"
}
```

`/scripts/deployDoseRinkeby.json`

```
{
    "holder":[
        "0x0000000000000000000000000000000000000000"
    ],
    "value":[
        "0"
    ],
    "uri":"sampleuri",
    "deployedAddress":"0x0000000000000000000000000000000000000000"
}
```

### Deploy to network

```
yarn run deploy:dose:rinkeby
```

## Verify

> These instructions are focusing on Rinkeby network
 
> Update `deployedAddress` in file `/scripts/deployDoseRinkeby.json`
```
yarn run verify:dose:rinkeby
```
