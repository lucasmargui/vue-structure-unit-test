<template>
  <div id="app">
    <div class="component-box">
      <search-input />
    </div>
  </div>
</template>

<script>
import SearchInput from './components/search-input/SearchInput.vue'

export default {
  name: 'App',
  components: {
    SearchInput
  },
  data() {
    return {
      search: ''
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.component-box {
  width: 30%;
}
</style>