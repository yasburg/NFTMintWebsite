const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('MyNFT', function () {
	it('Should mint and transfer and NFT to someone', async function () {
		const RandomGuys = await ethers.getContractFactory('RandomGuys');
		const randomGuys = await RandomGuys.deploy();
		await randomGuys.deployed();

		const recipient = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266';
		const metadataURI = 'cid/test.png';

		let balance = await randomGuys.balanceOf(recipient);
		expect(balance).to.equal(0);

		const newlyMintedToken = await randomGuys.payToMint(
			recipient,
			metadataURI,
			{ value: ethers.utils.parseEther('0.05') }
		);

		await newlyMintedToken.wait();

		balance = await randomGuys.balanceOf(recipient);
		expect(balance).to.equal(1);

		expect(await randomGuys.isContentOwned(metadataURI)).to.equal(true);
	});
});
