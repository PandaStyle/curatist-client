<template>
    <div class="feed-view grid" data-columns v-if="!isInspiration">
        <feed-item
                class="feeditem"
                v-for="item in items"
                :item="item"
                track-by="id"
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
    import InspItem from './InspItem.vue'
    import Navbar from './Navbar.vue'
    import Salvattore from 'salvattore'
    import NProgress from 'nprogress';

    import imagesLoaded from 'imagesloaded';

    const API_URL_FEED = 'http://www.curatist.co:8081/feed/river/';
    const API_URL_INSP = 'http://localhost:8081/insta/';

    export default {
        name: 'TileView',

        components: {
            FeedItem,
            InspItem
        },

        data () {
            return {
                items: null,
                apiURL: "",
                salvattoreInitialized: false,
                isInspiration: false
            }
        },

        route: {
            data (transition) {
                let
                        type =  transition.to.params.type,
                        self = this;

                this.apiURL = API_URL_FEED + type;
                this.isInspiration = type == "inspiration";


                if(this.isInspiration){
                    this.apiURL = API_URL_INSP + '0/20';
                }

                NProgress.start();

                this.$http.get(this.apiURL, function (results, status, request) {

                    transition.next({items: this.isInspiration ? results : results.res});

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
