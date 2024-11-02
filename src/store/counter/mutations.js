export default {
    increment(state) {
        state.counter = state.counter + 2;
        // setTimeout(() => {
        //     state.counter = state.counter + 2;
        // }, 2000)
    },
    increase(state, payload) {
        state.counter = state.counter + payload.value
    },
}