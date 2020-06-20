<template>
  <div class="container" v-if="track && track.id">
    <pm-loader v-show="isLoading"></pm-loader>
    <div class="columns">
      <div id="im" class="column is-3 has-text-centered">
        <figure class="media-left">
          <p class="image">
            <img :src="track.album.images[0].url" alt="" />
          </p>
          <p>
            <a href="" class="button is-primary is-large">
              <span class="icon" @click.prevent="selectTrack">🔊</span>
            </a>
          </p>
        </figure>
      </div>
      <div class="column is-8">
        <div class="panel">
          <div class="  has-text-centered panel-heading">
            <h1 class="title">{{ track.name }} - {{track.artists[0].name}}</h1>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import trackMixin from "@/mixins/track";
import {mapState, mapActions} from 'vuex'
 import PmLoader from "@/components/shared/loader.vue";

export default {

  components: {
      PmLoader
  },
  mixins: [trackMixin],

  computed: {
    ...mapState(['track'])
  },
  data() {
    return {
      isLoading: false
    };
  },
  created() {
    
    const id = this.$route.params.id;
    
    if(!this.track || !this.track.id || this.track.id !== id){
      this.isLoading = true
      this.getTrackById({id})
        .then( () => {
          this.isLoading = false
          console.log('track loaded')
        })
    }
  },

  methods:{
    ...mapActions(['getTrackById'])
  }
};
</script>

<style lang="scss" scoped>
.columns {
  margin: 20px;
}

.columns{
  display:flex;
  flex-direction: column-reverse;
  align-items: center;
}

#im{
  margin-top: 10px;
}
</style>
