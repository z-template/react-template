interface IResult {
  code: number
  [props: string]: any
}
const categories = [
  { label: 'Home', key: '', count: 11 },
  {
    label: 'Electronics',
    key: 'electronics',
    count: 11,
    items: [
      { label: 'All', key: 'all', count: 11 },
      { label: 'Phones', key: 'phones', count: 4 },
      { label: 'Tablets', key: 'tablets', count: 5 },
      { label: 'Laptops', key: 'laptops', count: 2 }
    ]
  },
  {
    label: 'Clothing',
    key: 'clothing',
    count: 12,
    items: [
      { label: 'All', key: 'all', count: 12 },
      { label: 'Tops', key: 'tops', count: 3 },
      { label: 'Shorts', key: 'shorts', count: 4 },
      { label: 'Shoes', key: 'shoes', count: 5 }
    ]
  },
  {
    label: 'Books',
    key: 'books',
    count: 10,
    items: [
      { label: 'All', key: 'all', count: 14 },
      { label: 'Fiction', key: 'fiction', count: 5 },
      { label: 'Biography', key: 'biography', count: 6 },
      { label: 'Education', key: 'education', count: 3 }
    ]
  }
]
// 获取分类
export function getCategories(): Promise<IResult> {
  // return request.post('/get-categories')
  return new Promise(resolve => {
    console.log('getCategories')
    resolve({
      code: 200,
      data: categories
    })
  })
}
// 获取子级分类
export function getSubCategories(key: string): Promise<IResult> {
  // return request.post('/get-categories')
  return new Promise(resolve => {
    console.log('getSubCategories')
    const child = categories.find(item => item.key === key)
    resolve({
      code: 200,
      data: child?.items
    })
  })
}
// 获取子级分类
export function getSubItemsCount(key: string, subKey: string): Promise<IResult> {
  // return request.post('/get-categories')
  return new Promise(resolve => {
    const child = categories.find(item => item.key === key)
    const sub = child?.items.find(item => item.key === subKey)
    if (!subKey) {
      resolve({
        code: 404,
        msg: child?.items?.[0]
      })
    }
    resolve({
      code: 200,
      data: sub
    })
  })
}
