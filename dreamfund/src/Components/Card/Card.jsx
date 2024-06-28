import React from "react";
import Image from "next/image";
import {
  FaBitcoin,
  FaAddressCard,
  FaFilter,
  FaHandHoldingUsd,
  FaBullseye,
  FaArrowUp,
} from "react-icons/fa";
import styled from "styled-components";

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
  .raised,
  .total,
  .initial {
    color: #666;
  }
`;

const Card = () => {
  return (
    <CardContainer>
      <div>
        <Image
          src={
            "https://images.unsplash.com/photo-1719216325263-9070d79336c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
          }
          alt="campaign"
          height={300}
          width={300}
        />
      </div>
      <div className="details">
        <div className="icon-text">
          <FaFilter />
          <div className="category">Category</div>
        </div>
        <div className="title">Title of Campaign</div>
        <div className="story">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem,
          quasi.
        </div>
        <div className="icon-text">
          <FaBitcoin />
          <div>100 Matic</div>
        </div>
        <div className="icon-text">
          <FaAddressCard />
          <div className="address">100cvjshd8erye</div>
        </div>
        {/* <div className="fund">
          <div className="icon-text">
            <FaHandHoldingUsd />
            <div className="raised">Raised: 50 Matic</div>
          </div>

          <div className="icon-text">
            <FaBullseye />
            <div className="total">Total Required: 150 Matic</div>
          </div>
        </div> */}
        {/* <div className="icon-text">
          <FaArrowUp />
          <div className="initial">Initially Asked: 200 Matic</div>
        </div> */}
      </div>
    </CardContainer>
  );
};

export default Card;
