import { Outlet } from 'react-router-dom'
import { ErrorBoundary } from '@/components'

export default function Main() {
  return (
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
  )
}
