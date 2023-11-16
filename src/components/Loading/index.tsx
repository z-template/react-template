import { useEffect } from 'react'
import { Spin } from 'antd'
import nprogress from 'nprogress'

import 'nprogress/nprogress.css'

export default function Loading() {
  useEffect(() => {
    nprogress.start()
    return () => {
      nprogress.done()
    }
  })

  return (
    <div className="py-5 text-center">
      <Spin />
    </div>
  )
}
