<template>
  <div>
    <button @click="incrementCounter" :disabled="counter >= maxClicks">Clique em mim!</button>
    <button @click="resetCounter">Redefinir</button>
    <p>Número de cliques: {{ counter }}</p>
    <p v-if="counter >= maxClicks" style="color: red;">Limite de cliques atingido!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      maxClicks: 10
    };
  },
  methods: {
    incrementCounter() {
      if (this.counter < this.maxClicks) {
        this.counter++;
      }
    },
    resetCounter() {
      this.counter = 0;
    }
  }
};
</script>
