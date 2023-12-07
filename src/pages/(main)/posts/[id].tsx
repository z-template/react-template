import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useRequest } from 'ahooks'

import { Loading } from '@/components'
import service from '@/utils/request'

function fetchPosts(id: string) {
  return service.get('https://cnodejs.org/api/v1/topic/' + id)
}
interface RecordType {
  title: string
  id: string
  content: string
}
export default function Post() {
  const { id } = useParams() as { id: string }
  const navigate = useNavigate()
  const { data, error } = useRequest(async () => {
    const res = await fetchPosts(id)
    return res?.data as RecordType
  })
  if (error) {
    return <div>failed to load</div>
  }
  if (!data) {
    return <Loading />
  }
  return (
    <div>
      <div className="flex py-4 text-lg border-b">
        <div className="cursor-pointer" onClick={() => navigate(-1)}>
          <ArrowLeftOutlined />
          返回
        </div>
      </div>
      <h2 className="pt-8 text-xl text-center font-500">{data?.title}</h2>
      <div className="pt-5 mt-4" dangerouslySetInnerHTML={{ __html: data?.content }} />
    </div>
  )
}
