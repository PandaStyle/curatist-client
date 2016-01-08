import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import App from './components/App.vue'
import Navbar from './components/Navbar.vue'
import FeedView from './components/FeedView.vue'
import TileView from './components/TileView.vue'
import ListView from './components/ListView.vue'
import FeedItem from './components/FeedItem.vue'
import InspItem from './components/InspItem.vue'

import $ from 'jquery';
import NProgress from '../node_modules/nprogress/nprogress.js';
import imagesLoaded from '../node_modules/imagesloaded/imagesloaded.js';


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
});

router.map({
  '/feed/:type': {
    component: FeedView,
      subRoutes: {
          '/tile': {
              component: TileView
          },
          '/list': {
              component: ListView
          }
      }
  }
});

router.redirect({
  '*': '/feed/all/tile'
});

router.start(App, '#app');






