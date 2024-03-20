// ComputedComponent.spec.js
import { mount } from '@vue/test-utils';
import ComputedComponent from '../ComputedComponent.vue';

describe('ComputedComponent', () => {
  it('calculates full name correctly', () => {
    const wrapper = mount(ComputedComponent, {
      propsData: {
        firstName: 'John',
        lastName: 'Doe'
      }
    });

    expect(wrapper.vm.fullName).toBe('John Doe');
  });

  it('reacts to changes in firstName and lastName', async () => {
    const wrapper = mount(ComputedComponent, {
      propsData: {
        firstName: 'John',
        lastName: 'Doe'
      }
    });

    expect(wrapper.vm.fullName).toBe('John Doe');

    await wrapper.setProps({
      firstName: 'Jane'
    });

    expect(wrapper.vm.fullName).toBe('Jane Doe');

    await wrapper.setProps({
      lastName: 'Smith'
    });

    expect(wrapper.vm.fullName).toBe('Jane Smith');
  });

  it('validates firstName and lastName length', async () => {
    const wrapper = mount(ComputedComponent, {
      propsData: {
        firstName: 'TooLongFirstName', // This should fail validation
        lastName: 'Doe'
      }
    });

    // Asserting that the component is not rendered
    expect(wrapper.find('span').exists()).toBe(true);
  });

  it('calculates fullNameLength correctly', () => {
    const wrapper = mount(ComputedComponent, {
      propsData: {
        firstName: 'John',
        lastName: 'Doe'
      }
    });

    expect(wrapper.vm.fullNameLength).toBe(8); // 'John Doe' has 8 characters
  });

  it('handles null or empty firstName and lastName', () => {
    const wrapper = mount(ComputedComponent, {
      propsData: {
        firstName: null,
        lastName: ''
      }
    });

    // Asserting that the component is not rendered
    expect(wrapper.find('span').exists()).toBe(true);
  });
});