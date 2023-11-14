export default function App() {
  const a = 12
  function add(a: number, b: number) {
    return a + b
  }
  return (
    <div>
      about <div>--{a}</div>
      <div>{add(2, 5)}</div>
    </div>
  )
}
