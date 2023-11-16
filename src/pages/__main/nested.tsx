import { Outlet } from 'react-router-dom'

export default function NestedLayout() {
  return (
    <div>
      嵌套路由111
      <Outlet />
    </div>
  )
}
