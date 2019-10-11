import { shallowMount } from '@vue/test-utils'
import Content from './index.vue'
import { findTestWrapper } from '@/utils/testUtils'

it('Content 列表無內容預設無內容, items 為空陣列 [], count值為 0', () => {
  const wrapper = shallowMount(Content, {
    propsData: { items: [] }
  })

  const countEl = findTestWrapper(wrapper, 'count')
  const itemsEl = findTestWrapper(wrapper, 'item')

  expect(countEl.at(0).text()).toEqual('0')
  expect(itemsEl.length).toEqual(0)
})

it('Content items 參數為 [1, 2, 3] 時, count 值應該為 3, 且列表有內容, 且存在刪除按鈕', () => {
  const items = [1, 2, 3]
  const wrapper = shallowMount(Content, {
    propsData: { items }
  })

  const countEl = findTestWrapper(wrapper, 'count')
  const itemsEl = findTestWrapper(wrapper, 'item')
  const deleteBtns = findTestWrapper(wrapper, 'delete-button')

  expect(countEl.at(0).text()).toEqual('3')
  expect(itemsEl.length).toEqual(items.length)
  expect(deleteBtns.length).toEqual(items.length)
})

it('Content 點擊刪除按鈕時，向外觸發刪除事件', () => {
  const items = [1, 2, 3]
  const wrapper = shallowMount(Content, {
    propsData: { items }
  })

  const deleteBtn = findTestWrapper(wrapper, 'delete-button').at(1)

  // 模擬點擊事件，並判斷是否有向外觸發 delete 事件
  deleteBtn.trigger('click')
  expect(wrapper.emitted().delete).toBeTruthy()
  // 判斷點擊第一個按鈕按鈕時，傳入的 index 參數是否為 1
  expect(wrapper.emitted().delete[0][0]).toBe(1)
})
