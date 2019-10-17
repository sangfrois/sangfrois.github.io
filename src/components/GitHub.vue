//  Adapted from Adam Harpur's "vue-github" project
//  This code has been released under an MIT license and modified from
//  its original version. The original codebase can be found at:
//  https://github.com/harps116/vue-github

<template>
  <div class="vue-github-wrapper">
    <div v-if="loading" class="loading-wrapper">
      <img
        src="https://github.githubassets.com/images/spinners/octocat-spinner-128.gif"
        class="spinner"
      >
      <p class="spinner-text monospace">
        <br />
        Crunching
        <a :href="'https://github.com/' + username">@{{username}}</a>'s contributions just for you.
      </p>
    </div>
    <div v-if="!loading">
      <div class="container-fluid">
        <div v-if="showCalendar" v-html="this.rawCalendar.innerHTML"></div>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
import parse from "github-calendar-parser";
import { debounce } from "./utils/utils";
export default {
  props: {
    username: { String, required: true },
    text: String,
    proxy: Function,
    showCalendar: { Boolean, default: true }
  },
  data: function() {
    return {
      loading: true,
      rawCalendar: "",
      rawSvg: "",
      builtCalendar: ""
    };
  },
  mounted() {
    this.createCalendar();
  },
  watch: {
    text: {
      handler(val, oldVal) {
        if (val !== oldVal) {
          debounce(this.createCalendar(), 100);
        }
      }
    }
  },
  methods: {
    createCalendar: function() {
      this.fetchCalendar();
    },
    fetchCalendar: function() {
      const proxy =
        this.proxy ||
        function(url) {
          return "https://urlreq.appspot.com/req?method=GET&url=" + url;
        };

      // We need a proxy for CORS
      // Thanks, @izuzak (https://github.com/izuzak/urlreq)
      fetch(proxy(`https://github.com/${this.username}`))
        .then(res => res.text())
        .then(body => {
          this.setupCalendar(body);
          if (this.rawCalendar.querySelector("includes-fragment")) {
            setTimeout(this.fetchCalendar, 500);
          } else {
            this.renderCalendar();
          }
        });
    },
    renderCalendar: async function() {
      await this.setupSvg();
      await this.parseSvg();
    },
    setupCalendar: function(body) {
      let div = document.createElement("div");
      let summary =
        this.text ||
        `Summary of pull requests, issues opened, and commits made by <a href="https://github.com/${
          this.username
        }" target="blank">@${this.username}</a>`;
      div.innerHTML = body;
      let cal = div.querySelector(".js-yearly-contributions");
      let summaryText = cal.querySelector(".float-left.text-gray");
      summaryText.innerHTML = summary;
      summaryText.className = "";
      summaryText.className = "summary-text";
      cal.querySelector(".contrib-legend").innerHTML = "";
      cal.querySelector(".activity-overview-box").parentNode.innerHTML = "";
      cal.querySelector(".f4").innerHTML = "";
      this.rawCalendar = cal;
    },
    setupSvg: function() {
      let svg = this.rawCalendar.querySelector("svg.js-calendar-graph-svg");
      let width = svg.getAttribute("width");
      let height = svg.getAttribute("height");
      // Dimension adjustment
      svg.removeAttribute("height");
      svg.setAttribute("width", "100%");
      svg.setAttribute("viewBox", "0 0 " + width + " " + height);
      this.rawSvg = svg;
    },
    parseSvg: function() {
      let parsed = parse(String(this.rawSvg.outerHTML));
      this.buildCalendar(parsed);
    },
    buildCalendar: function(data) {
      this.contribData = data;
      this.loading = false;
    }
  }
};
</script>

<style>
</style>
