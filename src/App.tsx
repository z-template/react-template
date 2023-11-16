import { Suspense } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { colors } from '@/config/themeColor'
import { ErrorBoundary, Loading } from './components'

import routes from 'virtual:generated-pages-react'
function App() {
  const router = createHashRouter(routes)
  return (
    <ErrorBoundary>
      <ConfigProvider theme={{ token: { colorPrimary: colors.primary } }}>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
      </ConfigProvider>
    </ErrorBoundary>
  )
}
export default App
