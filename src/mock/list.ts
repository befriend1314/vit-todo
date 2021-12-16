import Mock from 'mockjs'

type Item = {
  text: string,
  checked: boolean,
  isDelete: boolean
}

type List = {
  id: string,
  title: string,
  isDelete: boolean,
  isLock: boolean,
  item: Item[]
}

const todoList: List[] = []
const COUNT = [1, 2, 3, 4, 5]
for (let i = 0; i < COUNT.length; i++) {
  todoList.push(Mock.mock({
    id: Mock.Random.guid(),
    title: Mock.Random.first(),
    isDelete: false,
    isLock: Mock.Random.boolean(),
    item: COUNT.map(() => {
      return {
        text: Mock.Random.cparagraph(2),
        checked: Mock.Random.boolean(),
        isDelete: false
      }
    })
  }))
}

export { todoList }