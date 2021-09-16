import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useHttp } from "../../../hooks/http.hook";
import { Form, Input, Button, Checkbox } from "antd";
import { MailOutlined, UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import { ROUTES } from "../../../router/routes";

export const SignupForm = () => {
  const { loading, request } = useHttp();
  const auth = useContext(AuthContext);

  const signupHandler = async values => {
    try {
      const data = await request("/api/auth/signup", "POST", {
        username: values.username,
        email: values.email,
        password: values.password
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
