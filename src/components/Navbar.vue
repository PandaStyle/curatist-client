<template>
    <div class="navbar">
        <div class="logo">
            <img src="../img/curatist-logo-o-o-white.png" alt=""/>
        </div>
        <ul class="menu">
            <li @click="toggleView" class="view-switcher" v-bind:class="getViewSwitcherClass()"></li>
            <li><a v-link="getPath ('/feed/design')">Design</a></li>
            <li><a v-link="getPath ('/feed/technology')">Tech</a></li>
            <li><a v-link="getPath ('/feed/business')">Business</a></li>
            <li><a v-link="{ path: '/feed/inspiration/tile' }">Inspiration</a></li>
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
                view: this.$route.path.substr(this.$route.path.lastIndexOf('/') + 1)
            }
        },

        methods: {
            toggleMenu () {
                this.isMenuActive = !this.isMenuActive;
            },
            toggleView () {
                    if(this.$route.params.type == "inspiration"){
                        return;
                    }
                    var otherview = this.view == "tile" ? "list" : "tile";
                    this.view = otherview;
                    this.$route.router.go(otherview);
            },
            getView () {
                var p = this.$route.path;
                return p.substr(p.lastIndexOf('/') + 1);
            },
            getPath (path) {
                    return {
                        path: path + "/" + this.view
                    }
            },
            getViewSwitcherClass () {
                return this.view == "tile" ? "icon-dial-pad" : "icon-text";
            }

        }

    }

</script>

<style lang="sass">
@import "../styles/navbar.scss";
</style>
