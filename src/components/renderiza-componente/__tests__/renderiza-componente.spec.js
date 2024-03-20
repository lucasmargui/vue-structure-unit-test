import { mount } from '@vue/test-utils'
import HelloWorld from '../RenderizaComponente.vue'

describe('RenderizaComponente.vue', () => {
  it('renderiza corretamente com a mensagem passada', () => {
    const mensagem = 'Olá Mundo!'
    const wrapper = mount(HelloWorld, {
      propsData: {
        msg: mensagem
      }
    })

    expect(wrapper.text()).toContain(mensagem)
  })

  it('renderiza corretamente sem mensagem', () => {
    const wrapper = mount(HelloWorld)

    expect(wrapper.text()).toContain('') // Como não passamos uma mensagem, esperamos que seja uma string vazia
  })
})
