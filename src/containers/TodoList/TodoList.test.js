import { shallowMount } from '@vue/test-utils'
import TodoList from './index'
import Header from '@/components/Header'

it('TodoList 初始化時, todos 值應該為空陣列', () => {
  shallowMount(TodoList)
  const wrapper = shallowMount(TodoList)
  const todos = wrapper.vm.$data.todos

  expect(todos).toEqual([])
})

it('TodoList 監聽到子層 add 事件時, todos 會增加一個內容', () => {
  shallowMount(TodoList)
  const wrapper = shallowMount(TodoList)
  const header = wrapper.find(Header)

  // 模擬子組件 Header 觸發 add 事件
  header.vm.$emit('add', 'add Message')
  const todos = wrapper.vm.$data.todos

  expect(todos).toEqual(['add Message'])
})
