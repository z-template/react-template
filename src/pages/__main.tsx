import { Outlet } from 'react-router-dom'
import { ErrorBoundary, Loading } from '@/components'
import { NavLink } from 'react-router-dom'
import { Suspense } from 'react'

export default function Main() {
  return (
    <ErrorBoundary>
      <div className="px-8 py-3 border-b">
        <nav className="space-x-5 text-lg">
          <NavLink className={({ isActive }) => (isActive ? 'text-primary' : '')} to="/">
            Home
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'text-primary' : '')} to="/posts">
            Posts
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'text-primary' : '')}
            to="/about"
            unstable_viewTransition
          >
            About
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'text-primary' : '')} to="/nested">
            Nested
          </NavLink>
        </nav>
      </div>
      <Suspense fallback={<Loading />}>
        <div className="p-5">
          <Outlet />
        </div>
      </Suspense>
    </ErrorBoundary>
  )
}
