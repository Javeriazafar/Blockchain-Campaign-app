import web3 from '../ethereum/web3';
import Campaign from '../ethereum/build/Campaign.json';
const getCampaigns= address=>{
    return new web3.eth.Contract(
        JSON.parse(Campaign.metadata).output.abi,
        address
    );
};

export default getCampaigns;