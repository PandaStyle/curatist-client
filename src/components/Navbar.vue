<template>
    <div class="navbar">
        <div class="logo">
            <a class="logo-img" href="/"></a>
        </div>
        <div class="hamburger button_container"  v-bind:class="{active: isMenuActive}" id="toggle" @click="toggleMenu">
            <div class="hamb-menu-text">menu</div>
            <span class="top"></span>
            <span class="middle"></span>
            <span class="bottom"></span>
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
                <li class="small-logo">
                    <a href="/"></a>
                </li>
                <!--<li class="theme-switcher" @click="toggleTheme" ></li>-->
            </ul>
        </div>


    </div>
    <div class="blackLayer" v-bind:class="{dark: isMenuActive}"></div>


    <menu v-bind:class="{open: isMenuActive, wide: isMenuWide}">

        <ul class="menu-list" v-bind:class="{border: activeMenuView}">
            <li>
                <a data-menuview="MenuSettings" class="bordered" v-bind:class="{active: activeMenuView=='MenuSettings'}"  @click="toggleMenuView">Layouts</a>
            </li>
            <li>
                <a data-menuview="MenuWhat" class="bordered" v-bind:class="{active: activeMenuView=='MenuWhat'}"  @click="toggleMenuView">What?</a>
            </li>
            <li>
                <a data-menuview="MenuAbout"  data-menuview="layouts"class="bordered" v-bind:class="{active: activeMenuView=='MenuAbout'}" @click="toggleMenuView">Who?</a>
            </li>
            <li>
                <a data-menuview="MenuFeedback" class="bordered" v-bind:class="{active: activeMenuView=='MenuFeedback'}" @click="toggleMenuView">Thoughts?</a>
            </li>
            <li>
                <a data-menuview="MenuUpdates" class="bordered" v-bind:class="{active: activeMenuView=='MenuUpdates'}"  @click="toggleMenuView">Updates</a>
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
    import clickOutside from 'click-outside';
    import MenuWhat from './MenuWhat.vue';
    import MenuFeedback from './MenuFeedback.vue';
    import MenuAbout from './MenuAbout.vue';
    import MenuSettings from './MenuSettings.vue';
    import MenuUpdates from './MenuUpdates.vue';

    import store from '../vuex/store'

    export default {

        name: 'Navbar',

        data () {
            return {
                view: "",

                isMenuActive: false,
                isDropDownOpen: false,
                activeMenuView: "",
                theme: "",
                previousScroll: 0,

                selectedFeed: {
                    name: 'all',
                    pathname: 'all'
                },

                feedMenus: [
                    {
                        name: 'all',
                        pathname: 'all'
                    },
                    {
                        name: 'design',
                        pathname: 'design'
                    },
                    {
                        name: 'tech',
                        pathname: 'technology'
                    },
                    {
                        name: 'business',
                        pathname: 'business'
                    }
                ]
            }
        },
        components: {
            MenuWhat,
            MenuFeedback,
            MenuAbout,
            MenuSettings,
            MenuUpdates
        },

        watch: {
            'theme': function (val) {
                $('body').attr("class", val);
                localStorage.setItem('curatist_theme', val)


            },

            'view': function (val) {
                localStorage.setItem('curatist_view', val)
            },

            'isMenuActive': function (val) {
                if(!val){
                    store.dispatch('SET_MENU_WIDE_FALSE')
                }
                this.activeMenuView = "";
            }
        },

        computed: {
            isMenuOpen () {
                return store.state.isMenuOpen
            },

            isMenuWide () {
                return store.state.isMenuWide
            }
        },


        ready () {
            this.theme = localStorage.getItem('curatist_theme') ? localStorage.getItem('curatist_theme') : 'light';
            this.view = this.$route.path.substr(this.$route.path.lastIndexOf('/') + 1);
            this.feed = this.$route.params.type;

            $(window).bind('scroll', this.scrollHandler)
        },

        methods: {
            toggleMenu () {
                this.isMenuActive = !this.isMenuActive;

                if(this.isMenuActive){
                    setTimeout(() => {
                        var unbind = clickOutside(document.querySelector('menu'),  e => {
                            this.isMenuActive = false;
                            setTimeout(function () {
                                unbind();
                            }, 50);
                        });
                    }, 100)
                }
            },
            toggleMenuView (a) {
                    if(!this.isMenuWide)
                        store.dispatch('TOGGLE_MENU_WIDE')


                this.activeMenuView = a.currentTarget.attributes[0].value;

            },
            toggleView (v) {
                if(this.$route.params.type == "inspiration"){
                    return;
                }

                this.view = v;
                this.$route.router.go(v);
            },
            toggleTheme (t) {
                this.theme = t;
            },

            getView () {
                var p = this.$route.path;
                return p.substr(p.lastIndexOf('/') + 1);
            },
            getPath (path) {
                    return {
                        path: path +"/" + this.view
                    }
            },
            getViewSwitcherClass () {
                return this.view == "tile" ? "icon-text" : "icon-grid";
            },

            scrollHandler (e) {
                let window = e.currentTarget;

                /* sticky */
                let pos = 125;
                $(window).scrollTop() > pos ? $('body').addClass('sticky') : $('body').removeClass('sticky')


                /* mobile nav */
                   /* let currentScroll = $(window).scrollTop();
                    if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()){
                        if (currentScroll > this.previousScroll){
                            this.hideMobileNav()
                        } else {
                            this.showMobileNav()
                        }
                        this.previousScroll = currentScroll;
                    }*/
            },

            hideMobileNav () {
                $('.navbar .menu').removeClass("hidden").addClass("hidden");
            },

            showMobileNav () {
                $('.navbar .menu').addClass("hidden").removeClass("hidden");
            },

            toggleDD () {
                this.isDropDownOpen = !this.isDropDownOpen
            },
            reorder(name) {
                console.log(name)
                $('.dd').prepend($('.dd a#'+name))
            },



        }

    }

</script>

<style lang="sass">
@import "../styles/navbar.scss";
</style>
