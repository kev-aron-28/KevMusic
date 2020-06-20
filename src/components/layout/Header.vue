<template>
  <section class="hero is-success">
    <div class="hero head">
      <header class="navbar">
        <div class="container">
          <div class="navbar-start">
            <div class="navbar-item">
              <strong>PLATZI MUSIC 🎶</strong>
            </div>
          </div>
          <div class="navbar-end navbar-menu">
            <router-link class="navbar-item" to="/">Search</router-link>
            <router-link class="navbar-item" to="about">About</router-link>
          </div>
        </div>
      </header>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">PLATZI MUSIC</h1>
        <h2 class="subtitle">Canciones que estan Vue-nisimas</h2>
        <pm-player></pm-player>
      </div>
    </div>
  </section>
</template>

<script>
import PmPlayer from "@/components/Player.vue";
export default {
  components: {
    PmPlayer
  }
};
</script>
