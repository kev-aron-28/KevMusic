import Vue from "vue";
import Vuex from "vuex";
import trackService from "@/services/track"
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    track: {}
  },

  mutations: {
      setTrack(state, track){
          state.track = track
      }
  }, 

  actions: {
      getTrackById(context, payLoad){
        return trackService.getById(payLoad.id)
          .then(res => {
            context.commit('setTrack', res)
            return res
        })
      }
  }
});

export default store;
