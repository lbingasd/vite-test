export const useMain = defineStore('main', {
    // 相当于data
    state: () => {
        return {
          // 所有这些属性都将自动推断其类型,如果推断失败可以试下 as xxx
          counter: 0,
          name: 'Eduardo',
        }
    },
    // 相当于计算属性
    getters: {
    },
    // 相当于vuex的 mutation + action，可以同时写同步和异步的代码
    actions: {
    },
})
