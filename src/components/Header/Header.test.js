import { shallowMount } from '@vue/test-utils'
import Header from './index.vue'
import { findTestWrapper } from '@/utils/testUtils'

it('Header 組件需要有 input 輸入欄位', () => {
  const wrapper = shallowMount(Header)
  const input = findTestWrapper(wrapper, 'input')

  expect(input.exists()).toBe(true)
})

it('input 初始值為空', () => {
  const wrapper = shallowMount(Header)
  const inputValue = wrapper.vm.$data.inputValue

  expect(inputValue).toBe('')
})

it('input 欄位發生變化時，inputValue 數據需要對應更新', () => {
  const wrapper = shallowMount(Header)
  const input = findTestWrapper(wrapper, 'input')
  input.setValue('Mars')
  const inputValue = wrapper.vm.$data.inputValue

  expect(inputValue).toBe('Mars')
})

it('input 欄位輸入 enter, 若為空值則不可以送出', () => {
  const wrapper = shallowMount(Header)
  const input = findTestWrapper(wrapper, 'input')

  // 模擬輸入空值，在觸發 enter 事件，來判斷是否有送出 $emit add 事件
  input.setValue('')
  input.trigger('keyup.enter')

  expect(wrapper.emitted().add).toBeFalsy() // toBeFalsy 沒有觸發
})

it('input 欄位輸入 enter, 若為有值時需要送出 add 事件, 同時清空 inputValue 值', () => {
  const wrapper = shallowMount(Header)
  const input = findTestWrapper(wrapper, 'input')

  // 模擬輸入空值，在觸發 enter 事件
  input.setValue('Mars')
  input.trigger('keyup.enter')

  expect(wrapper.emitted().add).toBeTruthy() // toBeTruthy 有觸發
  expect(wrapper.vm.$data.inputValue).toBe('')
})

// 樣式修改提示
it('Header DOM 節點快照發生改變, 請確認', () => {
  const wrapper = shallowMount(Header)
  expect(wrapper).toMatchSnapshot()
})
