
import React from 'react';
import { Button } from 'semantic-ui-react';
import Layout from '../../component/layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import {Router} from '../../routes';

class CreateCampaign extends React.Component{

state={
  minContribution:'',
  errorMessage:'',
  loading:''
}
  onSubmit= async (e)=>{
    e.preventDefault();
this.setState({loading:true});
    
    try{
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createCampaign(this.state.minContribution)
      .send({
        from: accounts[0]
      });
      Router.pushRoute('/');
    }catch(err){
      this.setState({errorMessage:err.Message});
    }
    this.setState({loading:false});
    
   
}
    render(){
    return <Layout>
      <label>Minimum Contribution</label>
            <form class="ui form" onSubmit={this.onSubmit} >
            
              <div class="field" class="ui right labeled input">
                <input
                 type="text" 
                 name="min-contribution" 
                 value={this.state.minContribution}
                 onChange={event=>this.setState({minContribution:event.target.value})}
                 placeholder="Minimum Contribution"/>
                 <div class="ui label" >
                  wei
                </div>
              </div>
              <div>
                
              <Button loading={!!this.state.loading} primary class="ui button" >Create</Button>

              </div>
            </form>
            </Layout>;
    
}
}
export default CreateCampaign;