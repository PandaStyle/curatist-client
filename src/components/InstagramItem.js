import Vue from 'vue'


var InstagramItem = Vue.extend({
    data () {
        return {
            item: null
        }
    },


    template: '<div @click="inspirationItemClick(item)" href="{{item.link}}" target="_blank" class="tile inspiration" data-instagramid="{{item.id}}" >' +
    '<a class="overlay" @click="inspirationItemOverlayClick(item)" href="{{item.link}}" target="_blank">' +
    '<div class="lay"></div>' +
    '</a>' +
    '<img v-img="item.image.url" alt=""/>' +
    '</div>'
    ,   

    methods: {
        inspirationItemOverlayClick(item) {
            //mixpanel.track("Instagram Item Overlay Click", {"postUrl": item.post_url, "blogName": item.blog_name});
        },

        inspirationItemClick(item) {
            //mixpanel.track("Instagram Item  Click", {"postUrl": item.post_url, "blogName": item.blog_name});

            window.open(item.link);
        }
    }
});


export default InstagramItem;
