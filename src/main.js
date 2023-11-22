import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import "./assets/mainMobie.css";
import { projectAuth } from "./firebase/config";

let app;

projectAuth.onAuthStateChanged(() => {
  // note that when refresh the page, it takes fraction of time to connect to backend, and during this time, current user is "null"
  // so whenever we refresh the page, the user state changes
  // onAuthStateChanged fires everytime when user state changes
  if (!app) {
    app = createApp(App).use(router).mount("#app");
  }
});
