import { mount } from '@vue/test-utils';
import LoginComponent from '../LoginComponent.vue';

describe('LoginComponent', () => {
  it('sets email and password data when input changes', async () => {
    const wrapper = mount(LoginComponent);
    const emailInput = wrapper.find('input[type="email"]');
    const passwordInput = wrapper.find('input[type="password"]');

    await emailInput.setValue('test@example.com');
    await passwordInput.setValue('password123');

    expect(wrapper.vm.email).toBe('test@example.com');
    expect(wrapper.vm.password).toBe('password123');
  });

  it('calls login method when form is submitted', async () => {
    const wrapper = mount(LoginComponent);
    const loginMethod = jest.spyOn(wrapper.vm, 'login');

    await wrapper.find('form').trigger('submit');

    expect(loginMethod).toHaveBeenCalled();
  });

  it('displays error message if email or password is missing', async () => {
    const wrapper = mount(LoginComponent);
    const form = wrapper.find('form');
    await form.trigger('submit');



    const errorMessage = wrapper.find('.error-message');

    expect(errorMessage.text()).toBe('Please enter both email and password.');
  });

  it('displays error message for invalid credentials', async () => {
    const wrapper = mount(LoginComponent);
     //wrapper.setData({ email: 'invalid@example.com', password: 'invalidpassword' });
     const emailInput = wrapper.find('input[type="email"]');
     const passwordInput = wrapper.find('input[type="password"]');
     await emailInput.setValue('invalid@example.com');
     await passwordInput.setValue('invalidpassword');

     await wrapper.vm.login();
     expect(wrapper.vm.errorMessage).toBe('Invalid email or password.');

  });

  it('logs in successfully with valid credentials', async () => {
    const wrapper = mount(LoginComponent);
    const emailInput = wrapper.find('input[type="email"]');
    const passwordInput = wrapper.find('input[type="password"]');
    await emailInput.setValue('test@example.com');
    await passwordInput.setValue('password123');

    const authenticateMock = jest.spyOn(wrapper.vm, 'authenticate').mockResolvedValueOnce({ success: true });

    await wrapper.find('form').trigger('submit');

    expect(authenticateMock).toHaveBeenCalled();
    // 
  });
});
