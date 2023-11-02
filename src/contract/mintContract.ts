import Web3 from "web3";
import { TransactionConfig } from "web3-core";
import { Contract } from "web3-eth-contract";
import { AbiItem } from "web3-utils";
import { Transaction, TransactionOptions } from "ethereumjs-tx";
import Common from "ethereumjs-common";
import { Buffer } from "buffer";

const BASEDIR = "http://168.188.129.232:8080";
const COINBASE = "0x49ba3a2d4df6fb3a28a644b559d94ebcbc62e6a9";
var web3 = new Web3(`${BASEDIR}`); // mac os path

const mintMembershipAbi = `[{"inputs": [],"stateMutability": "nonpayable","type": "constructor"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "owner","type": "address"},{"indexed": true,"internalType": "address","name": "approved","type": "address"},{"indexed": true,"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "Approval","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "owner","type": "address"},{"indexed": true,"internalType": "address","name": "operator","type": "address"},{"indexed": false,"internalType": "bool","name": "approved","type": "bool"}],"name": "ApprovalForAll","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "previousOwner","type": "address"},{"indexed": true,"internalType": "address","name": "newOwner","type": "address"}],"name": "OwnershipTransferred","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "from","type": "address"},{"indexed": true,"internalType": "address","name": "to","type": "address"},{"indexed": true,"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "Transfer","type": "event"},{"inputs": [{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "approve","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "owner","type": "address"}],"name": "balanceOf","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "getApproved","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "owner","type": "address"},{"internalType": "address","name": "operator","type": "address"}],"name": "isApprovedForAll","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_price","type": "uint256"},{"internalType": "address","name": "_purchaser","type": "address"}],"name": "mintMembership","outputs": [],"stateMutability": "payable","type": "function"},{"inputs": [],"name": "name","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "owner","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "ownerOf","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "renounceOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "from","type": "address"},{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "safeTransferFrom","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "from","type": "address"},{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "tokenId","type": "uint256"},{"internalType": "bytes","name": "data","type": "bytes"}],"name": "safeTransferFrom","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "operator","type": "address"},{"internalType": "bool","name": "approved","type": "bool"}],"name": "setApprovalForAll","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "bytes4","name": "interfaceId","type": "bytes4"}],"name": "supportsInterface","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "symbol","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "index","type": "uint256"}],"name": "tokenByIndex","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "owner","type": "address"},{"internalType": "uint256","name": "index","type": "uint256"}],"name": "tokenOfOwnerByIndex","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "tokenURI","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "totalSupply","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "from","type": "address"},{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "transferFrom","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "newOwner","type": "address"}],"name": "transferOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"}]`;

export class TestContract {
  public contract: Contract;
  public abi: AbiItem;
  public CA: string;

  constructor() {
    this.abi = JSON.parse(mintMembershipAbi);
    this.CA = "0xD760443B97A0Aa97Ae19E6b67f0D378eE00e96e3";

    this.contract = new web3.eth.Contract(this.abi, this.CA);
    this.contract.defaultAccount = COINBASE;
    this.contract.defaultCommon = {
      customChain: { chainId: 1343, networkId: 1343 },
    };
  }
  async mintMembership(): Promise<boolean> {
    if (this.contract == undefined) {
      console.error("Contract not fetched.");
      return false;
    }
    let data = this.contract.methods.mintMembership(100, COINBASE).encodeABI();
    let privateKey = Buffer.from(
      "9431ce62156ee9e415de3abafd5bb077d7bb7b565de467051eb5602a0a42ca0f",
      "hex"
    );

    // let Tx = require("ethereumjs-tx").Transaction;

    let txObject: TransactionConfig = {
      from: COINBASE,
      to: this.CA,
      data: data,
      chainId: 1343,
      nonce: 14,
      gas: 210000,
      gasPrice: 1000000000,
    };

    let txOptions: TransactionOptions = {
      common: Common.forCustomChain(
        "mainnet",
        { chainId: 1343, networkId: 1343, name: "geth" },
        "petersburg"
      ),
    };

    let tx = new Transaction(txObject, txOptions);
    tx.sign(privateKey);
    let serializedTx = tx.serialize();

    await web3.eth
      .sendSignedTransaction("0x" + Buffer.from(serializedTx).toString("hex"))
      .then((value) => console.log(value));

    return false;
  }
}
