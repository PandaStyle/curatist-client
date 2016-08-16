<template>
    <div class="feed-view grid" v-bind:class="{pic: isPic}"  data-columns v-if="!isInspiration">
        <feed-item
                class="feeditem"
                v-for="item in items"
                :item="item"
                track-by="_id"
                transition="expand">
        </feed-item>
    </div>

    <div class="feed-view grid inspiration" data-columns v-if="isInspiration">
        <insp-item
                class="inspitem"
                v-for="item in items"
                :item="item"
                track-by="id"
                transition="expand">
        </insp-item>
    </div>
</template>

<script type="text/babel">
    import FeedItem from './FeedItem.vue'
    import Navbar from './Navbar.vue'
    import Salvattore from 'salvattore'
    import NProgress from 'nprogress';

    import imagesLoaded from 'imagesloaded';

    import _gaLt from '../scripts/ga_clicks'

    const API_URL_FEED = 'http://www.curatist.co:8081/feed/';
    const API_URL_INSP = 'http://localhost:8081/insta/';

    const FEED_COUNT = 50;

    export default {
        name: 'TileView',

        components: {
            FeedItem
        },

        data () {
            return {
                items: null,
                apiURL: "",
                salvattoreInitialized: false,
                isInspiration: false,
                isPic: false
            }
        },

        route: {
            data (transition) {
                let
                        type =  transition.to.params.type,
                        self = this;

                this.apiURL = API_URL_FEED + type + '/' + FEED_COUNT;
                this.isInspiration = type == "inspiration";

                // is pic
                if(transition.to.path.split('/')[transition.to.path.split('/').length -1] == "pic")
                    this.isPic  = true;

                if(this.isInspiration){
                    this.apiURL = API_URL_INSP + '0/20';
                }

                NProgress.start();

                this.$http.get(this.apiURL, function (results, status, request) {

                    transition.next({items: this.isInspiration ? results : results});

                    self.$nextTick(function () {
                        if(!self.salvattoreInitialized){
                            Salvattore.init();
                            self.salvattoreInitialized = true;
                        }
                        this.attachImagesloaded();
                    });

                }).error(function (data, status, request) {
                    throw (data);
                })
            },
            canReuse: false
        },

        ready () {
            //ga
            var _w = window;
            /* Use "click" if touchscreen device, else "mousedown" */
            var _gaLtEvt = ("ontouchstart" in _w) ? "click" : "mousedown";
            /* Attach the event to all clicks in the document after page has loaded */
            document.body.addEventListener(_gaLtEvt, _gaLt, !1);
        },

        methods: {
            attachImagesloaded () {


                var grid = this.$el.nextSibling;
                var imgLoad = imagesLoaded(grid);


                imgLoad.on( 'progress', function( instance, image ) {
                    NProgress.inc();
                });
                imgLoad.on( 'always', function ( instance ) {
                    NProgress.done();
                } );

            }
        }
    }
</script>
