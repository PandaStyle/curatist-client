<template>
    <div class="menushare">

        <h2>Share the love</h2>
        <div class="underline"></div>
        <div class="sharecont">
            <a class="share-facebook" @click="shareClick" data-href="https://www.facebook.com/sharer.php?u=http%3A//curatist.co/">Facebook</a>
            <a class="share-twitter" @click="shareClick" data-href="https://twitter.com/home?status=The%20new%20way%20to%20read%20architecture%20news%20%3A%20The%20Curatist%20http%3A%2F%2Fcuratist.co">Twitter</a>
            <a class="share-linkedin" @click="shareClick" data-href="https://www.linkedin.com/shareArticle?mini=true&url=http%3A//curatist.co/&title=The%20Curatist&summary=&source=">LinkedIn</a>
        </div>
    </div>
</template>


<script type="text/babel">
    import $ from 'jquery';

    export default {
        name: 'MenuShare',

        ready () {

        },

        methods: {
            open(e, o, a) {
                var i = screen.width / 2 - o / 2, s = screen.height / 2 - a / 2;
                window.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + o + ",height=" + a + ",top=" + s + ",left=" + i)
            },

            shareClick (e){
                e.preventDefault();
                this.open($(e.currentTarget).attr('data-href'), 500, 500)
            }
        }

    }


</script>

<style scoped lang="sass">
    @import "../styles/menushare.scss";
</style>
