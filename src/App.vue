<template>
  <div id="app">
    <LoginComponent />
  </div>
</template>

<script>

import LoginComponent from './components/login/LoginComponent.vue'

export default {
  name: 'App',
  components: {
    LoginComponent
  },
  
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