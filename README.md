# Crowdfunding Platform on Blockchain

## Table of Contents

1. [Introduction](#introduction)
2. [Why Crowdfunding on Blockchain?](#why-crowdfunding-on-blockchain)
3. [Main Tech Stack](#main-tech-stack)
4. [Functional Requirements](#functional-requirements)
5. [Campaign Properties](#campaign-properties)
6. [User Roles and Interactions](#user-roles-and-interactions)

## Introduction <a name="introduction"></a>

Our project aims to revolutionize crowdfunding by leveraging the power of blockchain technology. Crowdfunding involves raising capital from a large number of individuals, each contributing a small amount in exchange for a stake in the project or its outcome. By employing blockchain, we aim to enhance transparency, security, and accessibility in the crowdfunding process.

## Why Crowdfunding on Blockchain? <a name="why-crowdfunding-on-blockchain"></a>

1. **Transparency:** Blockchain ensures that all transactions are recorded on an immutable ledger, providing transparency to all stakeholders.
2. **Security:** The inherent cryptographic security of blockchain technology safeguards transactions and user data.
3. **Decentralization:** By removing the need for intermediaries, blockchain fosters trust and eliminates single points of failure.
4. **Global Reach:** Blockchain facilitates borderless transactions, overcoming currency exchange barriers and enabling participation from individuals worldwide.
5. **Smart Contracts:** Smart contracts automate the execution of predefined conditions, ensuring that funds are released only when specified criteria are met.

## Main Tech Stack <a name="main-tech-stack"></a>

1. **Solidity:** A programming language for writing smart contracts, primarily used on the Ethereum blockchain.
2. **React:** A JavaScript library for building interactive user interfaces, ensuring a seamless user experience.
3. **Metamask:** A browser extension that enables users to interact with Ethereum-based decentralized applications (dApps) securely.
4. **Tailwind CSS:** A utility-first CSS framework for designing sleek and responsive user interfaces.

## Functional Requirements <a name="functional-requirements"></a>

1. **Create Campaign:** Users can initiate crowdfunding campaigns by providing essential details such as title, description, funding target, and deadline.
2. **Donate to Campaign:** Contributors can pledge funds to campaigns they wish to support, using cryptocurrency through their Metamask wallets.
3. **View Donators:** Campaign creators can view a list of donors who have contributed to their campaign, promoting transparency and accountability.
4. **Browse Campaigns:** Users can explore existing crowdfunding campaigns, filtering and sorting based on various criteria.
5. **Search:** A search functionality enables users to find specific campaigns based on keywords, categories, or campaign owners.

## Campaign Properties <a name="campaign-properties"></a>

1. **Owner Address:** The Ethereum address of the campaign initiator, ensuring accountability.
2. **Title:** A concise and descriptive title for the crowdfunding campaign.
3. **Description:** A detailed overview of the project, its objectives, and how the funds will be utilized.
4. **Target Amount:** The fundraising goal to be achieved within a specified timeframe.
5. **Deadline:** The date by which the funding target must be reached to ensure campaign success.
6. **Funds Raised:** The total amount of cryptocurrency raised so far, providing real-time updates on campaign progress.
7. **Image:** An optional visual representation of the project or cause, enhancing engagement and appeal.
8. **Donor Addresses:** Ethereum addresses of individuals who have contributed to the campaign, enhancing transparency and recognition.
9. **Donation Details:** Comprehensive information on individual donations, including the amount contributed and the date of donation.

## User Roles and Interactions <a name="user-roles-and-interactions"></a>

### Campaign Creators/Initiators:

- **Role:** These users initiate crowdfunding campaigns to raise funds for their projects.
- **Interactions:**
  - *Create Campaign:* They can create new crowdfunding campaigns by providing details such as title, description, funding target, deadline, and optional image.
  - *Monitor Campaign:* They can track the progress of their campaigns, view funds raised, and see a list of donors.
  - *Withdraw Funds:* Upon reaching the funding goal, they can initiate the withdrawal of funds as per the smart contract conditions.

### Contributors/Donors:

- **Role:** Individuals who contribute funds to support campaigns initiated by others.
- **Interactions:**
  - *Browse Campaigns:* They can explore existing campaigns, filtering based on categories or sorting by popularity or deadline.
  - *Donate to Campaign:* They can pledge funds to campaigns they wish to support, using cryptocurrency through their Metamask wallets.
  - *Track Contributions:* They can view their donation history and monitor the impact of their contributions on campaigns.
