<template>
    <div class="navbar">
        <div class="logo">
            <a class="logo-img" href="/"></a>
        </div>
        <div class="menu-holder">
            <ul class="menu">
                <!--<li @click="toggleView" class="view-switcher" v-bind:class="getViewSwitcherClass()"></li>-->
                <li class="link-border-right"><a class="navlink bold" v-link="getPath ('/feed/all')">Feed</a></li>
                <li><a class="navlink" v-link="getPath ('/feed/design')">Design</a></li>
                <li><a class="navlink"  v-link="getPath ('/feed/technology')">Tech</a></li>
                <li><a class="navlink" v-link="getPath ('/feed/business')">Business</a></li>
                <li class="link-border-left"><a class="navlink bold" v-link="{ path: '/instagram' }">Inspiration</a></li>
                <li class="link-border-left">
                    <a class="navlink bold" v-link="{ path: '/search' }">Search</a>
                </li>
                <!--<li class="theme-switcher" @click="toggleTheme" ></li>-->
            </ul>
        </div>
        <div class="hamburger button_container"  v-bind:class="{active: isMenuActive}" id="toggle" @click="toggleMenu">
            <span class="top"></span>
            <span class="middle"></span>
            <span class="bottom"></span>
        </div>
        <div class="small-logo">
            <a href="/"></a>
        </div>
    </div>

    <menu v-bind:class="{open: isMenuActive}">
        
        <ul class="menu-list" v-bind:class="{border: activeMenuView}">
            <li>
                <a data-menuview="MenuSettings" class="bordered" v-bind:class="{active: activeMenuView=='MenuSettings'}" href="#" @click="toggleMenuView">Settings</a>
            </li>
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
    import MenuSettings from './MenuSettings.vue';

    export default {

        name: 'Navbar',

        data () {
            return {
                view: "",
                isMenuActive: false,
                activeMenuView: "",
                theme: "",
                previousScroll: 0
            }
        },
        components: {
            MenuWhat,
            MenuFeedback,
            MenuAbout,
            MenuSettings
        },

        watch: {
            'theme': function (val) {
                $('body').attr("class", val);
                this.toggleMenu()
                localStorage.setItem('curatist_theme', val)


            },

            'view': function (val) {
                this.toggleMenu()
                localStorage.setItem('curatist_view', val)
            }
        },

        ready () {
            this.theme = localStorage.getItem('curatist_theme') ? localStorage.getItem('curatist_theme') : 'dark'; 
            this.view = this.$route.path.substr(this.$route.path.lastIndexOf('/') + 1);

            $(window).bind('scroll', this.scrollHandler)
        },

        methods: {
            toggleMenu () {
                this.isMenuActive = !this.isMenuActive;
            },
            toggleMenuView (a) {
                this.activeMenuView = a.currentTarget.attributes[0].value;
            },
            toggleView (v) {
                if(this.$route.params.type == "inspiration"){
                    return;
                }
              
                this.view = v;
                this.$route.router.go(v);
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
            toggleTheme (t) {
                this.theme = t;
            },

            scrollHandler (e) {
                let window = e.currentTarget;

                /* sticky */
                let pos = 125;
                $(window).scrollTop() > pos ? $('body').addClass('sticky') : $('body').removeClass('sticky')


                /* mobile nav */
                let currentScroll = $(window).scrollTop();
                if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()){
                    if (currentScroll > this.previousScroll){
                        this.hideMobileNav()
                    } else {
                        this.showMobileNav()
                    }
                    this.previousScroll = currentScroll;
                }
            },

            hideMobileNav () {
                $('.navbar .menu').removeClass("hidden").addClass("hidden");
            },

            showMobileNav () {
                $('.navbar .menu').addClass("hidden").removeClass("hidden");
            }
        }

    }

</script>

<style lang="sass">
@import "../styles/navbar.scss";
</style>
