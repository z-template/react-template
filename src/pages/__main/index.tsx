import { useState } from 'react'
import { Link } from 'react-router-dom'
import reactLogo from '@/assets/react.svg'
import { SvgIcon } from '@/components'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a href="https://react.dev" rel="noreferrer" target="_blank">
          <img alt="React logo" className="logo react" src={reactLogo} />
          <SvgIcon fill="fill-red-500" size={100} type="react" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)} type="button">
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <Link to="/about">About</Link>
      <h1>asd</h1>
      <h2>asd</h2>
      <h3>123</h3>
      <h4>232</h4>
      <h5>4124</h5>
    </>
  )
}
