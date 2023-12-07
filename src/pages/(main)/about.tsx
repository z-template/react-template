import { useLoaderData } from 'react-router-dom'

interface LoaderData {
  id: string
  name: string
}
export const Loader = () => {
  return {
    id: '1',
    name: 'About Page'
  }
}
export default function About() {
  const data = useLoaderData() as LoaderData
  console.log('data', data)
  return (
    <div>
      <h1>{data?.name}</h1>
    </div>
  )
}
