<template>
  <div>
    <h2>聊天室</h2>
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import getUser from "../../composable/getUser";
import { watch } from "vue";
import { useRouter } from "vue-router";
import NewChatForm from "../components/NewChatForm.vue";
import ChatWindow from "../components/ChatWindow.vue";
export default {
  components: { NewChatForm, ChatWindow },

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
<style lang="css"></style>
