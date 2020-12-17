import React from 'react';
import {Link} from '../routes';


const Headers =()=>{
   return <div class="ui menu" style={{marginTop:'20px'}}>
  <a class="item"><Link route='/'>CrowdCoins</Link> </a>
  
  <div class="right menu">
  <a class="item"> <Link route='/'> Campaigns</Link></a>
  <a class="item"><Link route='/Campaigns/create'>+</Link>  </a>
  </div>
</div>
}
export default Headers;