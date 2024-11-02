export default {
    increment(context) { // async action
        // context.commit('increment')
        setTimeout(() => {
            context.commit('increment')
        }, 2000)
    },
    increase(context, payload) {
        context.commit('increase', payload)
    },
}