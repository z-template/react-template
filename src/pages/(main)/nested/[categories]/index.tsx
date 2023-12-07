import { useLocation, useParams } from 'react-router-dom'

export default function Categories() {
  const { state } = useLocation()
  const { categories } = useParams()
  console.log(state, categories)
  return (
    <div className="p-2">
      <h3>Categories1111</h3>
      <p>{categories}</p>
    </div>
  )
}
