// ApiComponent.spec.js

import { mount } from '@vue/test-utils';
import ApiComponent from '../ApiComponent.vue';



import axios from 'axios';



// Mockando a chamada da API externa
// Essa função de mock substitui a função `get` do Axios.
jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve({ data: [{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }] }))
  }));



// jest.mock('axios', () => ({ 
//   // Essa função de mock substitui a função `get` do Axios.
//   // Isso garante que ao tentar fazer uma solicitação GET, ela sempre será rejeitada com um erro.
//   // Isso pode ser útil para testar cenários de erro na sua aplicação.
//   // get: jest.fn(() => Promise.reject(new Error('Request failed')))
//   }));

  describe('ApiComponent.vue', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = mount(ApiComponent);
    });

    afterEach(() => {
      jest.clearAllMocks(); // Limpa todos os mocks entre os testes
    });
  
    it('renders a list of users', async () => {

      await wrapper.vm.$nextTick();
      expect(wrapper.findAll('.user-item')).toHaveLength(2);
    });
  
    it('fetches user list on component creation', async () => {
      await wrapper.vm.$nextTick();
      expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
      expect(wrapper.vm.userList).toEqual([{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }]);
    });
    
  
  });
