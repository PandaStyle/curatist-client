<template>
    <div class="list-view grid">
        <list-item
                class="listitem"
                v-for="item in items"
                :item="item"
                track-by="id"
                transition="expand">
        </list-item>
    </div>
</template>

<script type="text/babel">
    import ListItem from './ListItem.vue'
    import Navbar from './Navbar.vue'
    import NProgress from 'nprogress';

    import imagesLoaded from 'imagesloaded';

    const API_URL_FEED = 'http://www.curatist.co:8081/feed/river/';
    const API_URL_INSP = 'http://www.curatist.co:8081/getposts/';

    export default {
        name: 'ListView',

        components: {
            ListItem
        },

        data () {
            return {
                items: null,
                apiURL: ""
            }
        },

        route: {
            data (transition) {
                let
                        type =  transition.to.params.type;

                this.apiURL = API_URL_FEED + type;
                this.isInspiration = type == "inspiration";

                if(this.isInspiration){
                    this.apiURL = API_URL_INSP + '0/40';
                }

                NProgress.start();
                this.$http.get(this.apiURL, function (results, status, request) {

                    transition.next({items: this.isInspiration ? results : results.res});

                    NProgress.done();

                }).error(function (data, status, request) {
                    throw (data);
                })
            },
            canReuse: false
        }
    }
</script>

<style>
    /* always present */
    .expand-transition {
        transition: opacity .3s ease;
    }

    /* .expand-enter defines the starting state for entering */
    /* .expand-leave defines the ending state for leaving */
    .expand-enter, .expand-leave {

        opacity: 0;
        transition: opacity .3s ease;
    }
</style>
