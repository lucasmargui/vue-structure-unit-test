<template>
  <div>
    <p v-if="isValid">Full Name: {{ fullName }}</p>
    <span v-else>Invalid Name</span>
    <p v-if="isValid">Full Name Length: {{ fullNameLength }}</p>
  </div>
</template>

<script>
export default {
  name: 'ComputedComponent',
  props: {
    firstName: {
      type: String,
      default: ''
    },
    lastName: {
      type: String,
      default: ''
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    fullNameLength() {
      return this.fullName.length;
    },
    isValid() {
      return (
        (this.firstName && this.firstName.length <= 10) &&
        (this.lastName && this.lastName.length <= 10)
      );
    }
  }
};
</script>
