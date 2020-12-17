const assert= require('assert');
const ganache = require('ganache-cli');
var Contract = require('web3-eth-contract');
const Web3= require('web3');
const web3= new Web3(ganache.provider());

const compileFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign= require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignaddress;
let campaign;

beforeEach (async ()=>{
    accounts = await new web3.eth.getAccounts();
    
    factory = await new web3.eth.Contract(JSON.parse(compileFactory.metadata).output.abi )
    .deploy({data: compileFactory.evm.bytecode.object})
    .send({from: accounts[0], gas: '1000000'});

    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000'
    });

    [campaignaddress]= await factory.methods.getCampaignsDeployed().call();
    campaign = await new web3.eth.Contract(
        (JSON.parse(compiledCampaign.metadata).output.abi ),campaignaddress
        );

})

describe('Campaigns', ()=>{
  // console.log(JSON.parse(compiledCampaign.metadata).output.abi );
   //console.log( new web3.eth.Contract(compileFactory));
    it('deploys factory and campaign',()=>{
      
   
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    } );

    it('mark the caller as the manager',async()=>{
        const manager= await campaign.methods.manager().call();
        assert.strictEqual(accounts[0],manager);

    });

    it('mark as the contributor',async()=>{
        await campaign.methods.contribute().send(
            {
                value:'200',
                from: accounts[1]
            }
        );

        const apporver=await campaign.methods.approvers(accounts[1]).call();
        assert(apporver);
    });

    it('mark minimumum contribution',async()=>{
        try{
            await campaign.methods.contribute().send({
                value:'5',
                from:accounts[1]
            });
            assert(false);
        }
        catch(err){
            assert(err);
        }
    });

    it('manager can make a request',async()=>{
        await campaign.methods.createRequest('buy bottles','100',accounts[1],1)
        .send({
            from: accounts[0],
            gas:'1000000'
        });
        //console.log(campaign.methods);

        const req = await campaign.methods.requests(1).call();
        assert.strictEqual('buy bottles', req.description);

    });

    it('start to end testing ',async()=>{
        await campaign.methods.contribute().send({
            from : accounts[0],
            value: web3.utils.toWei('10','ether')
        });      

        await campaign.methods
        .createRequest('a',web3.utils.toWei('5', 'ether'), accounts[1],0 )
        .send({ from : accounts[0], gas: '1000000'});

        await campaign.methods.approveRequest(0).send({
            from: accounts[0],
            gas:'1000000'
        });

       await campaign.methods.finalizedRequest(0).send({
            from: accounts[0],
            gas:'1000000'
        });
//console.log(web3.eth.getBalance(accounts[1]).then(console.log));
        let balance=await web3.eth.getBalance(accounts[1]);
        console.log(balance)
        balance= web3.utils.fromWei(balance.toString(), 'ether');
        console.log(balance);
        balance= parseFloat(balance);
       console.log(balance);

        assert(balance>103);

    })
});