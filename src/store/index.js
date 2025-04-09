import { createStore } from 'vuex'

export default createStore({
  state: {
    strategies: [
      { id: 1, name: 'Option SIP' },
      { id: 2, name: 'H1S-MS Range BO' },
      { id: 3, name: 'SMALL Intraday Range BO' },
      { id: 4, name: 'H1 & L1 in premium' },
      { id: 5, name: 'RSI 50 Unbs Line' },
      { id: 6, name: 'RSI 50 unit line' },
      { id: 7, name: 'MACD D line' },
      { id: 8, name: 'BB: SD. 2' },
      { id: 9, name: 'copstock curve' },
      { id: 10, name: 'Ichimoku Cloud' },
      { id: 11, name: 'Pivot points - PP and R1/S1' },
      { id: 12, name: 'MA/EMA cross' },
      { id: 13, name: 'RST' },
      { id: 14, name: 'VORTEX' }
    ],
    activeStrategy: 6
  },
  mutations: {
    setActiveStrategy(state, strategyId) {
      state.activeStrategy = strategyId
    }
  },
  actions: {
    selectStrategy({ commit }, strategyId) {
      commit('setActiveStrategy', strategyId)
    }
  },
  getters: {
    getStrategyById: (state) => (id) => {
      return state.strategies.find(strategy => strategy.id === id)
    },
    getAllStrategies(state) {
      return state.strategies
    },
    getActiveStrategy(state) {
      return state.strategies.find(strategy => strategy.id === state.activeStrategy)
    }
  }
})
