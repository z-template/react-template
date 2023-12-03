import React from 'react'
interface NestedProps {
  name?: string
  children: React.ReactNode
}
const Nested: React.FC<NestedProps> = props => {
  const { children, name = 'CHILDREN' } = props
  return (
    <div className="relative p-8 border border-gray-300 border-dashed rounded-lg">
      <div className="absolute px-2 py-1 bg-gray-100 rounded-md -top-3">{name}</div>
      {children}
    </div>
  )
}
export default Nested
