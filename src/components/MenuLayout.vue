<template>
    <div class="menulayout">

        <h2>Choose your theme:</h2>
        <div class="switch-button {{theme}}">
            <span class="slider"></span>
            <button id="light" class="switch-button-case" @click="toggleTheme">Light</button>
            <button id="dark" class="switch-button-case" @click="toggleTheme">Dark</button>
        </div>

    </div>
</template>

<script type="text/babel">
    import $ from 'jquery';

    export default {

        name: 'MenuLayout',

        data () {
            return {
                theme: "",
            }
        },
        watch: {
            'theme': function (val) {
                $('body').attr("class", val);
            }
        },
        ready () {
            this.theme = "dark";
        },
        methods : {
            toggleTheme (a) {
                this.theme = $(a.currentTarget).attr('id');
            },
        },

    }
</script>

<style lang="sass">
    @import "../styles/menulayout.scss";
</style>