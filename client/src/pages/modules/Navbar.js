import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Menu, Avatar } from "antd";
import {
  FileAddOutlined,
  LogoutOutlined,
  UserOutlined,
  HomeOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { ROUTES } from "../../router/routes";
import { AuthContext } from "../../context/AuthContext";

export const NavigateMenu = (mode, selectedKeys) => {
  const auth = useContext(AuthContext);
  const router = useHistory();

  if (auth.isAuthenticated) {
    return (
      <Menu
        theme="dark"
        mode={mode}
        selectable={false}
        defaultSelectedKeys={[selectedKeys]}
      >
        <Menu.Item
          key="1"
          icon={<HomeOutlined />}
          onClick={() => router.push(ROUTES.HOME)}
        >
          Home
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={<FileAddOutlined />}
          onClick={() => router.push(ROUTES.CONSTRUCTOR)}
        >
          Constructor
        </Menu.Item>
        <Menu.Item
          key="5"
          icon={<LogoutOutlined />}
          onClick={() => auth.logout()}
        >
          logout
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={<InfoCircleOutlined />}
          onClick={() => router.push(ROUTES.ABOUT)}
        >
          About
        </Menu.Item>
        {/* <Menu.Item
          key="6"
          onClick={() => router.push(ROUTES.ACCOUNT)}
        >
          <Avatar
            style={{
              backgroundColor: '#7265e6',
              verticalAlign: "middle",
            }}
            size="large"
            gap={1}
          >
            Egor
          </Avatar>
        </Menu.Item> */}
      </Menu>
    );
  }
  return (
    <Menu
      theme="dark"
      mode={mode}
      selectable={false}
      defaultSelectedKeys={[selectedKeys]}
    >
      <Menu.Item
        key="1"
        icon={<HomeOutlined />}
        onClick={() => router.push(ROUTES.HOME)}
      >
        Home
      </Menu.Item>
      <Menu.Item
        key="2"
        icon={<UserOutlined />}
        onClick={() => router.push(ROUTES.AUTH_LOGIN)}
      >
        Auth
      </Menu.Item>
      <Menu.Item
        key="4"
        icon={<InfoCircleOutlined />}
        onClick={() => router.push(ROUTES.ABOUT)}
      >
        About
      </Menu.Item>
      
    </Menu>
  );
};
