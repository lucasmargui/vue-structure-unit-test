// Componente.spec.js
import { mount } from '@vue/test-utils';
import FormComponent from '../FormComponent.vue';




describe('FormComponent', () => {
    it('deve atualizar corretamente o modelo quando os campos são preenchidos', async () => {
        const wrapper = mount(FormComponent);
        const nameInput = wrapper.find('#name');
        const emailInput = wrapper.find('#email');

        await nameInput.setValue('João');
        await emailInput.setValue('joao@example.com');

        expect(wrapper.vm.name).toBe('João');
        expect(wrapper.vm.email).toBe('joao@example.com');
    });

    it('deve chamar o método submitForm quando o formulário é enviado', async () => {
        const wrapper = mount(FormComponent);
        const submitFormMock = jest.fn();
        wrapper.vm.submitForm = submitFormMock;

        await wrapper.find('form').trigger('submit');

        expect(submitFormMock).toHaveBeenCalled();
    });

    it('deve exibir mensagem de erro ao enviar formulário com campos em branco', async () => {
        const wrapper = mount(FormComponent);

        // Simulando o envio do formulário sem preencher os campos
        await wrapper.find('form').trigger('submit');

        // Espera um pequeno tempo para permitir que as atualizações assíncronas ocorram (se houver)
        await wrapper.vm.$nextTick();

        // Verifica se a mensagem de erro é exibida para campos obrigatórios
        expect(wrapper.find('.error-message').exists()).toBe(true);
    });

    describe('Validação de campos individuais', () => {
        it('deve exibir mensagem de erro para campo de nome em branco', async () => {
            const wrapper = mount(FormComponent);

            // Simulando o envio do formulário sem preencher o campo de nome
            await wrapper.find('form').trigger('submit');

            // Espera um pequeno tempo para permitir que as atualizações assíncronas ocorram (se houver)
            await wrapper.vm.$nextTick();

            // Verifica se a mensagem de erro é exibida para o campo de nome obrigatório
            expect(wrapper.find('#name-error').exists()).toBe(true);
        });

        it('deve exibir mensagem de erro para campo de e-mail em branco', async () => {
            const wrapper = mount(FormComponent);

            // Simulando o envio do formulário sem preencher o campo de e-mail
            await wrapper.find('form').trigger('submit');

            // Espera um pequeno tempo para permitir que as atualizações assíncronas ocorram (se houver)
            await wrapper.vm.$nextTick();

            // Verifica se a mensagem de erro é exibida para o campo de e-mail obrigatório
            expect(wrapper.find('#email-error').exists()).toBe(true);
        });
    });

    describe('Validação de formato de e-mail', () => {
        it('deve exibir mensagem de erro para formato inválido de e-mail', async () => {
            const wrapper = mount(FormComponent);
            const emailInput = wrapper.find('#email');

            // Preenchendo o campo de e-mail com um formato inválido
            await emailInput.setValue('email_invalido');

            // Simulando o envio do formulário com o formato inválido de e-mail
            await wrapper.find('form').trigger('submit');

            // Espera um pequeno tempo para permitir que as atualizações assíncronas ocorram (se houver)
            await wrapper.vm.$nextTick();

            // Verifica se a mensagem de erro é exibida para o formato inválido de e-mail
            expect(wrapper.find('#email-error').exists()).toBe(true);
        });
    });

    describe('Comportamento após envio bem-sucedido do formulário', () => {
        it('deve limpar os campos após envio bem-sucedido do formulário', async () => {
            const wrapper = mount(FormComponent);
            const nameInput = wrapper.find('#name');
            const emailInput = wrapper.find('#email');

            // Preenchendo os campos do formulário
            await nameInput.setValue('João');
            await emailInput.setValue('joao@example.com');

            // Simulando o envio bem-sucedido do formulário
            await wrapper.vm.submitForm();

            // Verifica se os campos foram limpos após o envio bem-sucedido do formulário
            expect(wrapper.vm.name).toBe('');
            expect(wrapper.vm.email).toBe('');
        });
    });

});
