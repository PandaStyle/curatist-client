<template>
    <div class="menusettings">
        <h2>Layouts</h2>
        <div class="underline"></div>
        <div class="section ">
            <div class="selection">
                <div class="item" >
                    <div id="list" class="option"  @click="toggleCombo('list', 'light')" v-bind:class="{selected: getCombo('list', 'light')}"></div>
                    <div id="list-dark" class="option"  @click="toggleCombo('list', 'dark')" v-bind:class="{selected: getCombo('list', 'dark')}"></div>
                    <div class="type">Magazine</div>
                    <div class="desc">Old time favorite.</div>
                </div>

                <div class="item" >
                    <div id="grid" class="option"  @click="toggleCombo('tile', 'light')" v-bind:class="{selected: getCombo('tile', 'light')}"></div>
                    <div id="grid-dark" class="option"  @click="toggleCombo('tile', 'dark')" v-bind:class="{selected: getCombo('tile', 'dark')}"></div>
                    <div class="type">Tile</div>
                    <div class="desc">Overlook at a glance.</div>
                </div>

                <div class="item">
                    <div id="pic" class="option" @click="toggleCombo('pic', 'light')"  v-bind:class="{selected: getCombo('pic', 'light')}"></div>
                    <div id="pic-dark" class="option" @click="toggleCombo('pic', 'dark')" v-bind:class="{selected: getCombo('pic', 'dark')}"></div>
                    <div class="type">Grid</div>
                    <div class="desc">Pictures over text.</div>
                </div>
            </div>
        </div>

    </div>
</template>


<script type="text/babel">
    import $ from 'jquery';

    export default {
        name: 'MenuSettings',

        methods: {
            toggleCombo (view, theme) {
                this.$parent.toggleView(view);
                this.$parent.toggleTheme(theme)
            },

            getCombo( view, theme) {
                return this.$parent.view == view && this.$parent.theme == theme;
            }

        }
    }
</script>

<style scoped lang="sass">
    @import "../styles/menusettings.scss";
</style>
