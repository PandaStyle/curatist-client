<template>
    <div class="navbar">
        <div class="logo">
            <img src="../img/curatist-logo-o-o-white.png" alt=""/>
        </div>
        <ul class="menu">
            <li><a v-link="{ path: '/feed/design' }">Design</a></li>
            <li><a v-link="{ path: '/feed/technology' }">Tech</a></li>
            <li><a v-link="{ path: '/feed/business' }">Business</a></li>
            <li><a v-link="{ path: '/feed/inspiration' }">Inspiration</a></li>
        </ul>
        <div class="hamburger button_container"  v-bind:class="{active: isMenuActive}" id="toggle" @click="toggleMenu">
            <span class="top"></span>
            <span class="middle"></span>
            <span class="bottom"></span>
        </div>
    </div>
    <menu v-bind:class="{open: isMenuActive}">
        <ul>
            <li>
                <a class="bordered" href="">Layouts</a>
            </li>
            <li>
                <a class="bordered" href="">Suggest a feed</a>
                <input class="suggest" type="text"/>
            </li>
            <li>
                <a class="bordered" href="">About</a>
            </li>
        </ul>
    </menu>
</template>

<script type="text/babel">
    import $ from 'jquery';

    export default {

        name: 'Navbar',

        data () {
            return {
                isMenuActive: false,
                isListViewActive: false
            }
        },

        methods: {
            toggleMenu () {
                this.isMenuActive = !this.isMenuActive;
            },
            toggleView () {
                this.isListViewActive = !this.isListViewActive;
            }
        }

    }

</script>

<style lang="sass">
@import "../styles/navbar.scss";
</style>
