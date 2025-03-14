import React, { useRef } from "react";
import { BsSquareFill, BsCircleFill } from "react-icons/bs";
import { BiCut } from "react-icons/bi";
import { IoIosResize } from "react-icons/io";
import { IoText, IoColorPaletteSharp } from "react-icons/io5";
import { ModalGradient, ModalText } from "./modules/Modals";

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
  const canvas = useRef();
  const modalGradient = useRef();
  const modalText = useRef();
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
  const sendText = (data) => {
    canvas.current.addComponent({
      type: "text",
      data: data,
    });
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
                <Button
                  onClick={function () {
                    canvas.current.removeComponent();
                  }}
                  danger
                >
                  Remove
                </Button>
                <Button icon={<IoColorPaletteSharp color="#238be8" />} onClick={function () {
                    modalGradient.current.showModal();
                  }} size={b_size} />
              </Space>
              <Divider plain>Objects</Divider>
              <Space size={[10, 10]} wrap>
                <Button
                  type="primary"
                  icon={<IoText />}
                  size={b_size}
                  onClick={function () {
                    modalText.current.showModal(sendText);
                  }}
                />
                <Button
                  type="primary"
                  icon={<BsSquareFill />}
                  size={b_size}
                  onClick={function () {
                    canvas.current.addComponent({ type: "square", data: null });
                  }}
                />
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
            <ModalGradient ref={modalGradient} />
            <ModalText ref={modalText} />
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
