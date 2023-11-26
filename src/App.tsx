import { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd'

import { antConfig } from '@/config/ant-config'
import { ErrorBoundary, Loading } from './components'

import routes from 'virtual:generated-pages-react'
function App() {
  const router = createBrowserRouter(routes)
  return (
    <ErrorBoundary>
      <ConfigProvider theme={antConfig}>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
      </ConfigProvider>
    </ErrorBoundary>
  )
}
export default App
