const path = require('path');
const fs = require('fs-extra');
const solc= require('solc');
const { url } = require('inspector');
const CONTRACT_FILE = 'campaign.sol';
const buildPath = path.resolve(__dirname, 'build');

fs.removeSync(buildPath);

const contractsPath= path.resolve(__dirname,'Contracts', 'campaign.sol');

const source=fs.readFileSync(contractsPath, 'utf-8').toString();
//console.log(source);
var input = {

    language: 'Solidity',
    sources: {
        'campaign.sol' : {
            
            content:source
            
        }
    },
    
    settings: {
        
        outputSelection: {
            "*": {
                "*": [
                  "metadata", "evm.bytecode" // Enable the metadata and bytecode outputs of every single contract.
                  , "evm.bytecode.sourceMap" // Enable the source map output of every single contract.
                ],
                "": [
                  "ast" // Enable the AST output of every single file.
                ]
              },
            "def": {
                "MyContract": [ 'abi', 'evm.bytecode.opcodes' , 'evm.bytecode']
              }
        }
      } 
}; 
const output= (JSON.parse(solc.compile(JSON.stringify(input))));



fs.ensureDirSync(buildPath);

for(let contract in output.contracts[CONTRACT_FILE])
{

  //console.log(output.contracts[source][contract].evm.bytecode.object);
    fs.outputJSONSync(
      
        path.resolve(buildPath,contract+ '.json'),
        output.contracts[CONTRACT_FILE][contract]       );
     
        
}
