import { ref } from "vue";
import { projectAuth } from "@/firebase/config";

const useLogin = async (email, password) => {
  const error = ref(null);
  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    error.value = "账户或密码不匹配";
  }
  return { error };
};

export default useLogin;
