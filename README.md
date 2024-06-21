# Foundry Paratime Demo

## Overview

There are many differences between the Foundry runtime environment and the Hardhat runtime environment. For example, porting the LayerZero Contract repository to a Hardhat environment will fail due to its dependencies on Foundry.

Sapphire Paratime does not have a Foundry-specific library or wrapper. Instead of creating one, this repository demonstrates how to deploy a contract with Sapphire Paratime while maintaining the core workflow in Foundry.

This demonstration repo was intended to be as minimal as possible in order to make it as easy as possible to port to other projects.

## How it works

Step 1: Configure Environment

```shell
export RPC_URL="https://testnet.sapphire.oasis.dev"
export CONTRACT_PATH="out/Counter.sol/Counter.json"
export DEPLOY_ARGUMENTS="404499,The Counter"
export PRIVATE_KEY="[YOUR PRIVATE KEY HERE]"
```

Step 2: Build the foundry contracts

```shell
forge compile
```

Step 3: Run the script

```shell
npm install # if not installed yet
node deploy/main.mjs
```

Step 4: Review and confirm transaction is encrypted on Oasis Network Explorer.

## Integrating

The `deploy/main.mjs` script uses the minimum dependencies required to deploy.

If you copy the following:

```shell
deploy/main.mjs
package.json
```

Into an existing Foundry project. You should be able to run the previous steps but instead with the desired outputs.

---

Open an issue on Github if there are any concerns in regards to DX or Security.
