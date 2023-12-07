import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { Tabs } from 'antd'

import Nested from '@/components/Nested'
import { getCategories } from '@/services/app'
export default function NestedLayout() {
  const navigate = useNavigate()
  const { data } = useRequest(getCategories)
  const { categories } = useParams() as { categories: string }
  function handlerTab(key: string) {
    navigate('/nested/' + key)
  }
  return (
    <Nested>
      <Tabs activeKey={categories} items={data?.data} onTabClick={handlerTab} />
      <Outlet />
    </Nested>
  )
}
