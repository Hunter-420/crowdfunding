"use client";
import styled from "styled-components";
import { useState } from "react";
import { ethers } from "ethers";
import Image from "next/image";
import {
  FaBitcoin,
  FaAddressCard,
  FaFilter,
  FaRegCalendar,
} from "react-icons/fa";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  cursor: pointer;
  width: fit-content;
  img {
    border-radius: 8px;
  }

  .details {
    display: flex;
    padding: 12px;
    flex-direction: column;
    gap: 10px;
  }

  .icon-text {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .title {
    font-weight: bold;
    margin-bottom: 5px;
  }
  .story {
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .fund {
    display: flex;
    justify-content: space-between;
  }
  .category,
  .story,
  .address,
  .date,
  .raised,
  .total,
  .initial {
    color: #666;
  }
`;

const Card = ({ campaign }) => {
  return (
    <CardContainer>
      <div>
        <Image
          src={`https://images.unsplash.com/photo-${campaign.image}`}
          alt="campaign"
          height={300}
          width={300}
        />
      </div>
      <div className="details">
        <div className="icon-text">
          <FaFilter />
          <div className="category">{campaign.category}</div>
        </div>
        <div className="title">{campaign.title}</div>
        {/* <div className="story">{campaign.story}</div> */}
        <div className="icon-text">
          <FaBitcoin />
          <div>{campaign.amount} Matic</div>
        </div>
        <div className="icon-text">
          <FaAddressCard />
          <div className="address">
            {campaign.owner.slice(0, 6)}...{campaign.owner.slice(39)}
          </div>
        </div>
        <div className="icon-text">
          <FaRegCalendar />
          <div className="date">
            {new Date(campaign.timeStamp * 1000).toLocaleDateString()}
          </div>
        </div>
      </div>
    </CardContainer>
  );
};
export default Card;
