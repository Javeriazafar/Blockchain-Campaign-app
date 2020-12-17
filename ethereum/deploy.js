const HdWalletProvider = require('@truffle/hdwallet-provider');
const Web3= require('web3');
const compileFactory = require('../ethereum/build/CampaignFactory.json');

const provider= new HdWalletProvider(
    'ribbon recipe fame lady brain elder peasant filter chunk danger fossil cloud',
    'https://rinkeby.infura.io/v3/45e588c887e84351a4a1c6ae1cffd1f1'
);

const web3= new Web3(provider);

const deploy= async()=>{
    const accounts= await web3.eth.getAccounts();
    console.log('attempting to deploy from', accounts[0]);

    factory = await new web3.eth.Contract(JSON.parse(compileFactory.metadata).output.abi)
    .deploy({data: compileFactory.evm.bytecode.object})
    .send({from: accounts[0], gas: '1000000'});
    //console.log(JSON.parse(compileFactory.metadata).output.abi)

    console.log(factory.options.address);
};
deploy();