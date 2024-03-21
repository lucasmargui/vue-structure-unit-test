import { mount } from '@vue/test-utils';
import { createApp } from 'vue';
import { createStore } from 'vuex'
import Vuex from 'vuex';
import EstadoComponente from '../EstadoComponente.vue';





let store   

// Montar o componente com a loja Vuex  
let wrapper

beforeEach(() => {

  // Criar uma loja Vuex
 store = createStore({
  state: {
    counter: 0,
    loading: false,
    error: null,
  },
  getters: {
    counter: state => state.counter,
    isLoading: state => state.loading,
    error: state => state.error
  },
  mutations: {
    increment: (state, payload) => state.counter += payload,
    decrement: (state, payload) => state.counter -= payload,
    setLoading: (state, payload) => state.loading = payload,
    setError: (state, payload) => state.error = payload,
  },
  actions: {
    incrementAsync: jest.fn().mockImplementation(({ commit }) => {
      commit('setLoading', true);
      return new Promise(resolve => setTimeout(() => {
        commit('increment', 1);
        commit('setLoading', false);
        resolve();
      }, 1000));
    }),
    decrementAsync: jest.fn().mockImplementation(({ commit }) => {
      commit('setLoading', true);
      return new Promise(resolve => setTimeout(() => {
        commit('decrement', 1);
        commit('setLoading', false);
        resolve();
      }, 1000));
    }),
  },
});

  wrapper = mount(EstadoComponente, {
    global: {
      plugins: [store],
    },
  });

});


describe('EstadoComponente.vue', () => {
  it('Verifica se o contador está em 0', async () => {
    // Aguardar um curto período de tempo para garantir que o componente foi renderizado completamente
    await wrapper.vm.$nextTick();

    // Verificar se o texto esperado está presente no HTML renderizado
    expect(wrapper.html()).toContain('Counter: 0');
  });

  it('Verifica se o botão de incremento está presente', async () => {
    // Aguardar um curto período de tempo para garantir que o componente foi renderizado completamente
    await wrapper.vm.$nextTick();

    // Verificar se o botão de incremento está presente no HTML renderizado
    expect(wrapper.find('.action-button-increment').exists()).toBe(true);
  });

  it('Verifica se o botão de decremento está presente', async () => {
    // Aguardar um curto período de tempo para garantir que o componente foi renderizado completamente
    await wrapper.vm.$nextTick();

    // Verificar se o botão de decremento está presente no HTML renderizado
    expect(wrapper.find('.action-button-decrement').exists()).toBe(true);
  });

  it('Verifica se clicar no botão de incremento incrementa o contador', async () => {
    // Aguardar um curto período de tempo para garantir que o componente foi renderizado completamente
    await wrapper.vm.$nextTick();

    // Simular um clique no botão de incremento
    await wrapper.find('.action-button-increment').trigger('click');

    await wrapper.vm.$nextTick();
    
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Verificar se o contador foi incrementado
    expect(wrapper.html()).toContain('Counter: 1');
  });

  it('Verifica se clicar no botão de decremento decrementa o contador', async () => {
    // Aguardar um curto período de tempo para garantir que o componente foi renderizado completamente
    await wrapper.vm.$nextTick();

    // Simular um clique no botão de decremento
    await wrapper.find('.action-button-decrement').trigger('click');

    await wrapper.vm.$nextTick();

    await new Promise(resolve => setTimeout(resolve, 1000));

    // Verificar se o contador foi decrementado
    expect(wrapper.html()).toContain('Counter: -1');
  });

  it('Verifica se o componente exibe a mensagem de carregamento quando está carregando', async () => {
    // Definir o estado de loading como verdadeiro
    await store.commit('setLoading', true);

    // Aguardar um curto período de tempo para garantir que o componente foi renderizado completamente
    await wrapper.vm.$nextTick();

    await new Promise(resolve => setTimeout(resolve, 1000));

    // Verificar se a mensagem de carregamento está presente no HTML renderizado
    expect(wrapper.html()).toContain('Loading...');
  });

  it('Verifica se o componente exibe uma mensagem de erro quando ocorre um erro', async () => {
    // Definir uma mensagem de erro
    const errorMessage = 'Erro ao carregar dados';

    // Definir o estado de erro
    await store.commit('setError', errorMessage);

    // Aguardar um curto período de tempo para garantir que o componente foi renderizado completamente
    await wrapper.vm.$nextTick();

    await new Promise(resolve => setTimeout(resolve, 1000));

    // Verificar se a mensagem de erro está presente no HTML renderizado
    expect(wrapper.html()).toContain(errorMessage);
  });
});
