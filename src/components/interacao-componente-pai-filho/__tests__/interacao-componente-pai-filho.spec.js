import { mount } from '@vue/test-utils';
import InteracaoComponente from '../InteracaoComponente.vue'
import ChildComponente from '../ChildComponente.vue';

describe('ParentComponent', () => {
    it('renders child component with correct props', async () => {
        const wrapper = mount(InteracaoComponente);
    
        // Verifica se o componente filho está sendo renderizado
        expect(wrapper.findComponent(ChildComponente).exists()).toBe(true);

        await new Promise(resolve => setTimeout(resolve, 1000));
    
        // Verifica se o componente filho recebe a propriedade 'message' corretamente
        expect(wrapper.findComponent(ChildComponente).props('message')).toBe('Hello from parent!');
      });
    


    it('Passa propriedades para o ChildComponent e trata eventos dele', async () => {
        const wrapper = mount(InteracaoComponente);
    const childWrapper = wrapper.findComponent(ChildComponente);

    // Verifica se a propriedade "message" é passada corretamente para o componente filho
    expect(childWrapper.props('message')).toBe('Hello from parent!');

    // Simula um evento do componente filho
    await childWrapper.find('button').trigger('click');

    // Aguarda um pequeno atraso para garantir que as atualizações sejam processadas
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Verifica se o evento foi emitido pelo componente filho
    expect(childWrapper.emitted('child-event')).toBeTruthy();

    // Verifica se o evento emitido contém a mensagem correta
    expect(childWrapper.emitted('child-event')[0][0]).toBe('Message from child!');
      });
});
