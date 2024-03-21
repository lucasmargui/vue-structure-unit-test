import { createStore } from 'vuex'


export default createStore({
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
      increment: (state, payload) => state.counter = state.counter  + payload, 
      decrement: (state, payload) => state.counter  = state.counter - payload, 
      setLoading: (state, payload) => state.loading = payload, 
      setError: (state, payload) => state.error = payload, 
    },
    actions: {
      async incrementAsync({ commit }) { 
        commit('setLoading', true);
        try {
          await new Promise(resolve => setTimeout(resolve, 1000));
          commit('increment', 1); 
        } catch (error) {
          commit('setError', error.message); 
        } finally {
          commit('setLoading', false); 
        }
      },
      async decrementAsync({ commit }) {
        commit('setLoading', true);
        try {
          // Simulando uma operação assíncrona, por exemplo, uma chamada de API
          await new Promise(resolve => setTimeout(resolve, 1000));
          commit('decrement', 1);
        } catch (error) {
          commit('setError', error.message);
        } finally {
          commit('setLoading', false);
        }
      },
      
      
    },
      modules: {
    }
  })