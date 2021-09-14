import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHttp } from "../../hooks/http.hook";
import { Form, Input, Button, Checkbox } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

export const AuthForm = () => {
  
  
  const {loading, request} = useHttp();
  const auth = useContext(AuthContext)


  // const registerHandler = async (valuse) => {
  //   try {
  //     const data = await request('/api/auth/signup', 'POST')
  //   } catch (e) {}
  // }
  const loginHandler = async (values) => {
    try {
      
      const data = await request('/api/auth/login', 'POST', {email: values.email, password: values.password})
      console.log(auth)
      
      auth.login(data.token, data.userId);
    } catch (e) {}
  }
  

  return (
    <Form name="normal_login" className="login-form"
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
            message: 'Please input your email!',
          },
        ]}
      >
        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="/auth">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button loading={loading} disabled={loading} type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        &nbsp; Or <a href="/auth">register now!</a>
      </Form.Item>
    </Form>
  );
};