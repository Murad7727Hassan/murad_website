import {createStore} from 'vuex';
const store =createStore({
  state:{
    user:{
      data:{
        token:null,
        name:'murad',
      }
    }
  },
  getters:{},
  actions:{},
  mutations:{},
  modules:{},
})

export default store;
