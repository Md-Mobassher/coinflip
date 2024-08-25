/* eslint-disable @typescript-eslint/no-explicit-any */
import { ethers } from "ethers";

// Replace with your actual contract address
const contractAddress = "3KDR58P9I7878J9DR22MVSQ1W766Q42BU3";

// Use ethers.Contract directly, passing the ABI as an array
const contractABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "number",
        type: "uint256",
      },
    ],
    name: "setNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const getCoinFlipContract = (provider: any) => {
  const signer = provider.getSigner();
  return new ethers.Contract(contractAddress, contractABI, signer);
};
