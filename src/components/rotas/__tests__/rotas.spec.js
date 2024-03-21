// Arquivo: Home.spec.js

import { mount } from '@vue/test-utils'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeComponente from '../HomeComponente.vue'
import routes from '@/router/'




// Montar o componente com a loja Vuex  
let wrapper

beforeEach(() => {

  wrapper = mount(HomeComponente, {
    global: {
      plugins: [routes],
    },
  });

});

describe('Home.vue', () => {
  it('renders the Home component when navigating to /', async () => {

    // Navega para a rota '/'
    await routes.push('/')

    // Espera que o componente Home seja renderizado
    expect(wrapper.findComponent(HomeComponente).exists()).toBe(true)
  })
})