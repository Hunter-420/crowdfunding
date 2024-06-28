"use client";
import React, { useContext } from "react";
import { FormContext } from "./Form";
import styled from "styled-components";
import FileInput from "./FileInput";
import { Toaster, toast } from "react-hot-toast";
import { validateFormData } from "./vaildateForm";
import { checkIfImage } from "@/app/utilis";
import { useRouter } from "next/navigation";
import { campaignData } from "./campaignData";
const CreateCampaignForm = () => {
  const {
    formData,
    setFormData,
    handleChange,
    errors,
    setErrors,
    loading,
    setLoading,
    address,
    setAddress,
    startCampaign,
  } = useContext(FormContext);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, errors } = validateFormData(formData);
    console.log("🚀 ~ handleSubmit ~ formData:", formData);
    if (!isValid) {
      setErrors(errors);
      toast.error("Please try again later");
      return;
    }

    try {
      checkIfImage(formData.image, async (exists) => {
        if (exists) {
          setLoading(true);

          const success = await startCampaign();

          if (success) {
            toast.success("New campaign created successfully");
            setFormData({
              title: "",
              requiredAmount: "",
              image: "",
              story: "",
              category: "",
            });
            router.push("/");
          } else {
            toast.error("Failed to create campaign. Please try again.");
          }

          setLoading(false);
        } else {
          toast.error("Provide valid image URL");
          setFormData({ ...formData, image: "" });
        }
      });
    } catch (error) {
      setLoading(false);
      toast.error("Failed to create campaign. Please try again.");
      console.error("Error in handleSubmit:", error);
    }
  };

  return (
    <Wrapper>
      <Toaster position="top-right" reverseOrder={false} />
      <Header>Create your Campaign</Header>
      <FormWrapper onSubmit={handleSubmit}>
        {campaignData.map((field, index) => (
          <FieldWrapper key={field.id} $index={index}>
            <label htmlFor={field.id}>{field.label}</label>
            {field.type === "select" ? (
              <>
                <select name={field.name} id={field.id} onChange={handleChange}>
                  <option value="">Select</option>
                  {field.options.map((option, i) => (
                    <option key={option + i} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors[field.name] && (
                  <ErrorMessage>{errors[field.name]}</ErrorMessage>
                )}
              </>
            ) : field.type === "textarea" ? (
              <>
                <textarea
                  id={field.id}
                  name={field.name}
                  cols={20}
                  rows={5}
                  placeholder={field.placeholder}
                  onChange={handleChange}
                />
                {errors[field.name] && (
                  <ErrorMessage>{errors[field.name]}</ErrorMessage>
                )}
              </>
            ) : field.type === "file" ? (
              <>
                <FileInput
                  field={field}
                  setFormData={setFormData}
                  formData={formData}
                />
                {errors[field.name] && (
                  <ErrorMessage>{errors[field.name]}</ErrorMessage>
                )}
              </>
            ) : (
              <>
                <input
                  id={field.id}
                  type={field.type}
                  name={field.name}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                />
                {errors[field.name] && (
                  <ErrorMessage>{errors[field.name]}</ErrorMessage>
                )}
              </>
            )}
          </FieldWrapper>
        ))}
        <ButtonWrapper>
          <button type="submit">Submit</button>
        </ButtonWrapper>
      </FormWrapper>
    </Wrapper>
  );
};

export default CreateCampaignForm;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: ${(props) => props.theme.boxShadow};
  width: 60%;
  margin: 20px auto;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const Header = styled.h2`
  color: ${(props) => props.theme.color || "#1e0f24"};
`;

const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FieldWrapper = styled.div`
  grid-column: ${(props) => (props.$index === 3 ? "span 3" : "auto")};
  grid-row: ${(props) => (props.$index === 3 || 4 ? "span 2" : "auto")};

  & > label {
    display: block;
    margin-bottom: 8px;
    font-size: 1rem;
    font-weight: 500;
  }

  & > input,
  & > select,
  & > textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-sizing: border-box;
    outline: none;
    font-size: 1rem;
  }

  & > select {
    text-transform: capitalize;
  }

  & > textarea {
    resize: vertical;
  }

  grid-row: ${(props) => (props.$index === 3 || 4 ? "span 2" : "auto")};

  @media (max-width: 768px) {
    grid-column: ${(props) => (props.$index === 3 || 4 ? "span 2" : "auto")};
    grid-row: auto;
  }

  @media (max-width: 480px) {
    grid-column: auto;
    grid-row: auto;
  }
`;

const ButtonWrapper = styled.div`
  grid-column: span 3;
  display: flex;
  justify-content: space-around;

  & > button {
    padding: 18px 16px;
    width: 16rem;
    min-width: fit-content;
    border: none;
    border-radius: 4px;
    background-color: ${(props) => props.theme.primaryColor || "#007BFF"};
    font-weight: 600;
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${(props) =>
        props.theme.primaryHoverColor || "#0056b3"};
    }

    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  @media (max-width: 768px) {
    grid-column: span 2;
    flex-direction: column;

    & > button {
      width: 100%;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 480px) {
    grid-column: span 1;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  font-weight: 500;
`;
