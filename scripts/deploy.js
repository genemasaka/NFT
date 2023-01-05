require("@nomiclabs/hardhat-ethers");

async function main() {
    const NFTContract = await ethers.getContractFactory("SquidNFT");
    const deployedNFTContract = await NFTContract.deploy();
    await deployedNFTContract.deployed();
    console.log("NFT Contract Address:", deployedNFTContract.address);
}

main().then(() => process.exit(0)).catch((error) => {console.error(error); process.exit(1);});