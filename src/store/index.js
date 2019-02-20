import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let state ={
    count:10
}
const getters ={
    count(state){
        // console.log(state)
        return state.count
    }
}
const mutations = {
    add(state,data){
        state.count+=data
    },
    cut(state,data){
        state.count-=data
    }
}
const actions ={
    add({commit,state},data){
        console.log('add',data)
        commit('add',data)
    },
    cut({commit},data){
        console.log('cut')
        commit('cut',data)
    }
}
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})