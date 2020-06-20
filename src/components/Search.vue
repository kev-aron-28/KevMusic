<template>
  <main>
    <transition name="move">
      <pm-notification v-show="showNotificationfail">
        <p slot="danger">No se encontraron resultados</p>
      </pm-notification>
    </transition>

    <transition name="move">
      <PmsuccessNotification v-show="showSuccess">
        <p slot="success">{{ searchMessage }}</p>
      </PmsuccessNotification>
    </transition>

    <transition name="move">
      <pm-loader v-show="isLoading"></pm-loader>
    </transition>

    <section class="section" v-show="!isLoading">
      <nav class="nav has-shadow">
        <div class="container">
          <input
            type="text"
            class="input is-large"
            placeholder="Buscar canciones..."
            v-model="searchQuery"
            @keyup.enter="search"
          />
          <a href="" class="button is-info is-large" @click.prevent="search"
            >Buscar</a
          >
          <a href="" class="button is-danger is-large">&times;</a>
        </div>
      </nav>
      <div class="container results">
        <div class="columns is-multiline">
          <div class="column is-one-quarter" v-for="t in tracks" v-bind:key="t">
            <pm-track
              v-blur="t.preview_url"
              :class="{ 'is-active': t.id === selectedTrack }"
              :track="t"
              @select="setSelectedTrack"
            >
            </pm-track>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import trackService from "@/services/track.js";
import PmTrack from "@/components/track.vue";
import PmLoader from "@/components/shared/loader.vue";
import PmNotification from "@/components/shared/notification.vue";
import PmsuccessNotification from "@/components/shared/successNotification.vue";

export default {
  name: "App",
  data() {
    return {
      searchQuery: "",
      tracks: [],
      isLoading: false,
      selectedTrack: "",
      showNotificationfail: false,
      showSuccess: false
    };
  },

  computed: {
    searchMessage() {
      return `Encotrados: ${this.tracks.length}`;
    }
  },

  watch: {
    showNotificationfail() {
      if (this.showNotificationfail) {
        setTimeout(() => {
          this.showNotificationfail = false;
        }, 3000);
      }
    }
  },

  methods: {
    search() {
      if (!this.searchQuery) {
        return;
      }
      this.isLoading = true;
      trackService.search(this.searchQuery).then(res => {
        if (res.tracks.total === 0) {
          this.showNotificationfail = true;
        } else {
          this.showSuccess = true;
        }
        this.tracks = res.tracks.items;
        this.isLoading = false;
      });
    },

    setSelectedTrack(id) {
      this.selectedTrack = id;
    }
  },

  components: {
    PmTrack,
    PmLoader,
    PmNotification,
    PmsuccessNotification
  }
};
</script>

<style lang="scss">
.is-active {
  border: 3px #48c774 solid;
}
</style>
