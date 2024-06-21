import * as sapphire from '@oasisprotocol/sapphire-paratime'
import { ethers } from 'ethers'
import { readFileSync } from 'fs'

export async function main() {
  const RPC_URL = process.env.RPC_URL
  const PRIVATE_KEY = process.env.PRIVATE_KEY
  const CONTRACT_PATH = process.env.CONTRACT_PATH
  const DEPLOY_ARGUMENTS = process.env.DEPLOY_ARGUMENTS ? process.env.DEPLOY_ARGUMENTS.split(',') : null

  console.log('Deploying the contract', CONTRACT_PATH)
  console.log('Deploying via the RPC URL', RPC_URL)
  console.log('Deploy Arguments', DEPLOY_ARGUMENTS)

  const wallet = new ethers.Wallet(
    PRIVATE_KEY,
    new ethers.JsonRpcProvider(RPC_URL)
  )
  const deployer = await sapphire.wrapEthersSigner(wallet)

  console.log('Contract Deployer Address', wallet.address)
  const contractCode = JSON.parse(readFileSync(CONTRACT_PATH))

  const ContractFactory = new ethers.ContractFactory(
    contractCode.abi,
    contractCode.bytecode,
    deployer
  )

  const contract = await ContractFactory.deploy(...DEPLOY_ARGUMENTS)
  console.log('Successfully Deployed Foundry Contract', contract.target)
}

main()
  .then(() => process.exit())
  .catch((err) => console.error(err));