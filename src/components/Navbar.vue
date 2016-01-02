<template>
    <div class="navbar">
        <div class="logo">
            <a class="logo-img" href="/"></a>
        </div>
        <ul class="menu">
            <li @click="toggleView" class="view-switcher" v-bind:class="getViewSwitcherClass()"></li>
            <li class="link-border-right"><a class="navlink" v-link="getPath ('/feed/all')">Overview</a></li>
            <li><a class="navlink" v-link="getPath ('/feed/design')">Design</a></li>
            <li><a class="navlink"  v-link="getPath ('/feed/technology')">Tech</a></li>
            <li><a class="navlink" v-link="getPath ('/feed/business')">Business</a></li>
            <li class="link-border-left"><a class="navlink" v-link="{ path: '/feed/inspiration/tile' }">Inspiration</a></li>
            <li class="theme-switcher" @click="toggleTheme" ></li>
        </ul>
        <div class="hamburger button_container"  v-bind:class="{active: isMenuActive}" id="toggle" @click="toggleMenu">
            <span class="top"></span>
            <span class="middle"></span>
            <span class="bottom"></span>
        </div>
    </div>

    <menu v-bind:class="{open: isMenuActive}">
        <ul class="menu-list" v-bind:class="{border: activeMenuView}">
            <li>
                <a data-menuview="MenuWhat" class="bordered" v-bind:class="{active: activeMenuView=='MenuWhat'}" href="#" @click="toggleMenuView">What?</a>
            </li>
            <li>
                <a data-menuview="MenuAbout"  data-menuview="layouts"class="bordered" v-bind:class="{active: activeMenuView=='MenuAbout'}" href="#" @click="toggleMenuView">Who?</a>
            </li>
            <li>
                <a data-menuview="MenuFeedback" class="bordered" v-bind:class="{active: activeMenuView=='MenuFeedback'}" href="#" @click="toggleMenuView">Thoughts?</a>
            </li>

        </ul>
        <div class="menucontent">
            <component :is="activeMenuView" transition-mode="out-in" transition="expand" keep-alive>
                <!-- component changes when vm.currentview changes! -->
            </component>
        </div>

    </menu>
</template>

<script type="text/babel">
    import $ from 'jquery';
    import MenuWhat from './MenuWhat.vue';
    import MenuFeedback from './MenuFeedback.vue';
    import MenuAbout from './MenuAbout.vue';

    export default {

        name: 'Navbar',

        data () {
            return {
                view: "",
                isMenuActive: false,
                activeMenuView: "",
                theme: "",
            }
        },
        components: {
            MenuWhat,
            MenuFeedback,
            MenuAbout
        },

        watch: {
            'theme': function (val) {
                $('body').attr("class", val);
            }
        },

        ready () {
            this.theme = "dark";
            this.view = this.$route.path.substr(this.$route.path.lastIndexOf('/') + 1);
        },

        methods: {
            toggleMenu () {
                this.isMenuActive = !this.isMenuActive;
            },
            toggleMenuView (a) {
                this.activeMenuView = a.currentTarget.attributes[0].value;
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
                return this.view == "tile" ? "icon-text" : "icon-grid";
            },
            toggleTheme () {
                if(this.theme == "dark"){
                    this.theme = "light"
                } else {
                    this.theme = "dark"
                }
            }
        }

    }

</script>

<style lang="sass">
@import "../styles/navbar.scss";
</style>
