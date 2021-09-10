import React from "react";
import '../../App.css'
import { Link } from "react-router-dom";
import { Menu } from 'antd';
import { FileAddOutlined, UserOutlined, HomeOutlined, InfoCircleOutlined } from '@ant-design/icons';



export const NavigateMenu = (mode, selectedKeys) =>{

        return (

    <Menu theme="dark" mode={mode} defaultSelectedKeys={[selectedKeys]}>
    <Menu.Item key="1" icon={<HomeOutlined />}>
     <Link to="/" target="_self">Home</Link>
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
    <Link to="/signup" target="_self">Signup</Link>
    </Menu.Item>
    <Menu.Item key="3" icon={<FileAddOutlined />}>
    <Link to="/creation" target="_self">Creation</Link>
    </Menu.Item>
    <Menu.Item key="4" icon={<InfoCircleOutlined />}>
    <Link to="/about" target="_self">About</Link>
    </Menu.Item>
  </Menu>
        )
    
  
}