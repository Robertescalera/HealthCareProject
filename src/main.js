import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8080/";

loadFonts();

const app = createApp(App);

// Use the app.config.globalProperties to make axios available globally
app.config.globalProperties.$axios = axios;

app
  .use(router)
  .use(vuetify)
  .mount('#app');
