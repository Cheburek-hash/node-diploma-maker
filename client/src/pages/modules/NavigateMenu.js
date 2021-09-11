import React from "react";
import { useHistory} from "react-router-dom";
import { Menu } from 'antd';
import { FileAddOutlined, UserOutlined, HomeOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { ROUTES } from "../../router/routes";



export const NavigateMenu = (mode, selectedKeys) => {

        const isAuth = false;
        const router = useHistory();
        
        if  (isAuth){
                return (
                
                        <Menu theme="dark" mode={mode} selectable={false} defaultSelectedKeys={[selectedKeys]}>
                                
                                <Menu.Item key="1" icon={<HomeOutlined />} onClick={() => router.push(ROUTES.HOME)} >
                                Home
                                </Menu.Item>
                                <Menu.Item key="3" icon={<FileAddOutlined />} onClick={() => router.push(ROUTES.CONSTRUCTOR)}>
                                Constructor
                                </Menu.Item>
                                <Menu.Item key="4" icon={<InfoCircleOutlined />} onClick={() => router.push(ROUTES.ABOUT)}>
                                About
                                </Menu.Item>
                        </Menu>
                );  
                
        }
        return (
                <Menu theme="dark" mode={mode} selectable={false} defaultSelectedKeys={[selectedKeys]}>
                        
                        <Menu.Item key="1" icon={<HomeOutlined />} onClick={() => router.push(ROUTES.HOME)} >
                        Home
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UserOutlined />} onClick={() => router.push(ROUTES.AUTH)}>
                        Auth
                        </Menu.Item>
                        <Menu.Item key="4" icon={<InfoCircleOutlined />} onClick={() => router.push(ROUTES.ABOUT)}>
                        About
                        </Menu.Item>
                </Menu>
        ); 
        
        
    
  
}