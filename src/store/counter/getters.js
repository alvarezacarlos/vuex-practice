export default {
    finalCounter(state) {
        return state.counter * 2
    },
    normalizeCounter(_, getters) {
        // const finalCounter = state.counter * 2
        const finalCounter = getters.finalCounter
        if (finalCounter < 0) {
            return 0
        }
        if (finalCounter > 100) {
            return 100
        }
        return finalCounter
    },
}