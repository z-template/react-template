import { useParams } from 'react-router-dom'

export default function NestedLayout() {
  const { id } = useParams()
  return <div>nested detail id --- {id}</div>
}
