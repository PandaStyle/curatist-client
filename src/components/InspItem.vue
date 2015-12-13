<template>
    <div class="tile item">
        <a class="overlay" href="{{item.post_url}}" target="_blank">
            <div class="lay"></div>
            <div class="blogname">{{item.blog_name}}</div>
        </a>
        <img v-img="url" alt=""/>
    </div>
</template>

<script type="text/babel">
    import _ from 'lodash'

    export default {

        name: 'InspItem',

        props: {
            item: Object
        },

        data () {

            return {
                url: this.getUrl()
            }

        },
        methods: {
            getUrl () {
                if(_.where(this.item.photos[0].alt_sizes, {width: 400}).length>0){
                    return _.where(this.item.photos[0].alt_sizes, {width: 400})[0].url;
                } else if(_.where(this.item.photos[0].alt_sizes, {width: 399}).length>0){
                     return _.where(this.item.photos[0].alt_sizes, {width: 399})[0].url;
                } else {
                    console.log("Image doesn't have 400 or 399 width: ", this.item, " using size " + this.item.photos[0].alt_sizes[0].width);
                    return this.item.photos[0].alt_sizes[0].url;
                }
            }
        }
    }
</script>

<style lang="sass">
    .tile {
        .blogname {
            display: block;
            position: absolute;
            padding: 30px;
            text-decoration: none !important;
            color: beige;
            bottom: 0;
            opacity: 0;
            z-index: 1;
            font-weight: bold;
            font-size: 22px;
        }

        &:hover .blogname{
             opacity: 1;
        }
    }
</style>
