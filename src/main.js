import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import App from './components/App.vue'
import Navbar from './components/Navbar.vue'
import FeedView from './components/FeedView.vue'
import FeedItem from './components/FeedItem.vue'
import InspItem from './components/InspItem.vue'

import $ from 'jquery';

Vue.directive('img', function(url) {
  var img = new Image();
  img.src = url;

  img.onload = function() {
    this.el.src = url;
    $(this.el).addClass("loaded")
  }.bind(this);
});


Vue.use(Router);
Vue.use(VueResource);

// routing
var router = new Router({
  transitionOnLoad: true,
  hashbang: false
})

router.map({
  '/feed/:type': {
    component: FeedView
  }
})

router.redirect({
  '*': '/feed/design'
})

router.start(App, '#app');





