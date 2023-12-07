import { Card } from 'antd'

import { SvgIcon } from '@/components'

export default function App() {
  return (
    <>
      <div className="mb-6 space-x-8">
        <SvgIcon size={100} type="vite" />
        <SvgIcon fill="fill-[#087ea4]" size={100} type="react" />
        <SvgIcon size={100} type="antd" />
      </div>
      <Card title="基于Vite + React构建">
        <ul className="text-base list-disc list-inside">
          <li>antd + zustand + ahooks</li>
          <li>vite-plugin-pages文件式路由（推荐 remix 路由风格）</li>
          <li>eslint + prettier + commitLint(eslint扁平化配置更合理)</li>
          <li>
            封装SvgIcon 组件<code>&lt;SvgIcon type=&apos;xxx&apos; /&gt;</code>
          </li>
          <li>ErrorBoundary + Loading 统一封装</li>
        </ul>
      </Card>
    </>
  )
}
