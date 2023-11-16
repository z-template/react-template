import { Outlet } from 'react-router-dom'
import WEL_COME from '@/assets/images/welcome.png'
import { ConfigProvider } from 'antd'
import { Suspense } from 'react'
import { Loading } from '@/components'
export default function AuthLayout() {
  return (
    <div className="flex p-0 h-[100vh]">
      <div className="hidden md:flex m-5 items-center justify-between w-[38.2%] text-white p-5 bg-primary rounded">
        <div className="text-center">
          <img alt="welcome" className="max-w-[80%]" src={WEL_COME} />
          <h1 className="pt-10 text-3xl text-30px">X-Template</h1>
          <div className="flex-1 mt-10">
            <h2 className="text-36px">基于SpringBoot的权限管理系统 易读易懂、界面简洁美观</h2>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center -mt-10%">
        <ConfigProvider theme={{ token: { borderRadius: 0 } }}>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </ConfigProvider>
      </div>
    </div>
  )
}
