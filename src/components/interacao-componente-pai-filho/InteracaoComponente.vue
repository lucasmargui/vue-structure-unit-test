// ParentComponent.vue
<template>
  <div>
    <ChildComponente :message="message" @child-event="handleChildEvent" />
  </div>
</template>

<script>
import ChildComponente from './ChildComponente.vue';

export default {
  name: 'InteracaoComponente',
  components: {
    ChildComponente,
  },
  data() {
    return {
      message: 'Hello from parent!',
    };
  },
  methods: {
    handleChildEvent(payload) {
      console.log('Received event from child:', payload);
    },
  },
};
</script>
