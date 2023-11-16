import { Link } from 'react-router-dom'

export default function NestedIndex() {
  return (
    <div>
      <h1>nested home</h1>
      <Link to="/nested">nested home</Link>
      <Link to="/nested/detail/1">nested detail 1</Link>
    </div>
  )
}
