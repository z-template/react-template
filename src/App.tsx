import { Suspense } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { ErrorBoundary } from './components'

import routes from 'virtual:generated-pages-react'

function App() {
  const router = createHashRouter(routes)
  return (
    <ErrorBoundary>
      <Suspense fallback={<p>Loading...</p>}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  )
}
export default App
