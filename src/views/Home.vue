<template>
  <div>Home</div>
  <p>My name is ile</p>
  <button @click="handleClick">Here</button>
  <input type="text" v-model="search" />
  <p>search term - {{ search }}</p>
  <div v-for="name in names" :key="name">{{ name }}</div>
</template>

<script>
import { ref, watch, watchEffect } from "vue";
export default {
  setup() {
    const names = ["mario", "Sevval", "Can"];
    const search = ref("");
    const handleClick = () => {};

    watch(search, () => {
      console.log("fired");
    });

    watchEffect(() => (console.log("hi"), search.value));

    return { names, search };
  },
};
</script>
