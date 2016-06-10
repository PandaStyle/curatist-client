<template>
    <div class="feed-view grid inspiration" data-columns v-instagramsalvattore="items" v-bind:l="currentItemsLength"></div>
</template>


<script type="text/babel">

    import $ from 'jquery';
    import jqueryScrollStop from 'jquery-scrollstop';

    import instagramsalvattore from '../directives/instagramsalvattore';
    import NProgress from 'nprogress';
    import _ from 'lodash';


    var Config = {
        API_URL : process.env.NODE_ENV === 'production' ?  "www.curatist.co:8081/" : "http://localhost:8081/"
    }

   export default {
        name: 'Instagram',

        data () {
            return {
                items: null,
                offset: 0,
                itemsSize: 20,
                salvattoreInitialized: false,
                currentItemsLength: 0,

                smallestColumnOffset: 0
            }
        },

        computed: {
           itemsLength () {
               return this.items ? this.items.length : 0
           }
        },

        route: {
            data (transition) {
                this.fetchItems(this.offset, this.size, function(results, status, request){
                    transition.next({items: results});
                });
            }
        },

        ready () {
           // mixpanel.track("Instagram page load");

            $(window).on("scrollstart", function(){ $('body').addClass('disable-hover');});
            $(window).on("scrollstop", this.scrollHanlder);
        },

        beforeDestroy () {
            $(window).off("scrollstart");
            $(window).off("scrollstop");
        },

        events: {
            "insta-imgloaded-done": function () {
                this.setColumnHeights();
            }
        },

        methods: {
            fetchItems (offset, size, func) {
                var self = this;
                this.apiURL = Config.API_URL + "insta/" + this.offset + "/" + this.itemsSize;

                NProgress.start();

                this.$http.get(this.apiURL, function (results, status, request) {
                    self.currentItemsLength = results.length;

                    func(results, status, request)

                }).error(function (data, status, request) {
                    throw (data);
                })
            },

            loadMore () {
                var self = this;
                this.offset += 20;
                this.fetchItems(this.offset, this.size, function(results, status, request){
                    results.forEach(i => {
                        self.items.push(i);
                    });

                });
            },

            setColumnHeights() {
                for (var b = $(".column"), c = null, d = 0, e = b.length; e > d; d++) {
                    var f = $(b[d]);
                    null == c ? (c = f.height(), this.smallestColumnOffset = f.children("div").last().offset().top + f.children("div").last().height() / 2) : c > f.height() && (c = f.height(), this.smallestColumnOffset = f.children("div").last().offset().top + f.children("div").last().height() / 2);
                }
                console.log("Smallest column: ", this.smallestColumnOffset);
            },

            scrollHanlder () {
                $('body').removeClass('disable-hover');

                var b = $(window).scrollTop() + $(window).height();
                if (b >= (this.smallestColumnOffset - ($(document).height()/5)) || b >= $(document).height() ) {

                    console.log("call fetch");
                    this.loadMore();
                };
            }

        }
    }
</script>

<style>
    .tile:hover{
        cursor: pointer;
    }
</style>
