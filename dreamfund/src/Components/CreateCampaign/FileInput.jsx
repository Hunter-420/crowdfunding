"use client";
import React, { useRef, useState } from "react";
import { RiUpload2Fill } from "react-icons/ri";
import styled from "styled-components";

const FileInput = ({ field, setFormData, formData }) => {
  const [filePreview, setFilePreview] = useState(null);
  const hiddenFileInput = useRef(null);

  const handleChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      setFormData({ ...formData, [field.name]: file });
      setFilePreview(URL.createObjectURL(file));
    }
  };

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  return (
    <Container>
      <UploadButton onClick={handleClick}>
        <RiUpload2Fill size={16} />
        <span>Upload</span>
      </UploadButton>
      <HiddenInput
        id={field.id}
        type={field.type}
        name={field.name}
        ref={hiddenFileInput}
        onChange={handleChange}
      />

      {filePreview && (
        <ImagePreview src={filePreview} alt="Uploaded file preview" />
      )}
    </Container>
  );
};

export default FileInput;

const Container = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const UploadButton = styled.div`
  background-color: #2d8f15;
  color: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  cursor: pointer;
  padding: 8px 16px;
  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor || "#0ecf0e"};
  }

  span {
    font-size: 14px;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const FileName = styled.div`
  color: #555;
  font-size: 14px;
`;

const ImagePreview = styled.img`
  max-width: 100px;
  max-height: 100px;
  border-radius: 4px;
  object-fit: cover;
`;
