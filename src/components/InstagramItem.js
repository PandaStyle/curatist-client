import Vue from 'vue'


var InstagramItem = Vue.extend({
    data () {
        return {
            item: null
        }
    },


    template: '<div class="tile inspiration" data-instagramid="{{item.id}}" >' +
    '<a class="overlay" @click="inspirationItemOverlayClick(item)">' +
    '<div class="lay"></div>' +
    '</a>' +
    '<div class="instameta">' +
    '<span class="blogname">{{item.username}}</span>' +
    '</div>' +
    '<img v-img="item.display_src" alt=""/>' +
    '</div>'
    ,

    methods: {
        inspirationItemOverlayClick(item) {
            //mixpanel.track("Instagram Item Overlay Click", {"postUrl": item.post_url, "blogName": item.blog_name});

            window.open("https://www.instagram.com/p/" + item.code);
        },

        inspirationItemClick(item) {
            //mixpanel.track("Instagram Item  Click", {"postUrl": item.post_url, "blogName": item.blog_name});

            window.open("https://www.instagram.com/p/" + item.code);
        }
    }
});


export default InstagramItem;
