<template>
  <div>
    <h1 class="text-2xl">{{ msg }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    description: String
  }
}
</script>

<style>
.text-2xl {
  font-size: 2rem;
}
</style>
