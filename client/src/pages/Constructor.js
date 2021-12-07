import React from "react";
import { BsSquareFill, BsCircleFill } from "react-icons/bs";
import { BiCut } from "react-icons/bi";
import { IoIosResize } from "react-icons/io";
import "../App.css";
import {
  Layout,
  Breadcrumb,
  Space,
  Row,
  Button,
  Divider,
  Carousel,
} from "antd";
import { DownloadOutlined, FileAddOutlined } from "@ant-design/icons";
import { NavigateMenu } from "./modules/Navbar";
import { Canvas } from "../app/main";
import { useHttp } from "../hooks/http.hook";
const { Header, Content, Footer, Sider } = Layout;

export const Constructor = () => {
  const canvas = React.createRef();
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  const menu = NavigateMenu("horizontal", "3");
  const { loading, request } = useHttp();
  
  const addSample = () => {
    canvas.current.changeTheme();
  };
  const downloadImage = async () => {
    console.log(canvas.current.toDataUrl());
    // try {
    //   const data = await request("/doc/create/pdf", "POST", {
    //     data: {},
    //     headers: {}
    //   });
    // } catch (e) {}
  };

  const b_size = "middle";

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
          <Sider className="site-layout-background" width={400}>
            <>
              <Divider plain>Samples</Divider>
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

              <Button
                type="default"
                onClick={addSample}
                icon={<FileAddOutlined />}
                block
                size="large"
              >
                Add
              </Button>
              <Divider plain>Current</Divider>
              <Space size={[10, 10]} wrap>
                <Button onClick={function(){
                  this.canvas.current.removeComponent()
                }} danger>Remove</Button>
              </Space>
              <Divider plain>Objects</Divider>
              <Space size={[10, 10]} wrap>
                <Button type="primary" icon={<BsSquareFill />} size={b_size} onClick={function(){
                  canvas.current.addComponent("square")
                }} />
                <Button type="primary" icon={<BsCircleFill />} size={b_size} />
              </Space>

              <Divider plain>Tools</Divider>
              <Space size={[10, 10]} wrap>
                <Button type="primary" icon={<BiCut />} size={b_size} />
                <Button type="primary" icon={<IoIosResize />} size={b_size} />
              </Space>
              <div>
                <br />
              </div>
            </>
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
