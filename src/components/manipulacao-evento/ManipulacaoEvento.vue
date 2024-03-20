<template>
  <div>
    <button @click="incrementCounter" :disabled="counter >= maxClicks" class="increment-button">Clique em mim!</button>
    <button @click="resetCounter" class="reset-button">Redefinir</button>
    <p>Número de cliques: {{ counter }}</p>
    <p v-if="counter >= maxClicks" style="color: red;">Limite de cliques atingido!</p>

    <h1>{{ buttonText }}</h1>
    <button @click="changeText" class="change-button" >Change Text</button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      maxClicks: 10,
      buttonText: 'Initial Text'
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
    },
    changeText() {
      this.buttonText = 'New Text';
    }
  }
};
</script>
