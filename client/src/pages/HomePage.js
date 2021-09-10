import React from 'react';

import { Layout, Breadcrumb } from 'antd';

import {NavigateMenu} from './modules/NavigateMenu'

const { Header, Content, Footer, Sider } = Layout;



export const HomePage = () => {

  const menu =  NavigateMenu("inline", '1')

  return (
  <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      
      {menu}
      
     
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
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

