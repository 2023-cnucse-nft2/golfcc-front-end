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

const saleMembershipAbi = `[{"inputs": [{"internalType": "address","name": "_saleMembershipAddress","type": "address"}],"stateMutability": "nonpayable","type": "constructor"},{"inputs": [{"internalType": "uint256","name": "_membershipId","type": "uint256"}],"name": "approveTrade","outputs": [],"stateMutability": "payable","type": "function"},{"inputs": [{"internalType": "uint256","name": "","type": "uint256"}],"name": "bidAddress","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_membershipId","type": "uint256"}],"name": "bidMembership","outputs": [],"stateMutability": "payable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_membershipId","type": "uint256"}],"name": "cancelBid","outputs": [],"stateMutability": "payable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_membershipId","type": "uint256"}],"name": "cancelSale","outputs": [],"stateMutability": "payable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_membershipId","type": "uint256"}],"name": "denyTrade","outputs": [],"stateMutability": "payable","type": "function"},{"inputs": [],"name": "getOnSaleArray","outputs": [{"internalType": "uint256[]","name": "","type": "uint256[]"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "","type": "uint256"}],"name": "isBid","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "","type": "uint256"}],"name": "membershipPrices","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "","type": "uint256"}],"name": "onSaleMembershipArray","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "saleMembershipAddress","outputs": [{"internalType": "contract MintMembership","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_membershipId","type": "uint256"},{"internalType": "uint256","name": "_price","type": "uint256"}],"name": "setForSaleMembership","outputs": [],"stateMutability": "payable","type": "function"}]`;

export class TestContract {
  public contract: Contract;
  public abi: AbiItem;
  public CA: string;

  constructor() {
    this.abi = JSON.parse(saleMembershipAbi);
    this.CA = "0xD760443B97A0Aa97Ae19E6b67f0D378eE00e96e3";

    this.contract = new web3.eth.Contract(this.abi, this.CA);
    this.contract.defaultAccount = COINBASE;
    this.contract.defaultCommon = {
      customChain: { chainId: 1343, networkId: 1343 },
    };
  }
  async approveTrade(membershipId: number): Promise<boolean> {
    if (this.contract == undefined) {
      console.error("Contract not fetched.");
      return false;
    }
    let data = this.contract.methods.approveTrade(membershipId).encodeABI();
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

  async denyTrade(membershipId: number): Promise<boolean> {
    if (this.contract == undefined) {
      console.error("Contract not fetched.");
      return false;
    }
    let data = this.contract.methods.denyTrade(membershipId).encodeABI();
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

  async getOnSaleArray(): Promise<boolean> {
    if (this.contract == undefined) {
      console.error("Contract not fetched.");
      return false;
    }
    let data = this.contract.methods.getOnSaleArray().encodeABI();
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