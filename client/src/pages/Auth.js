import React, { useContext } from "react";
import { useLocation } from "react-router";
import { Layout, Breadcrumb, Row, Form, Input, Button, Checkbox } from "antd";
import { NavigateMenu } from "./modules/Navbar";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";
import { MailOutlined, UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import { ROUTES } from "../router/routes";
// import { LoginForm } from "./modules/forms/LoginForm";
// import { SignupForm } from "./modules/forms/SignupForm";

const { Header, Content, Footer } = Layout;

/**
 * Login form component
 */
const LoginForm = () => {
  const { loading, request } = useHttp();
  const auth = useContext(AuthContext);

  const loginHandler = async (values) => {
    try {
      const data = await request("/api/auth/login", "POST", {
        email: values.email,
        password: values.password,
      });
      auth.login(data.token, data.userId);
    } catch (e) {}
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={loginHandler}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          }
        ]}
      >
        <Input
          size="large"
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          }
        ]}
      >
        <Input.Password
          size="large"
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href={ROUTES.AUTH_SIGNUP}>
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button
          loading={loading}
          disabled={loading}
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Log in
        </Button>
        &nbsp; Or <a href={ROUTES.AUTH_SIGNUP}>register now!</a>
      </Form.Item>
    </Form>
  );
};
/**
 * Signup form component
 */
const SignupForm = () => {
  const { loading, request } = useHttp();
  const auth = useContext(AuthContext);

  const signupHandler = async (values) => {
    try {
      const data = await request("/api/auth/signup", "POST", {
        username: values.username,
        email: values.email,
        password: values.password,
      });
      auth.login(data.token, data.userId);
    } catch (e) {}
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={signupHandler}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          size="large"
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input
          size="large"
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input.Password
          size="large"
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button
          loading={loading}
          disabled={loading}
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Sign up
        </Button>
        &nbsp; Or <a href={ROUTES.AUTH_LOGIN}>login now!</a>
      </Form.Item>
    </Form>
  );
};

export const Auth = () => {
  const authState = useLocation().pathname.split("/")[2];

  const menu = NavigateMenu("horizontal", "2");
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
              {authState === "login" ? 
                  <LoginForm />
                  :
                  <SignupForm />
              }
            </Row>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
};
