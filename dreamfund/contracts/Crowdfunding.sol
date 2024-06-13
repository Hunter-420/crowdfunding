// SPDX-License-Identifier: Unlicensed
pragma solidity >=0.7.0 <0.9.0;

contract CampaignFactory{
    address[] public depoyedCampaign;
    event campaignCreated(string title, uint256 requiredAmount,address indexed owner,address campaignAddress,string imageURI,uint indexed timestamp, string indexed category);


    function createCampaign(string memory campaignTitle, uint requiredCampaignAmount, string memory imageURI, string memory storyURI, string memory category ) public{
Campaign newCampaign = new Campaign(campaignTitle,requiredCampaignAmount,imageURI,storyURI);
depoyedCampaign.push(address(newCampaign));
emit campaignCreated(campaignTitle, requiredCampaignAmount, msg.sender, address(newCampaign), imageURI, block.timestamp, category);
    }

}


contract Campaign{
    string public title;
    uint256 public requiredAmount;
    string public image;
    string public story;
    address  payable  public owner;
    uint256 public receivedAmount;

    event donated(address indexed  donar, uint256  indexed amount, uint indexed timestamp);

constructor( string memory campaignTitle,  uint256 campaignReceivedAmount, string memory imageURI, string memory storyURI){
title = campaignTitle;
receivedAmount = campaignReceivedAmount;
image= imageURI;
 story = storyURI;
 owner = payable (msg.sender);
    }

 function donate()public payable {
    require(requiredAmount>receivedAmount,"Required amount is fullfilled");
owner.transfer(msg.value);
receivedAmount+=msg.value;
emit donated(msg.sender, msg.value, block.timestamp);
 }


}

