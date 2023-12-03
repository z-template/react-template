import { Link } from 'react-router-dom'
export default function NestedIndex() {
  return (
    <div>
      <h1>nested home</h1>
      <Link to="/nested/todo">nested todo</Link>
    </div>
  )
}
