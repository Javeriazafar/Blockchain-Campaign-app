import React from 'react';
import { Card } from 'semantic-ui-react';
import Layout from '../../component/layout';
import getCampaigns from '../../ethereum/campaign';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

class View extends React.Component{
    static async getInitialProps(props){
        const campaign= getCampaigns(props.query.address);
        const summary = await campaign.methods.getSummary().call();
         //console.log(summary);
         return{
             minContribution: summary[0],
             balance: summary[1],
             approversCount: summary[2],
             requestsCount: summary[3],
             manager: summary[4]

         }
    }

    renderSummary=()=>{
        const {
            minContribution,
            balance,
            approversCount,
            requestsCount,
            manager
        }= this.props;
        const item=[
             {
                header: manager,
                description:'managers address',
                style: {overflowWrap:'break-word'}
            },  {
                header: minContribution,
                description:'managers address',
                
            },
            {
                header: approversCount,
                description:'managers address',
                
            },
            {
                header: requestsCount,
                description:'managers address',
                
            },
            {
                header: web3.utils.fromWei(balance,'ether'),
                description:'managers address',
                
            }
        ]
        return <Card.Group items={item}/>
    }
    render(){
        return(
            <Layout>
                {this.renderSummary()}

            </Layout>
        );
    }

}

export default View;