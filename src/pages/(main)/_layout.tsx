import { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useMount } from 'ahooks'

import { ErrorBoundary, Loading } from '@/components'
import useAppStore from '@/store/app'
import { getAuthorization } from '@/utils'

export default function Main() {
  const { userInfo, getUserInfo } = useAppStore()
  useMount(() => {
    getAuthorization()
      .then(() => {
        Promise.all([getUserInfo()])
      })
      .catch(() => {
        location.href = '/login'
      })
  })
  if (!userInfo?.nickName) {
    return <Loading />
  }

  return (
    <div>
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
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </div>
      </Suspense>
    </div>
  )
}
