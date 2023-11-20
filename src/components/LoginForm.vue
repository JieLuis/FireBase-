<template lang="">
  <form @submit.prevent="handleSubmit" action="/signup" method="post">
    <h2>Login in</h2>

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

    <input type="submit" value="Login in" />
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

    return { email, password, handleSubmit };
  },
};
</script>
<style lang=""></style>
