<template lang="">
  <form>
    <textarea
      placeholder="Type a message and hit enter to send..."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div>{{ error }}</div>
  </form>
</template>
<script>
import getUser from "../../composable/getUser";
import { timestamp } from "../../src/firebase/config";
import { ref } from "vue";
import useCollection from "../../composable/useCollection";
export default {
  setup() {
    const message = ref("");
    const { user } = getUser();
    const error = ref(null);

    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createAt: timestamp(),
      };
      const { error: postError } = await useCollection("message", chat);
      error.value = postError;

      if (!error.value) {
        message.value = "";
        console.log("successful!");
      }
    };

    return { message, handleSubmit, error };
  },
};
</script>
<style lang=""></style>
