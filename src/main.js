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
    getters: {
        // finalCounter(state, getters) {
        finalCounter(state) {
            return state.counter * 2
        },
        normalizeCounter(_, getters) {
            // const finalCounter = state.counter * 2
            const finalCounter = getters.ginalCounter
            if (finalCounter < 0) {
                return 0
            }
            if (finalCounter > 100) {
                return 100
            }
            return finalCounter
        }
    }
})

app.use(store)

app.mount('#app');
