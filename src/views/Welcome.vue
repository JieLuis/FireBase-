<template>
  <div class="">
    <p>Welcome</p>
    <div class="signOrLogForm">
      <div v-if="showSignUp">
        <SignupForm @signup="enterChatroom" />
        <p>
          已有账户？
          <button @click="handleClick">
            <span>登录</span>
          </button>
        </p>
      </div>
      <div v-else>
        <LoginForm @login="enterChatroom" />
        <p>
          还没有账户？
          <button @click="handleClick">
            <span>注册</span>
          </button>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import SignupForm from "@/components/SignupForm.vue";
import LoginForm from "@/components/LoginForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  components: { SignupForm, LoginForm },
  setup() {
    const router = useRouter();
    const showSignUp = ref(true);
    const enterChatroom = () => {
      router.push({ name: "chatroom" });
    };
    const handleClick = () => {
      showSignUp.value = !showSignUp.value;
    };
    return { showSignUp, handleClick, enterChatroom };
  },
};
</script>
<style>
/* Basic styles for the form */
.signOrLogForm form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.signOrLogForm input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.signOrLogForm input[type="submit"] {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.signOrLogForm input[type="submit"]:hover {
  background-color: #0056b3;
}
</style>
