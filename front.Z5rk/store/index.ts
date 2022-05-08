import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  user: null,
  balance: null,
  transactions: null,
  mode: 'light',
  nfts: null,
  
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  user: state => state.user
}

export const mutations: MutationTree<RootState> = {
  CHANGE_USER: (state, newVal: any) => (state.user = newVal),
  CHANGE_BALANCE: (state, newVal: any) => (state.balance = newVal),
  CHANGE_TRS: (state, newVal: any) => (state.transactions = newVal),
  CHANGE_MODE: (state) => (state.mode = state.mode ? 'light' : 'dark'),
  SET_NFTS: (state, newVal: any) => (state.nfts = newVal),
}

export const actions: ActionTree<RootState, RootState> = {
  updateUser({ commit }, newVal) {
    commit('CHANGE_USER', newVal)
  },
  updateBalance({ commit }, newVal) {
    commit('CHANGE_BALANCE', newVal)
  },
  updateTransactions({ commit }, newVal) {
    commit('CHANGE_TRS', newVal)
  },
  changeMode({ commit }) {
    commit('CHANGE_MODE')
  },
  getNFTs({ commit }) {
    this.$axios.get('http://localhost:4000/v1/nfts/?q=bored ape')
      .then( (response)  => {
        if(response) {
          commit('SET_NFTS', response.data.data.result)
        }
      })
      .catch( (error)  => {
          console.log(error);
      });
  }

}