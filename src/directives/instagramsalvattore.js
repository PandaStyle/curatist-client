import Vue from 'vue'
import Salvattore from 'salvattore';
import _ from 'lodash';
import NProgress from 'nprogress';

import InstagramItem from '../components/InstagramItem'
import imagesLoaded from '../../node_modules/imagesloaded/imagesloaded.js';



var instagramsalvattore = Vue.directive('instagramsalvattore', {
    params: ['l'],

    update: function (items) {

        //TODO: replace with global.offset
        items = _.takeRight(items, this.params.l);

        var self = this,
            fragments = [];

        if(items){
            for(var i = 0; i < items.length; i++){
                fragments.push(new InstagramItem({
                    data: {
                        item: items[i]
                    }
                }).$mount().$el);
            }
        }

        this.vm.$nextTick(function(){
            if(fragments.length == 0)
                return;


            //if Salvattore isn't initialized yet
            if(document.querySelector('.grid').dataset.columns == ""){
                Salvattore.init();
            }

            Salvattore.appendElements(self.el, fragments);

            var imgLoad = imagesLoaded(self.el);

            imgLoad.on( 'progress', function( instance, image ) {
                NProgress.inc();
            });

            imgLoad.on( 'always', function ( instance ) {
                NProgress.done();
                self.vm.$dispatch('insta-imgloaded-done')
            });

        })

    },
    unbind: function () {

    }
});

export default instagramsalvattore;
