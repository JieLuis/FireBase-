<template>
  <form @submit.prevent="handleSubmit" action="/login" method="post">
    <h2>Login</h2>

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

    <p class="error">{{ error }}</p>

    <input type="submit" value="Login" />
  </form>
</template>

<script>
import useLogin from "../../composable/useLogin";
import { ref } from "vue";

export default {
  setup(props, context) {
    const email = ref("");
    const password = ref("");
    const error = ref(null);

    const handleSubmit = async () => {
      const { error: loginError } = await useLogin(email.value, password.value);
      error.value = loginError.value;
      console.log(error.value);

      if (!error.value) {
        context.emit("login");
      }
    };

    return { email, password, handleSubmit, error };
  },
};
</script>

<style></style>
