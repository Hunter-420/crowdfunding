"use client";
import Card from "@/Components/Card/Card";
import { category } from "@/Components/CreateCampaign/campaignData";
import styled from "styled-components";
export default function Home() {
  return (
    <DashboardWrapper>
      <CategoryWrapper>
        {category.map((data, i) => (
          <Category key={i}>{data}</Category>
        ))}
      </CategoryWrapper>
      <div>
        <Card />
      </div>
    </DashboardWrapper>
  );
}
const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0px 20px;
`;

const CategoryWrapper = styled.div`
  display: flex;
  text-transform: capitalize;
  width: 60%;
  margin-top: 20px;

  /* margin-left: 10px; */
  justify-content: space-evenly;
`;

const Category = styled.div`
  background-color: ${(props) => props.theme.bgDiv};
  color: ${(props) => props.theme.color};
  border-radius: 10px;
  width: 90px;
  min-width: fit-content;
  font-weight: 500;
  padding: 4px 8px;
  text-align: center;
  &:hover {
    background-color: ${(props) => props.theme.bgSubDiv};
  }
`;
