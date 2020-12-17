const Web3= require('web3');
let web3;
if(typeof window !=='undefined' && typeof window.web3 !=='undefined'){
    web3= new Web3(window.web3.currentProvider);
}
else {
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/45e588c887e84351a4a1c6ae1cffd1f1'
    );
    web3 = new Web3(provider);
}


export default web3;