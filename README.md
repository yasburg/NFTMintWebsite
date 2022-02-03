

<div id="top"></div>




<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![image](https://user-images.githubusercontent.com/34233254/152311174-392715d0-eff2-456f-9570-74c5d224b8eb.png)

This is very basic implementation of NFT mint website. It is based on this tutorial: [https://www.youtube.com/watch?v=meTpMP0J5E8]
</br>

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [React.js](https://reactjs.org/)
* [Hardhat](https://hardhat.org/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
* hardhat -> [https://hardhat.org/guides/project-setup.html]

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
3. Create images and publish them on ipfs. You can use this great tutorial -> [https://www.youtube.com/watch?v=meTpMP0J5E8] 
4. Change the ipfs address in contracts/RandomGuys.sol. </br> ![image](https://user-images.githubusercontent.com/34233254/152313359-27e91556-6d76-4dac-849b-8057d4136069.png)
5. Setup Hardhat -> [https://hardhat.org/guides/project-setup.html]
6. Add private key to the .env file.
   ```
   PRIVATE_KEY=1111111111111111111111111111111111111111111111111111111111111111
   ```
6. Compile Solidity code
   ```sh
   npx hardhat compile
   ```
6. Run Hardhat node
   ```sh
   npx hardhat node
   ```
7. Deploy your contract to localhost network
   ```sh
   npx hardhat run scripts/sample-script.js --network localhost
   ```
8. Start web application on localhost
   ```sh
   npm run dev
   ``` 
   
   <p align="right">(<a href="#top">back to top</a>)</p>

## An Error that you may face after clicking "Confirm" on Metamask
You may get a "High nonce" error. The fix is very simple:

1. Open Metamask
2. Go to settings
3. Advanced
4. Reset Account
   
   
## If you want to deploy your contract to Mumbai Testnet
1. You should create project on alchemy and choose Mumbai testnet -> [https://www.alchemy.com/]
2. Get a free API Key at [https://www.alchemy.com/] and add it to the .env file.
   ```sh
   MATIC_URL=https://polygon-mumbai.g.alchemy.com/v2/<YOUR ALCHEMY KEY>
   ```
3. Deploy your contract to matic network
   ```sh
   npx hardhat run scripts/sample-script.js --network matic
   ```
   

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Minting NFT's on localhost and Mumbai testnet.
Tutorial: https://www.youtube.com/watch?v=meTpMP0J5E8

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Better UI

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Yasin Aydın - [@yasburg0](https://twitter.com/yasburg0)

<p align="right">(<a href="#top">back to top</a>)</p>


