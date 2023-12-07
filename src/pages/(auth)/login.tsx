import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { LockOutlined, SafetyCertificateOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import Cookies from 'js-cookie'

import IMG from '@/assets/images/code.png'
import { TOKEN_KEY } from '@/config'

export default function Login() {
  const navigate = useNavigate()
  const [loading] = useState(false)
  const [form] = Form.useForm()
  function getUuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }
  function submit() {
    Cookies.set(TOKEN_KEY, getUuid())
    navigate('/')
  }
  return (
    <div className="mx-auto rounded-md max-w-320px ">
      <div className="mb-10 text-center">
        <h2 className="my-2 text-xl">Welcome to Z-Template</h2>
      </div>
      <Form
        autoComplete="off"
        form={form}
        initialValues={{ username: 'admin', password: 'admin123' }}
        onFinish={submit}
        requiredMark={false}
        size="large"
      >
        <Form.Item name="username" rules={[{ required: true, message: '请输入您的账号' }]}>
          <Input placeholder="admin" prefix={<UserOutlined className="text-dark/40" />} />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '请输入您的密码' }]}>
          <Input.Password
            placeholder="admin123"
            prefix={<LockOutlined className="text-dark/40" />}
          />
        </Form.Item>
        <Form.Item>
          <div className="flex items-center space-x-4">
            <Form.Item name="code" noStyle rules={[{ required: true, message: '请输入验证码' }]}>
              <Input
                className="!flex-1"
                placeholder="验证码"
                prefix={<SafetyCertificateOutlined className="text-dark/40" />}
              />
            </Form.Item>
            <Form.Item noStyle>
              <img alt="code" className="w-[106px]" height={40} src={IMG} />
            </Form.Item>
          </div>
        </Form.Item>
        <Form.Item>
          <Button block htmlType="submit" loading={loading} type="primary">
            登录
          </Button>
        </Form.Item>
      </Form>
      <div className="text-sm text-right text-color/60">
        <Link to="/register">没有帐号，去注册？</Link>
      </div>
    </div>
  )
}
