
import Mock from 'mockjs'
// 内存模拟数据
const arr = []
for (let i = 0; i < 10; i++) {
  arr.push({
    id: Mock.mock('@guid'),
    name: Mock.mock('@cname'),
    place: Mock.mock('@county(true)'),
  })
}
export default [
  {
    url: '/list',
    method: 'get',
    response: () => {
      return arr
    }
  },
  {
    url: '/del',
    method: 'delete',
    response: ({query}) => {
      const index = arr.findIndex((item) => item.id === query.id)
      arr.splice(index, 1)
      return { success: true }
    }
  }
]
