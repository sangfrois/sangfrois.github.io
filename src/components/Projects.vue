<template>
  <div id="projects">
    <div class="main">
      <b-row>
        <b-col>
          <div class="d-flex justify-content-between">
            <vue-github
              text=""
              showCalendar=true
              username="sangfrois"
            />
          </div>
        </b-col>
        <b-col>
          <div class="d-flex justify-content-between">
            <p>
            </p>
          </div>
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
      username: "sangfrois"
      };
   }
};
</script>
<style>
   @import url("https://unpkg.com/vue-github@0.10.7/dist/vueGithub.css");
</style>
