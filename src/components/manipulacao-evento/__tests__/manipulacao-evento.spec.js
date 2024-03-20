import { mount } from '@vue/test-utils'
import ButtonCounter from '../ManipulacaoEvento.vue'

describe('ManipulacaoEvento', () => {
  it('incrementa o contador ao clicar no botão', async () => {
    const wrapper = mount(ButtonCounter)
    const button = wrapper.find('button')

    // Verifica se o contador começa em 0
    expect(wrapper.vm.counter).toBe(0)

    // Simula um clique no botão
    await button.trigger('click')

    // Verifica se o contador foi incrementado
    expect(wrapper.vm.counter).toBe(1)

    // Simula mais um clique no botão
    await button.trigger('click')

    // Verifica se o contador foi incrementado novamente
    expect(wrapper.vm.counter).toBe(2)
  })
})
