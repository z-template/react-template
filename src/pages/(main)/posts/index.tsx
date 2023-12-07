import { Link } from 'react-router-dom'
import { useAntdTable } from 'ahooks'
import { Form, Table, Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'

import { Loading, SearchForm, SearchOption } from '@/components'
import service from '@/utils/request'

function fetchPosts(param: any) {
  return service.get('https://cnodejs.org/api/v1/topics', { params: param })
}

interface RecordType {
  title: string
  id: string
}

const getTableData = ({ current, pageSize }: any, formData: any) => {
  const queryParam = {
    page: current,
    limit: pageSize,
    ...formData
  }
  return fetchPosts(queryParam).then(res => ({
    total: 50,
    list: res.data
  }))
}
const tags = [
  { value: 'share', label: '分享' },
  { value: 'ask', label: '问答' },
  { value: 'job', label: '招聘' },
  { value: 'good', label: '精华' }
]
export default function Posts() {
  const [form] = Form.useForm()
  const { tableProps, error, search } = useAntdTable(getTableData, {
    form,
    cacheKey: 'posts',
    cacheTime: -1
  })
  const { submit } = search
  if (error) {
    return <div>failed to load</div>
  }
  if (!tableProps.dataSource) {
    return <Loading />
  }
  const options: SearchOption[] = [
    { label: '分类', name: 'tab', itemType: 'select', options: tags },
    { label: '标题', name: 'title', itemType: 'input' }
  ]
  const columns: ColumnsType<RecordType> = [
    {
      title: '标题',
      dataIndex: 'title',
      render: (text: string, record) => (
        <Link className="text-primary" to={`/posts/${record.id}`}>
          {text}
        </Link>
      )
    },
    {
      title: '分类',
      dataIndex: 'tab',
      render: (text: string) => <Tag color="#87d068">{text}</Tag>
    },
    { title: '评论', dataIndex: 'reply_count' },
    { title: '阅读量', dataIndex: 'visit_count' }
  ]
  return (
    <div>
      <SearchForm form={form} initialValues={{ tab: 'good' }} onChange={submit} options={options} />
      <Table<RecordType> columns={columns} rowKey="id" {...tableProps} />
    </div>
  )
}
