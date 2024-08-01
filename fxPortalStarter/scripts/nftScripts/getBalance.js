const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const nbNFT = await hre.ethers.getContractFactory("nbNFT");

  const NBNFT = await nbNFT.attach(process.env.CONTRACT_ADDRESS);
  const balance = (
    await NBNFT.balanceOf(process.env.WALLET_ADDRESS)
  ).toString();

  console.log("Balance: ", balance);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});