import React, {Component} from 'react';
import { Card, Header, Button } from 'semantic-ui-react';
import Layout from '../component/layout';

import factory from '../ethereum/factory';
import {Link, Router} from '../routes';



class App extends Component{

    static async getInitialProps(){
        const Campaign= await factory.methods.getCampaignsDeployed().call();
        return {Campaign};
    }

     setStyle(){
         
        //console.log(this.props.Campaign) ;
         const item= this.props.Campaign.map(address=> 
            {return {
                    header: address,
                    description:<Link to={`/Campaigns/${address}`}>View Campaign</Link>,
                    fluid: true};
            })  ;  
            return <Card.Group items={item}/>  ;
                 }
    

    render(){
    return (
        <Layout>
         <div>
         
                 <h2>Open Campaigns</h2>
                 <Link to='/Campaigns/create'><Button floated='right' content ="Create Campaign" icon='add circle' primary/></Link>
                 {this.setStyle()}
        </div>
        </Layout>
        );
    
    }
    
}

export default App;