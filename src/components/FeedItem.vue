<template>
  <div class="tile feed-item" v-bind:class="{nopic: !item.image}">
      <a class="overlay"  href="{{item.link}}" target="_blank" ></a>
      <div class="tile-image"><img  v-lazy="item.image" alt=""/></div>
      <header>
        <div class="title-holder">
          <a class="title" href="{{item.link}}" target="_blank">{{item.title}}</a>
        </div>
        <div class="summary">{{{item.summary ? item.summary : item.description}}}</div>
        <div class=meta>
          <a class="host" href="{{item.link}}">{{item.feed}}</a>
          <span class="diff">{{item.diff}} ago</span>
          <span class="share general icon-share" v-bind:class="{active: isShareActive}" @click="toggleShare"></span>
          <a href="https://twitter.com/intent/tweet?original_referer=http://curatist.co&text={{item.title}}&tw_p=tweetbutton&url={{item.link}}&via=The_Curatist" class="share twitter icon-twitter-with-circle" v-show="isShareActive"></a>
          <a href="https://www.facebook.com/sharer/sharer.php?u={{item.link}}" class="popup share facebook icon-facebook-with-circle" v-show="isShareActive"></a>
          <a href="http://www.linkedin.com/shareArticle?mini=true&url={{item.link}}&title={{item.title}}&summary={{item.summary}}&source={{item.feed}}" class="share linkedin icon-linkedin-with-circle" v-show="isShareActive"></a>
        </div>
      </header>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'FeedItem',

    props: {
      item: Object,
      isInspiration: Boolean
    },

    data () {
      return {
        isShareActive: false
      }
    },


    methods: {
      toggleShare () {
        this.isShareActive = !this.isShareActive;
      },


      trackHover () {
        amplitude.getInstance().logEvent('item hovered' + item.title, {item: item});
      }
    }

  }
</script>

<style lang="sass">

 @import "../styles/feeditem.scss";
</style>
