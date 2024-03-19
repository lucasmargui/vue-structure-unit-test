import { mount } from '@vue/test-utils'; // Importando a função mount da biblioteca Vue test utils
import SearchInput from '../SearchInput.vue'; // Importando o componente SearchInput a ser testado

describe('search-input - Unit', () => { // Descrevendo o conjunto de testes para o componente SearchInput
  it('deve ser uma instância Vue', () => { // Caso de teste para verificar se o componente é uma instância Vue
    const wrapper = mount(SearchInput, { // Montando o componente SearchInput
      propsData: {
        value: '' // Definindo os dados iniciais das props
      }
    });

    expect(wrapper.vm).toBeDefined(); // Esperando que a instância Vue esteja definida
  });

  it('deve atualizar searchQuery quando o valor da prop é alterado', async () => { // Caso de teste para verificar se searchQuery é atualizado quando o valor da prop é alterado
    const wrapper = mount(SearchInput, { // Montando o componente SearchInput
      propsData: {
        value: '' // Definindo os dados iniciais das props
      }
    });

    await wrapper.setProps({ value: 'test' }); // Definindo novo valor da prop
    await wrapper.vm.$nextTick(); // Aguardando o Vue atualizar o DOM

    expect(wrapper.vm.searchQuery).toEqual('test'); // Esperando que searchQuery seja atualizado
  });

  it('deve emitir o evento de input quando algo é digitado', async () => { // Caso de teste para verificar se o evento de input é emitido quando algo é digitado
    const wrapper = mount(SearchInput, { // Montando o componente SearchInput
      propsData: {
        value: '' // Definindo os dados iniciais das props
      }
    });

    const inputEl = wrapper.find('input[type="text"]'); // Encontrando o elemento de input
    await inputEl.setValue('test'); // Definindo o valor do elemento de input

    expect(wrapper.emitted().input).toBeTruthy(); // Esperando que o evento de input seja emitido
    expect(wrapper.emitted().input[0]).toEqual(['test']); // Esperando que o valor de input emitido seja 'test'
  });

  it('deve limpar o valor do input quando o ícone X é clicado', async () => { // Caso de teste para verificar se o valor do input é limpo quando o ícone X é clicado
    const wrapper = mount(SearchInput, { // Montando o componente SearchInput
      propsData: {
        value: '' // Definindo os dados iniciais das props
      }
    });

    const clearBtn = wrapper.find('.input__clear'); // Encontrando o elemento do botão de limpar
    await clearBtn.trigger('click'); // Acionando o evento de clique no botão de limpar

    expect(wrapper.emitted().input).toBeTruthy(); // Esperando que o evento de input seja emitido
    expect(wrapper.emitted().input[0]).toEqual(['']); // Esperando que o valor de input emitido seja vazio
  });
});
