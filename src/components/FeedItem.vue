<template>
  <div class="tile feed-item square">
      <div class="tile-image"><img   v-img="item.image" alt=""/></div>
      <header>
        <a class="title" href="{{item.link}}" target="_blank">{{item.title}}</a>
        <div class="summary">{{{item.summary}}}</div>
        <div class=meta>
          <a class="host" href="{{item.link}}">{{item.feed}}</a>
          <span class="diff">{{item.diff}} ago</span>
          <span class="share general icon-share" v-bind:class="{active: isShareActive}" @click="toggleShare"></span>
          <span class="share twitter icon-twitter-with-circle" v-show="isShareActive"></span>
          <span class="share facebook icon-facebook-with-circle" v-show="isShareActive"></span>
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
      }
    }

  }
</script>

<style lang="sass">

 @import "../styles/feeditem.scss";
</style>
