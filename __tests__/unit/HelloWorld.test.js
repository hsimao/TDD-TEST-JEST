import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('檢查渲染 props.msg 是的值是否符合 [Mars]', () => {
    const msg = 'Mars'

    // shallowMount 淺渲染，只會渲染組件本身一層，不會渲染其他子組件, 適合單元測試使用
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })

    // 預期結果, HelloWorld 組件渲染出來的文字要有包含 msg 內的文字
    expect(wrapper.props('msg')).toEqual(msg)
  })

  // 使用 toMatchSnapshot 來判斷當前組件是否跟目前快照一樣，來判斷組件渲染
  it('檢查組件是否渲染正常', () => {
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg: 'dell' }
    })

    expect(wrapper).toMatchSnapshot()
  })
})
