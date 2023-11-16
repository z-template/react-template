import type { AxiosError, AxiosResponse } from 'axios'
import axios from 'axios'
import { notification } from 'antd'

const service = axios.create({
  timeout: 20000
})

// 请求拦截器
service.interceptors.request.use(
  (config: any) => {
    return config
  },
  (error: AxiosError) => Promise.resolve(error || '服务器异常')
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  (error: AxiosError) => {
    const { response } = error
    console.log('response', response, error)
    if (response?.status) {
      // const { status } = response
      // const errorText = codeMessage[status] || statusText;
      const errorText = '接口请求出错'

      notification.destroy()
      notification.error({
        message: '请求错误',
        description: errorText
      })
    } else {
      notification.destroy()
      notification.error({
        message: '请求错误',
        description: '接口请求失败'
      })
    }
    return Promise.reject(error)
  }
)

export default service
