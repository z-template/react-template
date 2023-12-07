import { Link } from 'react-router-dom'

import Nested from '@/components/Nested'
export default function NestedIndex() {
  return (
    <Nested>
      <h1>nested home</h1>
      <Link to="/nested/todo">nested todo</Link>
    </Nested>
  )
}
