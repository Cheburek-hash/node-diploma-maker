import React from "react";
import { useLocation } from "react-router";
import { Layout, Breadcrumb, Row } from "antd";

import { NavigateMenu } from "./modules/Navbar";
import { LoginForm } from "./modules/forms/LoginForm";
import { SignupForm } from "./modules/forms/SignupForm";

const { Header, Content, Footer } = Layout;
export const Auth = () => {
  const authState = useLocation().pathname.split("/")[2];

  const menu = NavigateMenu("horizontal", "2");

  if (authState === "login") {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          {menu}
        </Header>
        <Content
          style={{ minHeight: window.innerHeight - 100, padding: "0 50px" }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
          <Layout className="site-layout-content">
            <Row className="h100" justify="center" align="middle">
              <LoginForm />
            </Row>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        {menu}
      </Header>
      <Content
        style={{ minHeight: window.innerHeight - 100, padding: "0 50px" }}
      >
        <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
        <Layout className="site-layout-content">
          <Row className="h100" justify="center" align="middle">
            <SignupForm />
          </Row>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};
