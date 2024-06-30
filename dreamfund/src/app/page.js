"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "@/Components/Card/Card";
import { fetchCampaigns } from "@/lib/fetchCampaign";

export default function Home() {
  const [filter, setFilter] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await fetchCampaigns();
      setAllData(data);
      setFilter(data);
    }

    loadData();
  }, []);

  return (
    <HomeWrapper>
      <CategoryWrapper>
        <Category onClick={() => setFilter(allData)}>All</Category>
        <Category
          onClick={() =>
            setFilter(
              allData.filter((campaign) => campaign.category === "health")
            )
          }
        >
          Health
        </Category>
        <Category
          onClick={() =>
            setFilter(
              allData.filter((campaign) => campaign.category === "education")
            )
          }
        >
          Education
        </Category>
        <Category
          onClick={() =>
            setFilter(
              allData.filter((campaign) => campaign.category === "animal")
            )
          }
        >
          Animal
        </Category>
        <Category
          onClick={() =>
            setFilter(
              allData.filter((campaign) => campaign.category === "environment")
            )
          }
        >
          Environment
        </Category>
      </CategoryWrapper>

      <CardsWrapper>
        {filter.map((campaign, i) => (
          <Card key={i} campaign={campaign} />
        ))}
      </CardsWrapper>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
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

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  margin-top: 25px;
`;
