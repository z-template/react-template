import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Modals } from '@generouted/react-router'
import { ConfigProvider } from 'antd'

import { ErrorBoundary } from '@/components'
import { antConfig } from '@/config/ant-config'

export default function App() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <ConfigProvider theme={antConfig}>
        <ErrorBoundary>
          <Outlet />
          <Modals />
        </ErrorBoundary>
      </ConfigProvider>
    </Suspense>
  )
}
