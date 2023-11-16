import { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd'

import { colors } from '@/config/themeColor'
import { ErrorBoundary, Loading } from './components'

import routes from 'virtual:generated-pages-react'
function App() {
  const router = createBrowserRouter(routes)
  return (
    <ErrorBoundary>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: colors.primary,
            colorPrimaryText: colors.primary,
            blue: colors.primary
          }
        }}
      >
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
      </ConfigProvider>
    </ErrorBoundary>
  )
}
export default App
