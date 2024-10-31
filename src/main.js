import { createApp } from 'vue';
import App from './App.vue';

import { createStore } from 'vuex'

const app = createApp(App);

const store = createStore({
    state() {
        return {
            counter: 0
        }
    }
})

app.use(store)

app.mount('#app');
