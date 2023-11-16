import { Link } from 'react-router-dom'
import service from '@/utils/request'
import { useRequest } from 'ahooks'
import { Loading } from '@/components'

function fetchPosts() {
  const param = {
    page: 1,
    limit: 10,
    tab: 'good'
  }
  return service.get('https://cnodejs.org/api/v1/topics', { params: param })
}

interface RecordType {
  title: string
  id: string
}
export default function Posts() {
  const { data, error } = useRequest(
    async () => {
      const res = await fetchPosts()
      return res?.data as RecordType[]
    },
    {
      cacheKey: 'posts'
    }
  )
  if (error) {
    return <div>failed to load</div>
  }
  if (!data) {
    return <Loading />
  }

  return (
    <div>
      <Link to="/posts/1">Post 1</Link>
      {data?.map(item => (
        <Link
          className="block my-2 cursor-pointer text-primary hover:underline"
          key={item.id}
          to={`/posts/${item.id}`}
        >
          {item.title}
        </Link>
      ))}
    </div>
  )
}
