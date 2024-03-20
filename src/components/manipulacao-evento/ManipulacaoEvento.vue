<template>
  <div>
    <button @click="incrementCounter">Clique em mim!</button>
    <p>Número de cliques: {{ counter }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    incrementCounter() {
      this.counter++;
    }
  }
};
</script>
