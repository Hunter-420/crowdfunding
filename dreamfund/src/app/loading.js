"use client";
import React from "react";
import styled from "styled-components";
import ReactLoading from "react-loading";
const loading = () => {
  return (
    <Loader>
      <ReactLoading
        type="bubbles"
        color="rgb(137, 105, 182)"
        height={300}
        width={300}
      />
    </Loader>
  );
};

export default loading;

const Loader = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
`;
