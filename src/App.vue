<template>
  <div id="app">
    <b-navbar toggleable="md" type="light" variant="light">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/" exact> Elizabeth DuPre </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <!--  Here are links to different routes  -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-item to="/about">About</b-nav-item> -->
          <!-- <b-nav-item to="/projects">Projects</b-nav-item> -->
          <b-nav-item to="/pubs">Publications</b-nav-item>
          <b-nav-item to="/cv">CV</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <br />

    <div>
        <router-view></router-view>
    </div>

    <footer>
        <div class="fluid-container footer">
          <p class="text-center">
            © Elizabeth DuPre 2019
          </p>
        </div>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);


export default {
  name: 'app'
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1, h2,
h3, h4,
h5, h6 {
    font-family: 'Ikota Web', sans-serif;
    font-weight: 100;
    color: #444;
    line-height: 1.1em;
}

textarea {
  font-family: 'Open Sans', sans-serif;
  color: #6a6e75;
  font-size: inherit;
  line-height: inherit;
}

footer{
  padding: 2% 0 0 0
}
</style>
