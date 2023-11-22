<template lang="">
  <div>chatroom</div>
</template>
<script>
import getUser from "../../composable/getUser";
import { watch } from "vue";
import { useRouter } from "vue-router";
export default {
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
