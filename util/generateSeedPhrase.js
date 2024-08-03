const loadAccountBlockchain = () => {
  return {};
};

const createSmartWallet = () => {
  return {};
};
//Tarea Seba: addres del usuario asociado al contrato en la DB
const generateSeedPhrase = (token) => {
  return bip39.generateMnemonic();
};

module.exports = {
  loadAccountBlockchain,
  createSmartWallet,
  generateSeedPhrase,
};
