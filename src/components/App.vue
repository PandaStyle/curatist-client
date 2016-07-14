<template >
    <navbar></navbar>

    <router-view></router-view>
</template>

<script type="text/babel">
    import $ from 'jquery';
    import Navbar from './Navbar.vue'

    export default {
        data () {
            return {
                view: "",
                style: "dark"
            }
        },
        components: {
            Navbar
        },
        ready () {
            amplitude.getInstance().logEvent('App started');

            $(window).on("scrollstart", function(){ $('body').addClass('disable-hover');});
            $(window).on("scrollstop", function(){ $('body').removeClass('disable-hover');});
        }
    }
</script>

<style lang="sass">
    @import "../styles/app.scss";
</style>
