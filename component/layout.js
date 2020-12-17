import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import Headers from './header';
import Head from 'next/head';

const Layout=(props)=>{
  return <Container> <div>
    <Head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>

    </Head>
        <Headers/>
        {props.children}
        
    </div>
    </Container>
}
export default Layout;