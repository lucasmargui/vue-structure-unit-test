<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Nome:</label>
      <input id="name" v-model="name" required>
      <span v-if="errors.name" id="name-error" class="error-message">Campo obrigatório</span>
    </div>
    <div>
      <label for="email">Email:</label>
      <input id="email" v-model="email" type="email" required>
      <span v-if="errors.email" id="email-error" class="error-message">Email inválido</span>
    </div>
    <button type="submit">Enviar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      errors: {
        name: false,
        email: false
      }
    };
  },
  methods: {
    async submitForm() {
      if (!this.name || !this.email || !this.validEmail(this.email)) {
        this.errors.name = !this.name;
        this.errors.email = !this.email || !this.validEmail(this.email);
        return;
      }

      // Submit logic here
      // Example: axios.post('/api/submit', { name: this.name, email: this.email })

      // Clear fields after successful submission
      this.name = '';
      this.email = '';
    },
    validEmail(email) {
      // Simple email validation, can be improved
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  }
};
</script>

<style>
.error-message {
  color: red;
}
</style>
