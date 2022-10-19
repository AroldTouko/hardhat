require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
   networks: {
	development: {
		url: `http://127.0.0.1:8545`,
		accounts: [`0xc46eeb86f1e846d2920cce59a6fad5c4656d5211aa9ed5c10d0f62ac0c8a2c6c`]
	}
   }
}

