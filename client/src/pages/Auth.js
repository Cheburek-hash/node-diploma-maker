import React from "react";

import { Layout, Breadcrumb, Row} from 'antd';

import {NavigateMenu} from './modules/NavigateMenu'
import { AuthForm } from "./modules/AuthForm";




const { Header, Content, Footer } = Layout;
export const Auth = () => {

  const menu =  NavigateMenu("horizontal", '2')
  
    return (
        <Layout className="layout">
    <Header>
      <div className="logo" />
      {menu}
    </Header>
    <Content style={{ minHeight: window.innerHeight - 100, padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
       
      </Breadcrumb>
      <Layout className="site-layout-content" ><Row className="h100" justify="center" align="middle"><AuthForm /></Row></Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
    )
}