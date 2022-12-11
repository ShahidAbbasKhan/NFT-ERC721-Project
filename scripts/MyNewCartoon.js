
const hre = require("hardhat");

async function main() {
  

  const Mnc = await hre.ethers.getContractFactory("MyNewCartoon");
  const mnc = await Mnc.deploy();

  await mnc.deployed();

  console.log(
    `contract is deployed to ${mnc.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
