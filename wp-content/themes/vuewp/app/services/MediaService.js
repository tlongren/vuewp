import Vue from "vue";

export default {
  get(slug) {
    return Vue.http.get(`/wp-json/wp/v2/media/?slug=${slug}`);
  }
};
