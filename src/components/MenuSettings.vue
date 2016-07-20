<template>
    <div class="menusettings">
        <div class="section">
            <div class="title">Layout</div>
            <div class="selection">
                <span id="grid" class="bordered option" v-bind:class="{active: $parent.view == 'tile'}" @click="$parent.toggleView('tile')">grid</span>
                <span id="list" class="bordered option" v-bind:class="{active: $parent.view == 'list'}" @click="$parent.toggleView('list')">list</span>
                <span id="pic" class="bordered option" v-bind:class="{active: $parent.view == 'pic'}" @click="$parent.toggleView('pic')">pic</span>
            </div>
        </div>


        <div class="section">
            <div class="title">Theme</div>
            <div class="selection">
                <span id="dark" class="option bordered" v-bind:class="{active: $parent.theme == 'dark'}"  @click="$parent.toggleTheme('dark')">dark</span>
                <span id="light" class="option bordered" v-bind:class="{active: $parent.theme == 'light'}" @click="$parent.toggleTheme('light')">light</span>
            </div>
        </div>

    </div>
</template>


<script type="text/babel">
    import $ from 'jquery';

    export default {
        name: 'MenuSettings'

    }
</script>

<style scoped lang="sass">
    @import "../styles/menusettings.scss";
</style>
