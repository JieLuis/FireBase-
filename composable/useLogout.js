import { ref } from "vue";
import { projectAuth } from "@/firebase/config";

const useLogout = async () => {
  const error = ref(null);
  try {
    await projectAuth.signOut();
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
  return { error };
};

export default useLogout;
