<!-- UserList.vue -->

<template>
  <div>
    <p v-if="errorMessage">Erro: {{ errorMessage }}</p>  
    <h2>Lista de Usuários</h2>
    <ul>
      <li v-for="user in userList" :key="user.id" class="user-item">{{ user.name }}</li>
    </ul>
    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ApiComponent',
  data() {
    return {
      userList: [],
      errorMessage: null
    };
  },
  async created() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      this.userList = response.data;
    } catch (error) {
      this.errorMessage = 'Erro ao buscar dados da API.'
    }
  }
};
</script>

<style scoped>
.user-item {
  margin-bottom: 5px;
}
</style>