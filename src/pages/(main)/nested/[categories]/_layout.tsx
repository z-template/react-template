import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { Tabs } from 'antd'

import Nested from '@/components/Nested'
import { getSubCategories } from '@/services/app'

export default function Categories() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { categories, subCategories } = useParams() as { categories: string; subCategories: string }
  const { data, run } = useRequest(async () => {
    const res = await getSubCategories(categories)
    console.log('res', res)
    return res.data
  })
  useEffect(() => {
    run()
  }, [pathname])
  console.log('subItems', subCategories)
  function handlerTab(key: string) {
    console.log(key)
    if (key === 'all') {
      navigate('/nested/' + categories)
    } else {
      navigate('/nested/' + categories + '/' + key)
    }
  }
  return (
    <Nested>
      <Tabs activeKey={subCategories || 'all'} items={data} onTabClick={handlerTab} />
      <Outlet />
    </Nested>
  )
}
