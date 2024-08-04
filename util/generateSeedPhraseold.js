const { ethers } = require("ethers");
const bip39 = require("bip39");

const ecc = require("tiny-secp256k1");
const { BIP32Factory } = require("bip32");
const { NEXT_PUBLIC_BACKEND } = require("constants/env");
// You must wrap a tiny-secp256k1 compatible implementation
const bip32 = BIP32Factory(ecc);

//Tarea Seba: addres del usuario asociado al contrato en la DB
const generateSeedPhrase = (token) => {
  // Generate entropy from token
  const numericArray = convertBinaryToNumber(token, 8);
  const entropy = toByteArray(numericArray);

  // Generate 12 worlds mnemonic
  const mnemonic = bip39.entropyToMnemonic(
    entropy.slice(7, 23),
    bip39.wordlists.EN
  );
  return mnemonic;
};

const loadAccount = (mnemonic, accountIndex) => {
  try {
    // Generate seed from mnemonic
    const seed = bip39.mnemonicToSeedSync(mnemonic);

    // Generate HD wallet master root node
    const root = bip32.fromSeed(seed);

    // Derive a private key and address using the BIP44 standard route for Ethereum
    const path = "m/44'/60'/0'/0/" + accountIndex; // First account
    const node = root.derivePath(path);
    const privateKey = node.privateKey.toString("hex");

    // Derive Ethereum address from private key
    const wallet = new ethers.Wallet(privateKey);
    const address = wallet.address;

    console.log("privateKey", privateKey);
    console.log("address", address);

    return { privateKey, address };
  } catch (error) {
    console.error("Error loading account:", error);
    throw error;
  }
};

const createSmartWallet = async (accountAddress, email) => {
  try {
    const backendUrl = `${NEXT_PUBLIC_BACKEND}/user/update/address`;

    // Request setup
    const response = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address: accountAddress, email }),
    });

    // Check response
    if (!response.ok) {
      throw new Error("Backend request failed");
    }

    // Get response data
    const data = await response.json();

    // Get Samrt Wallet address from data
    const smart_wallet_address = data.contractAddress;
    return smart_wallet_address;
  } catch (error) {
    console.error("Error creating Smart Wallet:", error);
    throw error;
  }
};

/// Aux functions

function stringToBinary(str) {
  console.log("str", str);
  return str
    .split("")
    .map((char) => {
      return char.charCodeAt(0).toString(2).padStart(8, "0");
    })
    .join("");
}

function getSubpackages(binaryStr, subpackageLength) {
  const subpackages = [];
  for (let i = 0; i < binaryStr.length; i += subpackageLength) {
    subpackages.push(binaryStr.slice(i, i + subpackageLength));
  }
  return subpackages;
}

function binaryToDecimal(bin) {
  return parseInt(bin, 2);
}

function convertBinaryToNumber(token, subpackageLength = 8) {
  // Convert the string to a binary representation
  const binaryStr = stringToBinary(token);

  // Get subpackages of the specified length
  const subpackages = getSubpackages(binaryStr, subpackageLength);

  // Convert each subpackage to a decimal number
  return subpackages.map(binaryToDecimal);
}

function toByteArray(numericArray) {
  const entropy = new Uint8Array(numericArray);

  for (let i = 0; i < numericArray.length; i++) {
    entropy[i * 2] = numericArray[i] >> 8; // byte alto
    entropy[i * 2 + 1] = numericArray[i] & 0xff; // byte bajo
  }

  return entropy;
}

module.exports = {
  generateSeedPhrase,
  createSmartWallet,
  loadAccount,
};
