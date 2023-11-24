import { ref } from "vue";
import { projectFirestore } from "../src/firebase/config";

const useCollection = async (collection, doc) => {
  const error = ref(null);
  try {
    await projectFirestore.collection(collection).add(doc);
  } catch (err) {
    console.log(err.message);
    error.value = `Couldn't send message, error:${err.message}`;
  }

  return { error };
};

export default useCollection;
