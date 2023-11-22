<template lang="">
  <div>chatroom</div>
  <NewChatForm />
</template>

<script>
import getUser from "../../composable/getUser";
import { watch } from "vue";
import { useRouter } from "vue-router";
import NewChatForm from "../components/NewChatForm.vue";
export default {
  components: { NewChatForm },

  setup() {
    const { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) {
        router.push({ name: "welcome" });
      }
    });
  },
};
</script>
<style lang=""></style>
