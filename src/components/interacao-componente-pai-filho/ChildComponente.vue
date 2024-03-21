<template>
  <div>
    <button @click="sendMessageToParent">Send Message to Parent</button>
  </div>
</template>

<script>
export default {
  name: 'ChildComponente',
  props: ['message'],
  methods: {
    sendMessageToParent() {
        
      this.$emit('child-event', 'Message from child!');
    },
  },
};
</script>
