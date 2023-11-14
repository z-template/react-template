import { Suspense } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import routes from 'virtual:generated-pages-react'

import './App.css'

function App() {
  const router = createHashRouter(routes)
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
export default App
