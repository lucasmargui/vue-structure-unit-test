<template>
  <div class="container">
  <div class="counter-card">
    <h2>Counter: {{ counter }}</h2>
    <h3 v-if="isLoading">Loading...</h3>
    <h3 v-if="error">Error: {{ error }}</h3>
    <div class="button-container">
      <button class="action-button-increment" @click="increment">Increment</button>
      <button class="action-button-decrement" @click="decrement">Decrement</button>
    </div>
  </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'EstadoComponente',
  computed: {
    ...mapState(['counter', 'isLoading', 'error']),
    ...mapGetters(['isLoading', 'error']),
  },
  methods: {
    ...mapActions(['incrementAsync', 'decrementAsync',]),
    increment() {
      this.incrementAsync();
    },
    decrement() {
      this.decrementAsync();
    },

  }
}
</script>

<style>

</style>