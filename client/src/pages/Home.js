import React from 'react';

import { Layout, Typography } from 'antd';

import {NavigateMenu} from './modules/NavigateMenu'

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;



export const Home = () => {

  const MENU =  NavigateMenu("inline", '1')

  return (
  <Layout>
    <Sider>
      
      
      {MENU}
      
     
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background site-layout-header" style={{ padding: 0, textAlign:'center' }} ><Title style={{color: '#FFF', fontFamily: 'Comfort'}}>Diploma maker</Title></Header>
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: window.innerHeight }}>
          content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>School project ©2021 Created by Crying Soul</Footer>
    </Layout>
  </Layout>
  )
   
}

