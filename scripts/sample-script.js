const hre = require('hardhat');

async function main() {
	const RandomGuys = await hre.ethers.getContractFactory('RandomGuys');
	const randomGuys = await RandomGuys.deploy();

	await randomGuys.deployed();

	console.log('My NFT deployed to:', randomGuys.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
