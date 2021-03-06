import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    modules
})