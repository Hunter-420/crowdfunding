import { ethers } from "ethers";

import CampaignFactory from "../../artifacts/contracts/Crowdfunding.sol/Campaign.json";
export async function fetchCampaigns() {
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.NEXT_PUBLIC_RPC_URL
  );
  console.log("🚀 ~ fetchCampaigns ~ provider:", provider);

  const contract = new ethers.Contract(
    process.env.NEXT_PUBLIC_ADDRESS,
    CampaignFactory.abi,
    provider
  );
  console.log("🚀 ~ fetchCampaigns ~ contract:", contract);

  // Create a filter for the campaignCreated event
  const campaignCreatedFilter = contract.filters.campaignCreated();
  console.log(
    "🚀 ~ fetchCampaigns ~  campaignCreatedFilter:",
    campaignCreatedFilter
  );

  // Use the filter to query the events
  const AllCampaigns = await contract.queryFilter(campaignCreatedFilter);
  console.log("🚀 ~ fetchCampaigns ~ AllCampaigns:", AllCampaigns);

  const AllData = AllCampaigns.map((e) => {
    return {
      title: e.args.title,
      image: e.args.imgURI,
      owner: e.args.owner,
      timeStamp: parseInt(e.args.timestamp),
      amount: ethers.utils.formatEther(e.args.requiredAmount),
      address: e.args.campaignAddress,
      // category: e.args.category,
      // story: e.args.story, // Assuming you have a story field in your contract
    };
  });

  return AllData;
}
