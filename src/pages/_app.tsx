import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Modals } from '@generouted/react-router'

export default function App() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Outlet />
      <Modals />
    </Suspense>
  )
}
