import { ethers } from 'hardhat';

async function main() {
  const Tienda = await ethers.getContractFactory("Tienda");
  const tienda = await Tienda.deploy("0xf88806ad5A7999b42fE7e36855a788dc6e7CC1DD")
  //const tienda = await Tienda.deploy("0xB8F39826E0D772376ECdDDff291F8d511dB0D738")
  
  await tienda.deployed()
  console.log('Tienda deployed to:', tienda.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
