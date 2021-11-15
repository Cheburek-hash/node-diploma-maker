import React from "react";
import "../App.css";
import { Layout, Menu, Breadcrumb, Row, Button } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { NavigateMenu } from "./modules/Navbar";
import { Canvas } from "../app/main";
import { useHttp } from "../hooks/http.hook";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export const Constructor = () => {
  const canvas = React.createRef();

  const menu = NavigateMenu("horizontal", "3");
  const { loading, request } = useHttp();
  const downloadImage = async () => {
    console.log(canvas.current.toDataUrl());
    // try {
    //   const data = await request("/doc/create/pdf", "POST", {
    //     data: {},
    //     headers: {}
    //   });
    // } catch (e) {}
  };

  return (
    <Layout style={{ minWidth: "1100px" }}>
      <Header className="header">
        <div className="logo" />

        {menu}
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
        <Layout
          className="site-layout-background"
          style={{ minWidth: "1040px", padding: "24px 0" }}
        >
          <Sider className="site-layout-background" width={200}>
            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
            >
              <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Menu">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
                <SubMenu key="sub2" title="Components">
                  <Button block>Add component</Button>
                  <Button block>Add component</Button>
                  <Button block>Add component</Button>
                  <Button block>Add component</Button>
                  <Button block>Add component</Button>
                </SubMenu>
              </SubMenu>
              
              
            </Menu><br/>
            <Button
                type="primary"
                onClick={downloadImage}
                loading={loading}
                icon={<DownloadOutlined />}
                block
                size="large"
              >
                
                Download
              </Button>
          </Sider>

          <Content>
            <Row justify="center">
              <Row className="a4">
                <Canvas ref={canvas} />
              </Row>
            </Row>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};
