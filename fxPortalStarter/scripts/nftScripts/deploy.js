const hre = require("hardhat");

async function main() {
  const NBNFTFactory = await hre.ethers.getContractFactory("nbNFT");

  const nbNFT = await NBNFTFactory.deploy();

  console.log("NBNFT deployed to: ", nbNFT.target);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});