<template>
    <div class="mobile-page">
        <component :is="$route.query.comp" transition-mode="out-in" transition="expand" keep-alive>
            <!-- component changes when vm.currentview changes! -->
        </component>
    </div>
</template>

<script type="text/babel">
    import MenuFeedback from './MenuFeedback.vue';
    import MenuAbout from './MenuAbout.vue';
    import MenuSettings from './MenuSettings.vue';
    import MenuUpdates from './MenuUpdates.vue';
    import MenuWhat from './MenuWhat.vue';

    export default {
        components: {
            MenuWhat,
            MenuFeedback,
            MenuAbout,
            MenuSettings,
            MenuUpdates
        },

        ready () {

        },

    }

</script>

<style lang="sass">
    @import "../styles/mobilepage.scss";
</style>
