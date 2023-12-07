import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { Skeleton } from 'antd'

import { getSubItemsCount } from '@/services/app'

export default function Categories() {
  const { pathname } = useLocation()
  const { subCategories, categories } = useParams() as { categories: string; subCategories: string }
  const { data, run } = useRequest(async () => {
    const res = await getSubItemsCount(categories, subCategories)
    console.log('subCate', res)
    return res.data
  })
  useEffect(() => {
    run()
  }, [pathname])

  console.log('subCategories', subCategories, categories)
  return (
    <div className="p-2">
      <h3>subCategories</h3>
      <p>{subCategories}</p>
      <div className="grid grid-cols-3 gap-5">
        {Array.from({ length: data?.count }).map((_, index) => (
          <Skeleton active key={index} />
        ))}
      </div>
    </div>
  )
}
