<template lang="">
  <form @submit.prevent="handleSubmit" action="/signup" method="post">
    <h2>Sign Up</h2>
    <label for="username">Username:</label>
    <input
      type="text"
      name="username"
      placeholder="Enter your username"
      v-model="username"
      required
    />

    <label for="email">Email:</label>
    <input
      type="email"
      name="email"
      placeholder="Enter your email"
      v-model="email"
      required
    />

    <label for="password">Password:</label>
    <input
      type="password"
      name="password"
      placeholder="Enter your password"
      v-model="password"
      required
    />

    <input type="submit" value="Sign Up" />
  </form>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const username = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = () => {
      console.log(username.value);
    };

    return { username, email, password, handleSubmit };
  },
};
</script>
<style lang=""></style>
