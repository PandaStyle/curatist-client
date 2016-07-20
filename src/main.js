import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import App from './components/App.vue'

import FeedView from './components/FeedView.vue'
import TileView from './components/TileView.vue'
import ListView from './components/ListView.vue'
import SearchView from './components/SearchView.vue'

import InstagramView from './components/Instagram.vue'

import $ from 'jquery';

Vue.use(Router);
Vue.use(VueResource);


Vue.directive('img', function (url) {

    var img = new Image();
    img.src = url;

    img.onload = function () {
        this.el.src = url;
        $(this.el).addClass("loaded")
    }.bind(this);
});


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
            '/pic': {
                component: TileView
            },
            '/list': {
                component: ListView
            }
        }
    },

    '/instagram': {
        component: InstagramView
    },

    '/search': {
        component: SearchView
    }
});

router.redirect({
    '*': '/feed/all/tile'
});

router.afterEach(transition => {
    amplitude.getInstance().logEvent('pageload ' + transition.to.path);
})

router.start(App, '#app');






