<template>
  <div>
    <p v-if="mostrarMensagem">{{ mensagem }}</p>
    <button @click="toggleMensagem">Toggle Mensagem</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrarMensagem: false,
      mensagem: 'Olá, mundo!'
    };
  },
  methods: {
    toggleMensagem() {
        this.mostrarMensagem = !this.mostrarMensagem;
      console.log('mostrarMensagem:', this.mostrarMensagem);
    }
  }
};
</script>
