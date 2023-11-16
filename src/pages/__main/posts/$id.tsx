import { useParams } from 'react-router-dom'
import service from '@/utils/request'
import { useRequest } from 'ahooks'
import { Loading } from '@/components'

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

  const { data } = useRequest(async () => {
    const res = await fetchPosts(id)
    return res?.data as RecordType
  })

  if (!data) {
    return <Loading />
  }
  return (
    <div>
      <h2 className="text-xl font-500">{data?.title}</h2>
      <div className="pt-5 mt-4 border-t" dangerouslySetInnerHTML={{ __html: data?.content }} />
    </div>
  )
}
