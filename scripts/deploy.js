const { ethers } = require("hardhat");

async function main() {
    const NFTContract = await ethers.getContractFcatory("SquidNFT");
    const deployedNFTContract = await NFTContract.deploy();
    await deployedNFTContract.deployed();
    console.log("NFT Contract Address:", deployedNFTContract.address);
}

main().then(() => process.exit(0)).catch((error) => {console.error(error); process.exit(1);});