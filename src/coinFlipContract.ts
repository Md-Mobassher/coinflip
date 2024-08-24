import { ethers } from "ethers";

// Replace with your actual contract address
const contractAddress = "YOUR_CONTRACT_ADDRESS";

// Replace with your actual ABI
const contractABI: ethers.ContractInterface = [
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

export const getCoinFlipContract = (provider: ethers.Provider) => {
  const signer = provider.getSigner();
  return new ethers.Contract(contractAddress, contractABI, signer);
};
