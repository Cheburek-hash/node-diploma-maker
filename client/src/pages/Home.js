import React from "react";

import { Layout, Typography, Carousel } from "antd";

import { NavigateMenu } from "./modules/Navbar";

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

export const Home = () => {
  const MENU = NavigateMenu("inline", "1");

  const contentStyle = {
    height: `${window.innerHeight/2}px`,
    color: "#fff",
    lineHeight: `${window.innerHeight/2}px`,
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <Layout>
      <Sider>{MENU}</Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background site-layout-header"
          style={{ padding: 0, textAlign: "center" }}
        >
          <Title style={{ color: "#FFF", fontFamily: "Comfort" }}>
            Diploma maker
          </Title>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: window.innerHeight }}
          >
            <Carousel autoplay>
              <div>
                <h3 style={contentStyle}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
            ,
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          School project ©2021 Created by Crying Soul
        </Footer>
      </Layout>
    </Layout>
  );
};
