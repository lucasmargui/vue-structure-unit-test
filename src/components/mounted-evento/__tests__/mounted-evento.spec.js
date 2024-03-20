// MyComponent.spec.js
import { mount } from '@vue/test-utils';
import CalculateComponent from '../CalculateComponent.vue';

describe('CalculateComponent', () => {
  it('calculates and displays the sum correctly when mounted', () => {
    // Definindo os números para a soma
    const a = 3;
    const b = 4;

    // Montando o componente
    const wrapper = mount(CalculateComponent);

    // Verificando se o método calculateAndDisplaySum foi chamado durante o ciclo de vida do componente
    expect(wrapper.vm.sum).toBe(7);
  });
});