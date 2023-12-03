import { Outlet } from 'react-router-dom'

import Nested from '@/components/Nested'
export default function NestedLayout() {
  return (
    <Nested>
      <Outlet />
    </Nested>
  )
}
