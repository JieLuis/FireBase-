<template>
  <div class="chat--window">
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="documents" ref="message" class="messages">
      <div v-for="doc in formatDocuments" :key="doc.id" class="single--block">
        <div class="message--container">
          <span class="date">{{ doc.createAt }} ago</span>
          <span class="name">用户: {{ doc.name }}</span>
          <span class="message"> {{ doc.message }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import getCollection from "../../composable/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed, ref, onUpdated } from "vue";

export default {
  setup() {
    const { error, documents } = getCollection("message");

    const formatDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createAt.toDate());
          return { ...doc, createAt: time };
        });
      }
    });

    // Auto-scroll to bottom of message
    const message = ref(null);

    onUpdated(() => {
      message.value.scrollTop = message.value.scrollHeight;
    });
    // whenever data update, this callback function will be trigger
    return { error, documents, formatDocuments, message };
  },
};
</script>

<style>
.chat--window {
  position: relative;
  background: #372f2f;
  padding: 30px 20px; /* Fixed comma to a space */
  width: 90%;
  overflow: auto;
  border-radius: 25px;
  border: 3px #000000 solid;
  padding: 10px 20px;
  left: 5%;
}

.single--block {
  margin: 15px auto; /* Fixed comma to a space */
}

.date {
  display: block;
  color: #000000;
  margin-bottom: 4px;
}

.name {
  font-weight: bold;
  margin-right: 10px;
  color: yellow;
}

.messages {
  overflow: auto;
  max-height: 60vh;
}

.message {
  font-family: Arial, Helvetica, sans-serif;
}

.message--container {
  color: #fff;
  background-color: #807474;
  border-radius: 18px;
}
</style>
