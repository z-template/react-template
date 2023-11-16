import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined, SafetyCertificateOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useRequest } from 'ahooks'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { getCodeImg, login } from '@/services/user'
import { TOKEN_KEY } from '@/config'
import { Link } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const { data: captcha, refresh: refreshImg } = useRequest(async () => {
    const res = await getCodeImg()
    if (res.code === 200) {
      res.avatar = `data:image/gif;base64,${res.img}`
    }
    return res
  })

  function submit(v: any) {
    const params = {
      ...v,
      uuid: captcha.uuid
    }
    setLoading(true)
    login(params)
      .then(res => {
        if (res.code === 200) {
          Cookies.set(TOKEN_KEY, res.token)
          // setTimeout(() => {
          navigate('/')
          // }, 200)
        }
      })
      .catch(() => {
        console.log('11')
        refreshImg()
        setLoading(false)
        form.setFieldsValue({ code: undefined })
      })
  }
  return (
    <div className="mx-auto rounded-md max-w-320px ">
      <div className="mb-10 text-center">
        <h2 className="my-2 text-xl">Welcome to X-Template</h2>
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
              <img
                alt="code"
                className="w-[106px]"
                height={40}
                onClick={refreshImg}
                src={captcha?.avatar}
              />
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
