"use client";

export default function TransferComponent({ wallet, amount, keyWeb3 }) {
  return (
    <div>
      <h1>Transfer</h1>
      <p>Wallet: {wallet}</p>
      <p>Amount: {amount}</p>
      <p>KeyWeb3: {keyWeb3}</p>
    </div>
  );
}
