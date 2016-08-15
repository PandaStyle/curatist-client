<template>
    <div class="menuupdates">

        <h2>Updates</h2>
        <div class="underline"></div>
        <div class="update-list">
            <div class="update-item">
                <div class="update-date"> 08/08/16</div>
                <div class="update-title">Introducing the brand new Curatist</div>
                <p>
                    Temporary text: Our first major release just came out! Check out our new styles
                    and features including new layouts, more feeds, more architectural awesomness than
                    you've ever dreamed before. Curate!
                </p>
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
    @import "../styles/menuupdates.scss";
</style>
