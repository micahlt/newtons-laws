import {
  createApp
} from 'vue';
import App from './App.vue';
import store from './store';
let app = createApp(App);
app.use(store);
let flip = new CustomEvent('flip', {
  detail: null
});
app.provide('flip', flip);
app.mount('#app');