import request from '@/utils/request'

interface IResult {
  code: number
  [props: string]: any
}

// 登录方法
export function login(data: {
  username: string
  password: string
  code: string
  uuid: string
}): Promise<IResult> {
  return request.post('/login', data)
}

// 注册方法
export function register(data: any) {
  return request.post('/register', data)
}

// 获取用户详细信息
export function getUserInfo(): Promise<IResult> {
  return request.get('/getInfo')
}

// 获取用户菜单
export function getUserMenu(): Promise<IResult> {
  return request.get('/getRouters')
}

// 退出方法
export function logout() {
  return request.post('/logout')
}

// 获取验证码
export function getCodeImg(): any {
  return request.get('/captchaImage', {
    headers: {
      authorization: null
    }
  })
}
