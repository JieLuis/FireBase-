import { ref } from "vue";
import { projectAuth } from "@/firebase/config";

const getUser = () => {
  const user = ref(projectAuth.currentUser);
  projectAuth.onAuthStateChanged((_user) => {
    user.value = _user;
  });

  return { user };
};

export default getUser;
