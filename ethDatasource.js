// Import the RESTDataSource class from Apollo Server to enable REST API calls
const { RESTDataSource } = require("apollo-datasource-rest"); 

// Store Vitalik's Ethereum address in a constant for reuse
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

// Custom data source class to make Etherscan API calls
class EtherDataSource extends RESTDataSource {

  // Set the base URL for Etherscan API 
  constructor() {
    super();
    this.baseURL = "https://api.etherscan.io/api"; 
  }

  // Method to get ETH balance for an address
  async etherBalanceByAddress() {
    return this.get(
      `?module=account&action=balance&address=eth_address&tag=latest&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Method to get total ETH supply
  async totalSupplyOfEther() {
    return this.get(
      `?module=stats&action=ethsupply&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Method to get latest ETH price
  async getLatestEthereumPrice() {
    return this.get(
      `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Method to get estimated block confirmation time
  async getBlockConfirmationTime() {
    return this.get(
      `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
    );
  }
}

module.exports = EtherDataSource;
