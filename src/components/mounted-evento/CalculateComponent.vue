<!-- MyComponent.vue -->
<template>
  <div>
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <p v-else>Resultado da Soma: {{ sum }}</p>
  </div>
</template>

<script>
export default {
  name: 'CalculateComponent',
  data() {
    return {
      sum: null,
      errorMessage: null
    };
  },
  mounted() {
    this.calculateAndDisplaySum(3, 4);
  },
  methods: {
    calculateAndDisplaySum(a, b) {
      try {
        if (typeof a !== 'number' || typeof b !== 'number') {
          throw new Error('Ambos os argumentos devem ser números.');
        }
        this.sum = this.calculateSum(a, b);
      } catch (error) {
        this.errorMessage = error.message;
      }
    },
    calculateSum(a, b) {
      return a + b;
    }
  }
};
</script>