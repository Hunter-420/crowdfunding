"use client";
import React, { createContext, useState } from "react";

import CreateCampaignForm from "./CreateCampaignForm";
import styled from "styled-components";
import ReactLoading from "react-loading";
import { ethers } from "ethers";
import CampaignFactory from "../../../artifacts/contracts/Crowdfunding.sol/CampaignFactory.json";

const FormContext = createContext();
const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    requiredAmount: "",
    image: "",
    story: "",
    category: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const startCampaign = async () => {
    try {
      // Check if MetaMask is installed
      if (!window.ethereum) {
        throw new Error("MetaMask is not installed");
      }

      // Request account access if needed
      await window.ethereum.request({ method: "eth_requestAccounts" });

      // Create a new provider and signer
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      // Ensure the user is connected to MetaMask
      const accounts = await provider.listAccounts();
      if (accounts.length === 0) {
        throw new Error("Please connect to MetaMask");
      }

      // Create a new contract instance
      const contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_ADDRESS,
        CampaignFactory.abi,
        signer
      );

      // Parse the required amount to ethers
      const campaignAmount = ethers.utils.parseEther(formData.requiredAmount);

      // Create a new campaign on the blockchain
      const tx = await contract.createCampaign(
        formData.title,
        campaignAmount,
        formData.image,
        formData.category,
        formData.story
      );

      // Wait for the transaction to be mined
      const receipt = await tx.wait();
      // Log the transaction receipt
      console.log("Transaction receipt:", receipt);

      // Set the address of the new campaign
      setAddress(receipt.to);
    } catch (error) {
      console.error("Error starting campaign:", error);
      // Additional error handling
      if (error.code === 4001) {
        toast.error("Transaction rejected by user.");
      } else {
        toast.error("Failed to create campaign. Please try again.");
      }

      throw error; // Re-throw the error to handle it in the calling function
    }
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        startCampaign,
        handleChange,
        errors,
        setErrors,
        loading,
        setLoading,
        address,
        setAddress,
      }}
    >
      <FormWrapper>
        <FormMain>
          {loading ? (
            address === "" ? (
              <Spinner>
                <ReactLoading
                  type="spin"
                  color="rgb(137, 105, 182)"
                  height={200}
                  width={200}
                />
              </Spinner>
            ) : (
              <Address>
                <h1>Campaign Started Successfully!</h1>
                <h1>{address}</h1>
                <Button>Go To Campaign</Button>
              </Address>
            )
          ) : (
            <FormInputsWrapper>
              <CreateCampaignForm />
            </FormInputsWrapper>
          )}
        </FormMain>
      </FormWrapper>
    </FormContext.Provider>
  );
};

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FormMain = styled.div`
  width: 80%;
`;

const FormInputsWrapper = styled.div`
  display: flex;
  margin-top: 45px;
`;

const Spinner = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Address = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.bgSubDiv};
  border-radius: 8px;
`;

const Button = styled.button`
  width: 30%;
  padding: 15px;
  color: white;
  background-color: #00b712;
  background-image: linear-gradient(180deg, #00b712 0%, #5aff15 80%);
  border: none;
  margin-top: 30px;
  cursor: pointer;
  font-weight: bold;
  font-size: large;
`;

export default Form;
export { FormContext };
