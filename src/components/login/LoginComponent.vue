<template>
  <form @submit.prevent="login">
    <input v-model="email" type="email" placeholder="Email">
    <input v-model="password" type="password" placeholder="Password">
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    <button type="submit">Login</button>
  </form>
</template>

<script>
export default {
  name:'LoginComponent',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    validateInput() {
      if (!this.email || !this.password) {
        this.errorMessage = 'Please enter both email and password.';
        return false;
      }
      return true;
    },
    async authenticate() {
      // Simulando autenticação com um serviço de backend
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (this.email === 'test@example.com' && this.password === 'password123') {
            resolve({ success: true });
          } else {
            reject(new Error('Invalid email or password.'));
          }
        }, 1000);
      });
    },
    async login() {
      this.errorMessage = '';

      if (!this.validateInput()) {
        return;
      }

      try {
        await this.authenticate();
        console.log('Login successful!');
        // Aqui você pode redirecionar para a página de dashboard, por exemplo
      } catch (error) {
        console.log('Login false!');
        this.errorMessage = error.message;
      }
    }
  }
};
</script>
