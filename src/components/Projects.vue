<template>
  <div id="projects">
    <div class="main">
      <b-row>
        <b-col>
        <vue-github
          text=""
          showCalendar=true
          username="emdupre"
        />
        </b-col>
        <b-col>
          <p>
            Additionally, I'm actively involved in contributing to open source projects.
          </p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueGithub from './GitHub'

export default {
  name: 'app',
  props: {},
  components: {
    VueGithub,
  },
  data: function() {
    return {
      showCalendar: true,
      text: "",
      username: "emdupre"
    };
  }
};

</script>

<style>
  @import url("https://unpkg.com/vue-github@0.10.7/dist/vueGithub.css");
</style>
