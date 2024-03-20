import { mount } from '@vue/test-utils'
import HelloWorld from '../RenderizaComponente.vue'

describe('HelloWorld.vue', () => {
    it('renderiza corretamente com a mensagem passada e descrição', () => {
      const mensagem = 'Olá Mundo!'
      const descricao = 'Este é um exemplo de teste unitário em Vue'
      const wrapper = mount(HelloWorld, {
        propsData: {
          msg: mensagem,
          description: descricao
        }
      })
  
      expect(wrapper.text()).toContain(mensagem)
      expect(wrapper.text()).toContain(descricao)
    })

    it('renderiza corretamente sem mensagem e com estilo padrão', () => {
        const wrapper = mount(HelloWorld)
    
        expect(wrapper.text()).toContain('')
        expect(wrapper.find('h1').classes()).toContain('text-2xl') // Verifica se a classe text-2xl está presente no elemento h1
      })
      
  })