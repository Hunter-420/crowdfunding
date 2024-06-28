"use strict";
import { useState } from "react";
import styled from "styled-components";
import { ethers } from "ethers";
import { Toaster, toast } from "react-hot-toast";
const networks = {
  polygon: {
    chainId: `0x${Number(80002).toString(16)}`, // Converts 80002 to hexadecimal
    chainName: "Polygon testnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-amoy.polygon.technology"],
    blockExplorerUrls: ["https://amoy.polygonscan.com"],
  },
};

const Wallet = () => {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(null);

  const connectWallet = async () => {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );
      // console.log("🚀 ~ connectWal ~  provider:", provider);
      const network = await provider.getNetwork();
      // console.log("🚀 ~ connectWal ~ network :", network);
      // Check if the current network is not Polygon
      if (network.chainId !== networks["polygon"].chainId) {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              ...networks["polygon"],
            },
          ],
        });

        // After successful network change, get the signer and address
        const account = provider.getSigner();
        const Address = await account.getAddress();
        setAddress(Address);

        const Balance = await account.getBalance();
        const formattedBalance = Balance
          ? ethers.utils.formatEther(Balance)
          : "0";

        setBalance(formattedBalance);

        toast.success("Successfully connected to wallet");
      } else {
        // If already on Polygon, just get the address
        const account = provider.getSigner();

        const Address = await account.getAddress();

        setAddress(Address);

        const Balance = await account.getBalance();
        const formattedBalance = Balance
          ? ethers.utils.formatEther(Balance)
          : "0";

        setBalance(formattedBalance);
        toast.success("Successfully connected to wallet");
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      toast.error(`Error connecting wallet: ${error.message}`);
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <WalletWrapper onClick={connectWallet}>

        {balance == "" ? " " : <Balance>{balance} </Balance>}

        {address == "" ? (
          <Address>Connect Wallet </Address>
        ) : (
          <Address>{address.slice(0, 6)}...</Address>
        )}
      </WalletWrapper>
    </>
  );
};

export default Wallet;
const WalletWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  height: 60px;
  min-height: fit-content;
  background-color: ${(props) => props.theme.bgDiv};
  color: ${(props) => props.theme.color};
  border-radius: 20px;
`;
const Address = styled.p`
  background-color: ${(props) => props.theme.bgSubDiv};
  border-radius: 10px;
  padding: 4px 10px;
  font-weight: medium;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  justify-items: center;
  align-items: center;
  color: ${(props) => props.theme.color};
  transition: background-color 0.3s, border-radius 0.3s, padding 0.3s;
`;
const Balance = styled.p`
  display: flex;
  align-items: center;
  justify-items: center;

`;
