import WalletBalance from './WalletBalance';
import { useEffect, useState } from 'react';
import placeholder from '../img/placeholder.jpg';
import { ethers } from 'ethers';
import RandomGuys from '../artifacts/contracts/RandomGuys.sol/RandomGuys.json';

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; //'0x8B0FDC19B3edf4e0AA588755018e095ee2A02057';

const provider = new ethers.providers.Web3Provider(window.ethereum);

// get the end user
const signer = provider.getSigner();

// get the smart contract
const contract = new ethers.Contract(contractAddress, RandomGuys.abi, signer);

function Home() {
	const [totalMinted, setTotalMinted] = useState(0);
	useEffect(() => {
		getCount();
	}, []);

	const getCount = async () => {
		const count = await contract.count();
		console.log(parseInt(count));
		setTotalMinted(parseInt(count));
	};

	return (
		<div>
			<WalletBalance />

			{Array(totalMinted + 1)
				.fill(0)
				.map((_, i) => (
					<div key={i}>
						<NFTImage tokenId={i} getCount={getCount} />
					</div>
				))}
		</div>
	);
}

function NFTImage({ tokenId, getCount }) {
	const contentId = 'QmbZrXb6S8ybrukZ13UiNmttWDsExYeTDAr9tvYaBVv6Z4';
	const metadataURI = `${contentId}/${tokenId}.json`;
	const imageURI = `https://gateway.pinata.cloud/ipfs/${contentId}/${tokenId}.png`;

	const [isMinted, setIsMinted] = useState(false);
	useEffect(() => {
		getMintedStatus();
	}, [isMinted]);

	const getMintedStatus = async () => {
		const result = await contract.isContentOwned(metadataURI);
		console.log(result);
		setIsMinted(result);
	};

	const mintToken = async () => {
		const connection = contract.connect(signer);
		const addr = connection.address;
		const result = await contract.payToMint(addr, metadataURI, {
			value: ethers.utils.parseEther('0.05'),
		});

		await result.wait();
		getMintedStatus();
		getCount();
	};

	async function getURI() {
		const uri = await contract.tokenURI(tokenId);
		alert(uri);
	}
	return (
		<div>
			<img
				style={{ width: 200 }}
				src={isMinted ? imageURI : placeholder}
			></img>
			<h5>ID #{tokenId}</h5>
			{!isMinted ? (
				<button onClick={mintToken}>Mint</button>
			) : (
				<button onClick={getURI}>Taken! Show URI</button>
			)}
		</div>
	);
}

export default Home;
