import { ref, watchEffect } from "vue";
import { projectFirestore } from "@/firebase/config";

const getCollection = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy("createAt");

  const unsub = collectionRef.onSnapshot((snap) => {
    console.log("snap");
    const results = [];
    snap.docs.forEach(
      (doc) => {
        doc.data().createAt && results.push({ ...doc.data(), id: doc.id });
        // project deatail 1
        documents.value = results;
        error.value = null;
      },
      (err) => {
        console.log(err.message);
        documents.value = null;
        error.value = "couldn't fetch data";
      }
    );
  });

  // improve performance by preventing log out trigger snapshot (real time listenner)
  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { documents, error };
};

export default getCollection;
