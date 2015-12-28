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
        <ul class="menu-list" v-show="!isFeedbackActive">
            <li class="layout">
                <a class="bordered" href="#" @click="toggleThemeSelector">Layouts</a>
                <span class="layout-selector" v-show="isThemeSelectorActive">
                    <div class="switch-button">
                        <span class="slider {{theme}}"></span>
                        <button id="light" class="switch-button-case" @click="toggleTheme">Light</button>
                        <button id="dark" class="switch-button-case" @click="toggleTheme">Dark</button>
                    </div>
                   <!-- <span class="light" v-bind:class="{active: this.$root.$data.style=='light'}" @click="toggleTheme">light</span>
                    <span class="dark" v-bind:class="{active: this.$root.$data.style=='dark'}" @click="toggleTheme">dark</span>-->
                </span>
            </li>
            <li>
                <a class="bordered" href="#" @click="toggleFeedback">Drop us a line</a>
            </li>
            <li>
                <a class="bordered" href="#" @click="toggleFeedback">Send Feedback</a>
            </li>
            <li>
                <a class="bordered" href="#">About</a>
            </li>
            <li>
                <a class="bordered" href="#">Socialize</a>
            </li>
        </ul>
        <div id="feedback-container"  v-show="isFeedbackActive">
            <a class="cancel" href="#" @click="toggleFeedback"> Go back </a>
        </div>
    </menu>
</template>

<script type="text/babel">
    import $ from 'jquery';

    export default {

        name: 'Navbar',

        data () {
            return {
                view: "",
                theme: "",
                isMenuActive: false,
                isFeedbackActive: false,
                isThemeSelectorActive: false
            }
        },
        watch: {
            'theme': function (val, oldVal) {
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
            toggleFeedback () {
                this.isFeedbackActive = !this.isFeedbackActive;
            },
            toggleThemeSelector () {
                this.isThemeSelectorActive = !this.isThemeSelectorActive;
            },
            toggleTheme (a) {
                this.theme = $(a.currentTarget).attr('id');
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
