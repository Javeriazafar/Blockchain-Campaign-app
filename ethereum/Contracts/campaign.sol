// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.20;

contract CampaignFactory{
    Campaign[] public deployedCampaigns;
    
    function createCampaign(uint minimum) public {
        Campaign campaignaddress= new Campaign( minimum, msg.sender);
        deployedCampaigns.push(campaignaddress);
    }
    
    function getCampaignsDeployed() public view returns(Campaign[] memory){
        return deployedCampaigns;
    }
}



contract Campaign{
    struct Request{
        string description;
        address payable recepient;
        bool complete;
        uint value;
        uint approvalCount;
        mapping(address=>bool) approvals;
    }
    //Request[] public requestss;
    mapping (uint => Request) public requests;
    
    address public manager;
    uint public minContribution;
    mapping(address=>bool) public approvers;
    //mapping(address=> bool) public all;
    uint approversCount;
    uint requestsCount;
    
    
    modifier restricted(){
        require(msg.sender == manager);
        _;
    }
    constructor(uint minimum, address creator) {
        manager= creator;
        minContribution=minimum;
        
    }
    function contribute() public payable{
        require(msg.value > minContribution);
        
        approvers[msg.sender]=true;
        approversCount++;
    }
    
    function createRequest(string memory description, uint value, address payable recepient, uint index) public restricted {
        Request storage request = requests[index];
       // Request memory newRequest= Request({
         //   description:description,
           // value: value,
            //recepient:recepient,
            //complete:false,
            //approvalCount:0
            
        //});
        request.description=description;
        request.value=value;
        request.recepient=recepient;
        request.complete=false;
        request.approvalCount=0;
        
                
    }
    
    function approveRequest(uint index) public{
        Request storage request = requests[index];
        
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        request.approvals[msg.sender]=true;
        request.approvalCount++;
        
    }
    
    function finalizedRequest(uint index) public restricted{
    Request storage request = requests[index];
    require(request.approvalCount >(approversCount/2) );
    require(!request.complete);
    request.recepient.transfer(request.value);
    request.complete=true;
    requestsCount++;
        
    }

    function getSummary() public  view returns(uint,uint,uint,uint,address){
         
        return (
            minContribution,
            address(this).balance,
            approversCount,
            requestsCount,
            manager
        );
    }

    function getRequests() public view returns(uint){
        return (requestsCount);

    }
    
}