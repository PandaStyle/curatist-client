<template>
  <div class="list-item">
    <div class="image"><img v-img="item.image" alt=""/></div>
    <div class="article">
      <div class="title-holder">
        <a class="title" href="{{item.link}}">{{item.title}}</a>
      </div>
      <div class="summary">{{{item.summary ? item.summary : item.description}}}</div>
      <div class=meta>
        <span class="host">{{item.feed}}</span>
        <span class="diff">{{item.diff}} ago</span>
        <span class="share general icon-share" v-bind:class="{active: isShareActive}" @click="toggleShare"></span>
        <a href="https://twitter.com/intent/tweet?original_referer=http://curatist.co&text={{item.title}}&tw_p=tweetbutton&url={{item.link}}&via=The_Curatist"
           class="share twitter icon-twitter-with-circle"></a>
        <a href="https://www.facebook.com/sharer/sharer.php?u={{item.link}}"
           class="popup share facebook icon-facebook-with-circle" ></a>
        <a href="http://www.linkedin.com/shareArticle?mini=true&url={{item.link}}&title={{item.title}}&summary={{item.summary}}&source={{item.feed}}"
           class="share linkedin icon-linkedin-with-circle"></a>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'ListItem',

    props: {
      item: Object
    },

    data () {
      return {
        isShareActive: false
      }
    },

    methods: {
      toggleShare () {
        this.isShareActive = !this.isShareActive;
      }
    }
  }
</script>

<style lang="sass" scoped>


 @import "../styles/listitem.scss";
</style>
