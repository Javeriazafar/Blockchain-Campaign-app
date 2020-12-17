import web3 from '../ethereum/web3';

const compileFactory = require('../ethereum/build/CampaignFactory.json');

const factory = new web3.eth.Contract(
    JSON.parse(compileFactory.metadata).output.abi,
    '0x27323AEe05daeA182Fa608a6DD414D1f4592f670' );
export default factory;