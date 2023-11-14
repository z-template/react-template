import React from 'react'
import Catch from './boundary'

type Props = {
  children: React.ReactNode
}

const ErrorBoundary = Catch((props: Props, error?: Error) => {
  const { children } = props
  if (error) {
    return (
      <div className="p-8">
        <h2>页面出错误了</h2>
        <div className="mt-2">
          <a
            className="text-primary hover:!underline "
            onClick={() => window.location.replace(document.referrer)}
          >
            返回上一页
          </a>
        </div>
        <div className="bg-red-100 m-5 text-center  p-2 rounded">
          <p>{error.message}</p>
        </div>
      </div>
    )
  }
  return children
})

export default ErrorBoundary
