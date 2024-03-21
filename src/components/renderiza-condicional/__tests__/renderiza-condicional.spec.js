import { mount } from '@vue/test-utils';
import CondicionalComponente from '../CondicionalComponente.vue';

//Const wrapper foi montado fora de cada para que cada teste que utilize o componente na memória virtual seja uma simulação de 2 cliques
const wrapper = mount(CondicionalComponente);

describe('MeuComponente', () => {
    it('renderiza a mensagem quando mostrarMensagem é verdadeiro', async () => {
        // Verifica se a mensagem não está sendo renderizada inicialmente
        expect(wrapper.find('p').exists()).toBe(false);
        // Simula um clique no botão para mostrar a mensagem
        await wrapper.find('button').trigger('click');
        // Verifica se a mensagem foi renderizada após o clique no botão
        expect(wrapper.find('p').exists()).toBe(true);
        // Verifica se a mensagem renderizada é a mensagem esperada
        expect(wrapper.find('p').text()).toBe('Olá, mundo!');
    });

    it('não renderiza a mensagem quando mostrarMensagem é falso', async () => {
        // Simula um clique no botão para ocultar a mensagem
        await wrapper.find('button').trigger('click');
        // Verifica se a variável mostrarMensagem possui valor false
        expect(wrapper.vm.mostrarMensagem).toBe(false);
        // Verifica se a mensagem não foi renderizada após o clique no botão
        expect(wrapper.find('p').exists()).toBe(false);
    });
});
