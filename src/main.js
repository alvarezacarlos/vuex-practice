import { createApp } from 'vue';
import App from './App.vue';

import { createStore } from 'vuex'

const app = createApp(App);

const store = createStore({
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 1;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value
        }
    },
})

app.use(store)

app.mount('#app');
