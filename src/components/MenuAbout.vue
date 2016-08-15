<template>
    <div class="menuabout">
        <h2>Who are we?</h2>
        <div class="underline"></div>
        <p>
            We are a coder-designer couple who had a problem: the curious architect girl loved to see all the news but got tired having to click around to countless websites; and the smart software guy knew there is a better way.
            <br/>   <br/>
            We created the Curatist to be smart, beautiful and useful.<br/>
            It's a solution we love and hope you’ll love it too.<br/>   <br/>
        </p>
        <div class="images">
            <div class="image"></div>
        </div>
        <div class="contacts">
            <div class="person timi">
                <div class="name">
                    Timea Szabo
                </div>
                <div class="meta">
                    <div class="prof">Designer</div>
                    <div class="icons">
                        <a href="https://twitter.com/timea_tailor" target="_blank" class="icon icon-twitter"></a>
                        <a href="mailto:timea.szabo@me.com" class="icon icon-mail"></a>
                    </div>
                </div>
            </div>

            <div class="person zsolt">
                <div class="name">
                    Zsolt Nemeth
                </div>
                <div class="meta">
                    <span class="prof">Coder</span>
                    <div class="icons">
                        <a href="https://twitter.com/fixedgearpanda" class="icon icon-twitter" target="_blank"></a>
                        <a href="mailto:mail@zsoltnemeth.com" class="icon icon-mail"></a>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>


<script type="text/babel">
    import $ from 'jquery';

    export default {
        name: 'MenuAbout',

        ready () {
            $('.image').mouseenter(function(){
                $('.timi .prof').text("Reindeer");
                $('.zsolt .prof').text("Boss");
                $('.contacts').addClass("hovered");
            })

            $('.image').mouseleave(function(){
                $('.timi .prof').text("Designer");
                $('.zsolt .prof').text("Coder");
                $('.contacts').removeClass("hovered");
            })
        }
    }
</script>

<style scoped lang="sass">
    @import "../styles/menuabout.scss";
</style>
