import { mount , shallowMount } from '@vue/test-utils'
import ButtonCounter from '../ManipulacaoEvento.vue'

describe('ButtonCounter', () => {
    it('incrementa o contador ao clicar no botão', async () => {
      const wrapper = mount(ButtonCounter)
      const button = wrapper.find('.increment-button');
  
      // Verifica se o contador começa em 0
      expect(wrapper.vm.counter).toBe(0)
  
      // Simula cliques no botão até atingir o limite máximo
      for (let i = 0; i < wrapper.vm.maxClicks; i++) {
        await button.trigger('click')
        expect(wrapper.vm.counter).toBe(i + 1)
      }
  
      // Verifica se o botão está desabilitado quando o limite máximo é atingido
      expect(button.element.disabled).toBe(true)
  
      // Simula mais um clique no botão após atingir o limite máximo
      await button.trigger('click')
  
      // Verifica se o contador permaneceu no limite máximo
      expect(wrapper.vm.counter).toBe(wrapper.vm.maxClicks)
    })
  
    it('reseta o contador ao clicar no botão "Redefinir"', async () => {
      const wrapper = mount(ButtonCounter)

      

      //wrapper.findAll('button').at(1) // Encontra o segundo botão

      const resetButton = wrapper.find('.reset-button');
  
      // Incrementa o contador
      await wrapper.find('.increment-button').trigger('click')
      await wrapper.find('.increment-button').trigger('click')
  
      // Verifica se o contador não está em 0
      expect(wrapper.vm.counter).toBeGreaterThan(0)
  
      // Simula um clique no botão "Redefinir"
      await resetButton.trigger('click')
  
      // Verifica se o contador foi resetado para 0
      expect(wrapper.vm.counter).toBe(0)
    })


    it('changes text when button is clicked', async () => {

        const wrapper = shallowMount(ButtonCounter); // Monta o componente
        const button = wrapper.find('.change-button'); // Encontra o botão
    
        // Verifica se o texto inicial está correto
        expect(wrapper.find('h1').text()).toBe('Initial Text');
    
        // Simula o clique no botão
        await button.trigger('click');
    
        // Verifica se o texto mudou para "New Text" após o clique no botão
        expect(wrapper.find('h1').text()).toBe('New Text');
      });

  })