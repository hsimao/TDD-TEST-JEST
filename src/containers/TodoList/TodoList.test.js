import { shallowMount } from '@vue/test-utils'
import TodoList from './index'
import Content from './components/Content'

it('TodoList 初始化時, todos 值應該為空陣列', () => {
  shallowMount(TodoList)
  const wrapper = shallowMount(TodoList)
  const todos = wrapper.vm.$data.todos

  expect(todos).toEqual([])
})

// 不單純只測試自己本身組件, 有跨到其他組件, 算是集成測試, 不算單元測試
// it('TodoList 監聽到子層 add 事件時, todos 會增加一個內容', () => {
//   shallowMount(TodoList)
//   const wrapper = shallowMount(TodoList)
//   const header = wrapper.find(Header)

//   // 模擬子組件 Header 觸發 add 事件
//   header.vm.$emit('add', 'add Message')
//   const todos = wrapper.vm.$data.todos

//   expect(todos).toEqual(['add Message'])
// })

// 單純單元測試
it('TodoList 執行 handleAddTodo 事件時, todos 會增加一個內容', () => {
  shallowMount(TodoList)
  const wrapper = shallowMount(TodoList)
  wrapper.setData({ todos: [1, 2, 3] })
  wrapper.vm.handleAddTodo(4)

  expect(wrapper.vm.$data.todos).toEqual([1, 2, 3, 4])
})

it('TodoList 需要引入 Content 組件, 並傳遞 items 參數', () => {
  const wrapper = shallowMount(TodoList)
  const content = wrapper.find(Content)
  const items = content.props('items')

  expect(items).toBeTruthy()
})

it('TodoList 中的 handleDelete 方法被調用時, Content 組件 items 內容會減 1', () => {
  const wrapper = shallowMount(TodoList)
  wrapper.setData({ todos: [1, 2, 3] })
  wrapper.vm.handleDelete(1)
  expect(wrapper.vm.$data.todos).toEqual([1, 3])
})
