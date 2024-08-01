const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const NBNFTFactory = await hre.ethers.getContractFactory(
    "nbNFT"
  );
  const nbNFT = await NBNFTFactory.attach(
    process.env.CONTRACT_ADDRESS
  );

  const mintTx = await nbNFT.safeMint(5);
  await mintTx.wait();

  console.log(
    "Successfully minted: " +
      (await nbNFT.balanceOf(process.env.WALLET_ADDRESS)) +
      " nbNFT NFTs to " +
      process.env.WALLET_ADDRESS
  );
  console.log(await nbNFT.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});