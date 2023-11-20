<template>
  <header>
    <a href="/index.html"
      ><img class="icon" src="../../images/icon.png" alt=""
    /></a>

    <h1 class="headbar-title">Thinkaboutmoonlight</h1>

    <nav>
      <img
        class="icon icon--right"
        @click="handleClick"
        src="../../images/icon-right.svg"
        alt=""
      />
      <ul
        v-if="showCollapisbleContent || screenWidth > 680"
        class="collapisble__content"
      >
        <li><a href="/index.html">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <div class="language-menu">
          <div class="selected-language">English</div>
          <ul class="language-list">
            <li><a href="#" class="en">English</a></li>
            <li><a href="/index-cn.html" class="cn">中文</a></li>
          </ul>
        </div>
      </ul>
    </nav>
  </header>
</template>
<script>
import { ref } from "vue";
import { useWindowSize } from "@vueuse/core";
export default {
  setup() {
    const showCollapisbleContent = ref(false);
    const handleClick = () => {
      showCollapisbleContent.value = !showCollapisbleContent.value;
    };
    const { width } = useWindowSize();
    const screenWidth = ref(width);

    return { handleClick, showCollapisbleContent, screenWidth };
  },
};
</script>
<style lang=""></style>
